/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-17 23:09:43
 * @version $Id$
 */

/* ASCIIsvg-IM.js
Heavily revised by Murray Bourne, IntMath.com
==============================================================
JavaScript routines to dynamically generate Scalable Vector Graphics
using a mathematical xy-coordinate system (y increases upwards).

Based on version of Sept 12, 2009 (c) Peter Jipsen http://www1.chapman.edu/~jipsen/

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or (at
your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
General Public License (at http://www.gnu.org/copyleft/gpl.html)
for more details.*/

///////////////////////////////////////
//
// Board variables
//
///////////////////////////////////////

var doc = document;
var boundingDiv;
var svgID;
var boardPropsArr = [];
var viewPortWidth = window.innerWidth,
    viewPortHeight = window.innerHeight;
var origin;
var dx,dy,labels,gdx,gdy;
var xAxisVble = "x", yAxisVble = "y";
var doAxes = 1;
var doGrids = 1;
var boardWidth, boardHeight, boardWidthToHeight=0.75;
var xMin, yMin, xMax, yMax, xunitlength, yunitlength;
var xmin, xmax, ymin, ymax,
    xgrid, ygrid, xtick, ytick, initialized, opacity, stroke, below;
var padding = 20;

///////////////////////////////////////
//
// Graph attribute variables
//
///////////////////////////////////////

var gridstroke = "#ddd";
var ticklength = 4;
var axesstroke = "black";
var markerstrokewidth = "1";
var strokedasharray = '';
var markerstroke = "black";
var markerfill = "#165a71";
var markersize = 4;
var marker = "none";
var arrowfill = "#555";
var dotradius = 4;
var strokeopacity = 1;
var fillopacity = 1;
var shaperendering = null;

///////////////////////////////////////
//
// Math functions, symbols and constants
//
///////////////////////////////////////
var cpi = "\u03C0", ctheta = "\u03B8";
var pi = Math.PI, ln = Math.log, e = Math.E;
var arcsin = Math.asin, arccos = Math.acos, arctan = Math.atan;
var sin = function(x) { return Math.sin(x) };
var cos = function(x) { return Math.cos(x) };
var tan = function(x) { return Math.tan(x) };
var sec = function(x) { return 1/Math.cos(x) };
var csc = function(x) { return 1/Math.sin(x) };
var cot = function(x) { return 1/Math.tan(x) };
var arcsec = function(x) { return arccos(1/x) };
var arccsc = function(x) { return arcsin(1/x) };
var arccot = function(x) { return arctan(1/x) };
var sinh = function(x) { return (Math.exp(x)-Math.exp(-x))/2 };
var cosh = function(x) { return (Math.exp(x)+Math.exp(-x))/2 };
var tanh = function(x) { return (Math.exp(x)-Math.exp(-x))/(Math.exp(x)+Math.exp(-x)) };
var sech = function(x) { return 1/cosh(x) };
var csch = function(x) { return 1/sinh(x) };
var coth = function(x) { return 1/tanh(x) };
var arcsinh = function(x) { return ln(x+Math.sqrt(x*x+1)) };
var arccosh = function(x) { return ln(x+Math.sqrt(x*x-1)) };
var arctanh = function(x) { return ln((1+x)/(1-x))/2 };
var arcsech = function(x) { return arccosh(1/x) };
var arccsch = function(x) { return arcsinh(1/x) };
var arccoth = function(x) { return arctanh(1/x) };
var sign = function(x) { return (x==0?0:(x<0?-1:1)) };
function factorial(x,n) {
  if (n==null) n=1;
  for (var i=x-n; i>0; i-=n) x*=i;
  return (x<0?NaN:(x==0?1:x));
}
function C(x,k) {
  var res=1;
  for (var i=0; i<k; i++) res*=(x-i)/(k-i);
  return res;
}
function chop(x,n) {
  if (n==null) n=0;
  return Math.floor(x*Math.pow(10,n))/Math.pow(10,n);
}
function ran(a,b,n) {
  if (n==null) n=0;
  return chop((b+Math.pow(10,-n)-a)*Math.random()+a,n);
}

// Source: http://mtdevans.com/2013/05/fourth-order-runge-kutta-algorithm-in-javascript-with-demo/
// Converted from Python version: http://doswa.com/2009/01/02/fourth-order-runge-kutta-numerical-integration.html
function rk4(x, v, a, dt) {
  // Returns final (position, velocity) array after time dt has passed.
  //        x: initial position
  //        v: initial velocity
  //        a: acceleration function a(x,v,dt) (must be callable)
  //        dt: timestep
//console.log("x="+x);
  var x1 = x;
  var v1 = v;
  var a1 = a(x1, v1, 0);

  var x2 = x + 0.5*v1*dt;
  var v2 = v + 0.5*a1*dt;
  var a2 = a(x2, v2, dt/2);

  var x3 = x + 0.5*v2*dt;
  var v3 = v + 0.5*a2*dt;
  var a3 = a(x3, v3, dt/2);

  var x4 = x + v3*dt;
  var v4 = v + a3*dt;
  var a4 = a(x4, v4, dt);

  var xf = x + (dt/6)*(v1 + 2*v2 + 2*v3 + v4);
  var vf = v + (dt/6)*(a1 + 2*a2 + 2*a3 + a4);
//console.log(xf);
  return [xf, vf];
}

// Source: http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (-angleInDegrees) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

///////////////////////////////////////
//
// Board graphing functions
//
///////////////////////////////////////

function makeSVG(tag, attrs, id) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) {
        el.setAttribute(k, attrs[k]);
    }
    document.getElementById(id).appendChild(el);
    return el;
}

function myCreateElementSVG(t) {
  return document.createElementNS("http://www.w3.org/2000/svg",t);
}

// Source: http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function angleArc(p, radius, startAngle, endAngle, id){
    var node;
    if (id!=null) node = doc.getElementById(id);
    if (node==null) {
        node = myCreateElementSVG("path");
        node.setAttribute("id", id);
        theSVG.appendChild(node);
    }
    node.setAttribute("stroke-width", strokewidth);
    node.setAttribute("stroke-opacity", strokeopacity);
    node.setAttribute("stroke", stroke);
    node.setAttribute("fill", fill);
    node.setAttribute("fill-opacity", fillopacity);
    var start = polarToCartesian(p[0]*xunitlength+origin[0], p[1]*yunitlength+(boardHeight - origin[1]), radius, startAngle);
    var end = polarToCartesian(p[0]*xunitlength+origin[0], p[1]*yunitlength+(boardHeight - origin[1]), radius, endAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    var d = "M"+ (start.x).toFixed(2) + "," + (start.y).toFixed(2) + " " + "A" + radius + "," + radius + " 0 " + largeArcFlag + " 0 " + (end.x).toFixed(2) + "," + (end.y).toFixed(2) +
            " L" +  (end.x).toFixed(2) + "," + (end.y).toFixed(2) + " " + p[0]*xunitlength+origin[0] + "," + p[1]*yunitlength+(boardHeight - origin[1]) + " Z";
    node.setAttribute("d", d);
}

function arc(start,end,radius,id) { // coordinates in units
  var node, v;
  if (id!=null) node = doc.getElementById(id);
  if (radius==null) {
    v=[end[0]-start[0],end[1]-start[1]];
    radius = Math.sqrt(v[0]*v[0]+v[1]*v[1]);
  }
  if (node==null) {
    node = myCreateElementSVG("path");
    node.setAttribute("id", id);
    theSVG.appendChild(node);
  }
  node.setAttribute("d","M"+(start[0]*xunitlength+origin[0])+","+
    (boardHeight-start[1]*yunitlength-origin[1])+" A"+radius*xunitlength+","+
     radius*yunitlength+" 0 0,0 "+(end[0]*xunitlength+origin[0])+","+
    (boardHeight-end[1]*yunitlength-origin[1]));
  node.setAttribute("stroke-width", strokewidth);
  node.setAttribute("stroke", stroke);
  node.setAttribute("fill", fill);
  node.setAttribute("opacity", opacity);
  if (marker=="arrow" || marker=="arrowdot") {
    u = [(end[1]-start[1])/4,(start[0]-end[0])/4];
    v = [(end[0]-start[0])/2,(end[1]-start[1])/2];
    v = [start[0]+v[0]+u[0],start[1]+v[1]+u[1]];
  } else v=[start[0],start[1]];
  if (marker=="dot" || marker=="arrowdot") {
    ASdot(start,markersize,markerstroke,markerfill);
    if (marker=="arrowdot") arrowhead(v,end);
    ASdot(end,markersize,markerstroke,markerfill);
  } else if (marker=="arrow") arrowhead(v,end);
}

function arrowhead(p,q,id) {
    $p = p; $q = q;
    if(typeof(id)=="undefined") id="arrHead"+Math.floor(Math.random() * 1000);
    $ox = origin[0]; $oy = origin[1];
    if ($q[0] == $p[0]) {
        if($q[1] > $p[1]) {
            $rotateAngleRad = 0;
        } else {
            $rotateAngleRad = Math.PI;
        }
    } else {
        $rotateAngleRad = Math.PI/2 - Math.atan( (($q[1] - $p[1])*yunitlength) / (($q[0] - $p[0])*xunitlength) );
    }
    if($q[0] < $p[0]) {
        $rotateAngleRad = Math.PI + $rotateAngleRad;
    }
    $rotateAngleDeg = (180/Math.PI)*$rotateAngleRad;
    $triRotate = Math.round($rotateAngleDeg);
    if( typeof($triWidth)=="undefined" ) {
        $triWidth = 7;
    }
    if( typeof($triHeight)=="undefined" ) {
        $triHeight = 12;
    }
    $rot = "rotate("+$triRotate+" "+Math.round($ox+$q[0]*xunitlength)+" "+Math.round(boardHeight-$oy-$q[1]*yunitlength)+")";
    $st = 'M '+Math.round($ox+$q[0]*xunitlength)+' '+Math.round(boardHeight-$oy-$q[1]*yunitlength)+' L '+Math.round($ox+$q[0]*xunitlength-$triWidth/2)+' '+Math.round(boardHeight-$oy+$triHeight-$q[1]*yunitlength)+' L '+Math.round($ox+$q[0]*xunitlength+$triWidth/2)+' '+Math.round(boardHeight-$oy+$triHeight-$q[1]*yunitlength)+' Z';
    var arrHead = makeSVG('path', {
                d:$st,
                transform:$rot,
                stroke:stroke,
                fill: arrowfill,
                id: id
                }, svgID);
}

function ASdot(center, radius, s, f, id) {
    if (s == null) s = stroke;
    if (f == null) f = fill;
    var node = myCreateElementSVG("circle");
    node.setAttribute("id", id);
    node.setAttribute("cx", center[0] * xunitlength + origin[0]);
    node.setAttribute("cy", boardHeight - center[1] * yunitlength - origin[1]);
    node.setAttribute("r", radius);
    node.setAttribute("stroke-width", strokewidth);
    node.setAttribute("stroke-opacity", strokeopacity);
    node.setAttribute("stroke", s);
    node.setAttribute("fill", f);
    /*node.setAttribute("class", "draggable");
     node.setAttribute("transform", "matrix(1 0 0 1 0 0)");
     node.setAttribute("onmousedown", "selectElement(evt)");*/

    theSVG.appendChild(node)
}

function circle(center,radius,id) {
    // When axe3s are not equal scaled, should look like an ellipse...
    ellipse(center,radius,radius,id);
}

function ellipse(center,rx,ry,id) { // coordinates in units
  var node;
  if (id!=null) node = doc.getElementById(id);
  if (node==null) {
    node = myCreateElementSVG("ellipse");
    node.setAttribute("id", id);
    theSVG.appendChild(node);
  }
  node.setAttribute("cx",center[0]*xunitlength+origin[0]);
  node.setAttribute("cy",boardHeight-center[1]*yunitlength-origin[1]);
  node.setAttribute("rx",rx*xunitlength);
  node.setAttribute("ry",ry*yunitlength);
  node.setAttribute("stroke-width", strokewidth);
  node.setAttribute("stroke-opacity", strokeopacity);
  node.setAttribute("stroke", stroke);
  node.setAttribute("fill", fill);
  node.setAttribute("fill-opacity", fillopacity);
}
function dot(center, typ, label, pos, id) {
    var node;
    var cx = center[0] * xunitlength + origin[0];
    var cy = boardHeight - center[1] * yunitlength - origin[1];
    if (id != null) node = doc.getElementById(id);
    if (typ == "+" || typ == "-" || typ == "|") {
        if (node == null) {
            node = myCreateElementSVG("path");
            node.setAttribute("id", id);
            theSVG.appendChild(node)
        }
        if (typ == "+") {
            node.setAttribute("d", " M " + (cx - ticklength) + " " + cy + " L " + (cx + ticklength) + " " + cy + " M " + cx + " " + (cy - ticklength) + " L " + cx + " " + (cy + ticklength));
            node.setAttribute("stroke-width", 1);
            node.setAttribute("stroke", axesstroke)
        } else {
            if (typ == "-") node.setAttribute("d", " M " + (cx - ticklength) + " " + cy + " L " + (cx + ticklength) + " " + cy);
            else node.setAttribute("d", " M " + cx + " " + (cy - ticklength) + " L " + cx + " " + (cy + ticklength));
            node.setAttribute("stroke-width", strokewidth);
            node.setAttribute("stroke", stroke)
        }
    } else {
        if (node == null) {
            node = myCreateElementSVG("circle");
            node.setAttribute("id", id);
            theSVG.appendChild(node)
        }
        node.setAttribute("cx", cx);
        node.setAttribute("cy", cy);
        node.setAttribute("r", dotradius);
        node.setAttribute("stroke-width", strokewidth);
        node.setAttribute("stroke", stroke);
        node.setAttribute("fill", (typ == "open" ? "white" : stroke))
    }
    if (label != null && label.length > 0) text(center, label, (pos == null ? "below" : pos), (id == null ? id : id + "label"))
}
function line(p, q, id, strokedasharray) {
    var node;
    if (id) node = doc.getElementById(id);
    if (node == null) {
        node = myCreateElementSVG("path");
        node.setAttribute("id", id);
        theSVG.appendChild(node)
    }

    if (strokedasharray != null) node.setAttribute("stroke-dasharray", strokedasharray);
    if (shaperendering != null) node.setAttribute("shape-rendering", shaperendering);
    node.setAttribute("stroke", stroke);
    node.setAttribute("fill", fill);
    node.setAttribute("vector-effect", "non-scaling-stroke");

    if (marker == "dotdot" || marker == "dotarrow") {
        strokewidth = 1.5;
        if(typeof(firstDotClosed) != "undefined" && firstDotClosed == 1) {
            mrkrfill = "#165a71";
        } else {
            mrkrfill = markerfill;
        }
        ASdot(p, markersize, markerstroke, mrkrfill);   // First dot
        slopeAng = arctan( (q[1]-p[1]) / (q[0]-p[0]));
        mrkrsize0 = markersize * cos(slopeAng);
        mrkrsize1 = markersize * sin(slopeAng);
        if (marker == "dotdot") {
            strokewidth = 1.5;
            ASdot(q, markersize, markerstroke, markerfill); // Second dot
        } else if (marker == "dotarrow") {
            arrowhead(p, q);
            if (p[0] > q[0]) {
                mrkrsize0 = -mrkrsize0;
            }
        }
        strokewidth = 3;
     } else if  (marker == "arrow") {
        arrowhead(p, q);
        mrkrsize0 = 0; mrkrsize1 = 0;
        strokewidth = 3;
     } else {
        mrkrsize0 = 0; mrkrsize1 = 0;
     }
    node.setAttribute("d", "M" + (p[0] * xunitlength + origin[0] + mrkrsize0) + "," + (boardHeight - p[1] * yunitlength - origin[1] - mrkrsize1) + " " + (q[0] * xunitlength + origin[0] - mrkrsize0) + "," + (boardHeight - q[1] * yunitlength - origin[1] + mrkrsize1));
    node.setAttribute("stroke-width", strokewidth);
    start = p; end = q;
  if (marker=="arrow" || marker=="arrowdot") {

    u = [(end[1]-start[1])/4,(start[0]-end[0])/4];
    v = [(end[0]-start[0])/2,(end[1]-start[1])/2];
    v = [start[0]+v[0]+u[0],start[1]+v[1]+u[1]];
  } else v=[start[0],start[1]];
  if (marker=="dot" || marker=="arrowdot") {
    ASdot(start,markersize,markerstroke,markerfill);
    if (marker=="arrowdot") arrowhead(v,end);
    ASdot(end,markersize,markerstroke,markerfill);
  } else if (marker=="arrow") arrowhead(v,end);

}
function path(plist,id,c) {
  if (c==null) c="";
  var node, st, i;
  if (id!=null) node = doc.getElementById(id);
  if (node==null) {

    node = myCreateElementSVG("path");
    node.setAttribute("id", id);
    theSVG.appendChild(node);
  }
  if (typeof plist == "string") st = plist;
  else {
    st = "M";
    st += (plist[0][0]*xunitlength+origin[0]).toFixed(2)+","+
          (boardHeight-plist[0][1]*yunitlength-origin[1]).toFixed(2)+" "+c;
    for (i=1; i<plist.length; i++)
      st += (plist[i][0]*xunitlength+origin[0]).toFixed(2)+","+
            (boardHeight-plist[i][1]*yunitlength-origin[1]).toFixed(2)+" ";
  }
  node.setAttribute("d", st);

  node.setAttribute("stroke-width", strokewidth);
  if(typeof(opacity) != "undefined") {node.setAttribute("opacity", opacity);}
  node.setAttribute("vector-effect", "non-scaling-stroke");

  if (strokedasharray!=null)
    node.setAttribute("stroke-dasharray", strokedasharray);
  node.setAttribute("stroke", stroke);
  node.setAttribute("fill", fill);
  if (marker=="dot" || marker=="arrowdot")
    for (i=0; i<plist.length; i++)
      if (c!="C" && c!="T" || i!=1 && i!=2)
        ASdot(plist[i],markersize,markerstroke,markerfill);
}
var x;
function plot(fun,x_min,x_max,points,id) {
  pth = [];
  f = function(x) { return x };
  g = fun;
  var name = null;
  var graphFn = [];
  var q=[];
  if (typeof fun=="string") {
    eval("g = function(x){ with(Math) return "+mathjs(fun)+"; }");
//fun = "2*Math.cos(x/3)";
//g = new Function('x', 'with(Math) return ' + mathjs(fun) + ';');
//bim = mathjs(fun);
//g = function(x){ with(Math) return bim; }
//console.log(g);
//console.log("g2="+g(2))
  } else if (typeof fun=="object") {
    eval("f = function(t){ with(Math) return "+mathjs(fun[0])+" }");
    eval("g = function(t){ with(Math) return "+mathjs(fun[1])+" }");
  }
  if (typeof x_min=="string") { name = x_min; x_min = xmin }
  else name = id;
  var min = (x_min==null?xmin:x_min);
  var max = (x_max==null?xmax:x_max);
  var inc = max-min-0.000001*(max-min);
  inc = (points==null?inc/200:inc/points);
  var gt;
  for (var t = min; t <= max; t += inc) {
    gt = g(t);
    if (!(isNaN(gt)||Math.abs(gt)=="Infinity") && gt > 1.3*ymin && gt < 1.3*ymax ) {
        pth.push([f(t), gt]);
    }
  }
  if(pth.length > 0) {
    path(pth,name);
  } else {
    console.log("There are no points to plot. Are your xMin, xMax and yMin, yMax positioned correctly?");
  }
}
function rect(p,q,id,rx,ry) { // opposite corners in units, rounded by radii
  var node;
  if (id!=null) node = doc.getElementById(id);
  if (node==null) {
    node = myCreateElementSVG("rect");
    node.setAttribute("id", id);
    theSVG.appendChild(node);
  }
  node.setAttribute("x",p[0]*xunitlength+origin[0]);
  node.setAttribute("y",boardHeight-q[1]*yunitlength-origin[1]);
  node.setAttribute("width",(q[0]-p[0])*xunitlength);
  node.setAttribute("height",(q[1]-p[1])*yunitlength);
  if (rx!=null) node.setAttribute("rx",rx*xunitlength);
  if (ry!=null) node.setAttribute("ry",ry*yunitlength);
  node.setAttribute("stroke-width", strokewidth);
  node.setAttribute("stroke", stroke);
  node.setAttribute("fill", fill);
  node.setAttribute("fill-opacity", fillopacity);
}

function strip_tags(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent||tmp.innerText;
}

function text(p,str,pos,id,fontsty,fontfam) {
      var textanchor = "middle";
      var dx = 0; var dy = fontsize/3;
      if (pos!=null) {
        if (pos.slice(0,5)=="above") dy = -fontsize/2;
        if (pos.slice(0,5)=="below") dy = fontsize-0;
        if (pos.slice(0,5)=="right" || pos.slice(5,10)=="right") {
          textanchor = "start";
          dx = fontsize/2;
        }
        if (pos.slice(0,4)=="left" || pos.slice(5,9)=="left") {
          textanchor = "end";
          dx = -fontsize/2;
        }
      }

    strTxt = strip_tags(str); // Necessary for pi
    /*if( isNaN(str) && str.length != strTxt.length) {
        newDiv = document.createElement('div');
        newDiv.id = id;
        newDiv.className = "svgHTML intmath";
        newDiv.style = "position:absolute;top:"+ Math.round(boardHeight - p[1]*xunitlength - origin[1]-padding + dy)+"px;left:"+ Math.round(p[0]*xunitlength+origin[0] + dx - 5) +"px";
        newDiv.innerHTML = str;
        boundingDiv.appendChild(newDiv);
        return;
    }*/
      var node;
      if (typeof(id) !== "undefined" && id.length>0) node = doc.getElementById(id);
      if (node==null) {
        node = myCreateElementSVG("text");
         if (typeof(id) !== "undefined" && id.length>0) {
            node.setAttribute("id", id);
         }
        theSVG.appendChild(node);
        node.appendChild(document.createTextNode(str));
      }
      node.lastChild.nodeValue = strTxt;
      node.setAttribute("x",(p[0]*xunitlength+origin[0]+dx).toFixed(2));
      node.setAttribute("y",(boardHeight-p[1]*yunitlength-origin[1]+dy).toFixed(2));
      node.setAttribute("font-style",(fontsty!=null?fontsty:fontstyle));
      node.setAttribute("font-family",(fontfam!=null?fontfam:fontfamily));
      if(str == "x" || str == "y") { // For axes labels
        fs = 16;
      } else {
         fs = fontsize;
      }
      node.setAttribute("font-size",fs);
      node.setAttribute("font-weight",fontweight);
      node.setAttribute("text-anchor",textanchor);
      if (fontstroke!="none") node.setAttribute("stroke",fontstroke);
      if (fontfill!="none") node.setAttribute("fill",fontfill);
      return p;

}

///////////////////////////////////////
//
// String and "nice" math functions
//
///////////////////////////////////////

function chopZ(st) {
  var k = st.indexOf(".");
  if (k==-1) return st;
  for (var i=st.length-1; i>k && st.charAt(i)=="0"; i--);
  if (i==k) i--;
  return st.slice(0,i+1);
}

function mathjs(st) {
  // Translate a math formula to js function notation
  // e.g. a^b --> pow(a,b), na --> n*a, (...)d --> (...)*d
  // n! --> factorial(n), sin^-1 --> arcsin etc.
  // While ^ in string, find term on left and right slice and concat new formula string
  st = st.replace(/\s/g,"");
  if (st.indexOf("^-1")!=-1) {
    st = st.replace(/sin\^-1/g,"arcsin");
    st = st.replace(/cos\^-1/g,"arccos");
    st = st.replace(/tan\^-1/g,"arctan");
    st = st.replace(/sec\^-1/g,"arcsec");
    st = st.replace(/csc\^-1/g,"arccsc");
    st = st.replace(/cot\^-1/g,"arccot");
    st = st.replace(/sinh\^-1/g,"arcsinh");
    st = st.replace(/cosh\^-1/g,"arccosh");
    st = st.replace(/tanh\^-1/g,"arctanh");
    st = st.replace(/sech\^-1/g,"arcsech");
    st = st.replace(/csch\^-1/g,"arccsch");
    st = st.replace(/coth\^-1/g,"arccoth");
  }
  st = st.replace(/^e$/g,"(E)");
  st = st.replace(/^e([^a-zA-Z])/g,"(E)$1");
  st = st.replace(/([^a-zA-Z])e([^a-zA-Z])/g,"$1(E)$2");
  st = st.replace(/([0-9])([\(a-zA-Z])/g,"$1*$2");
  st = st.replace(/\)([\(0-9a-zA-Z])/g,"\)*$1");
  var i,j,k, ch, nested;
  while ((i=st.indexOf("^"))!=-1) {
    //find left argument
    if (i==0) return "Error: missing argument";
    j = i-1;
    ch = st.charAt(j);
    if (ch>="0" && ch<="9") {// look for (decimal) number
      j--;
      while (j>=0 && (ch=st.charAt(j))>="0" && ch<="9") j--;
      if (ch==".") {
        j--;
        while (j>=0 && (ch=st.charAt(j))>="0" && ch<="9") j--;
      }
    } else if (ch==")") {// look for matching opening bracket and function name
      nested = 1;
      j--;
      while (j>=0 && nested>0) {
        ch = st.charAt(j);
        if (ch=="(") nested--;
        else if (ch==")") nested++;
        j--;
      }
      while (j>=0 && (ch=st.charAt(j))>="a" && ch<="z" || ch>="A" && ch<="Z")
        j--;
    } else if (ch>="a" && ch<="z" || ch>="A" && ch<="Z") {// look for variable
      j--;
      while (j>=0 && (ch=st.charAt(j))>="a" && ch<="z" || ch>="A" && ch<="Z")
        j--;
    } else {
      return "Error: incorrect syntax in "+st+" at position "+j;
    }
    //find right argument
    if (i==st.length-1) return "Error: missing argument";
    k = i+1;
    ch = st.charAt(k);
    if (ch>="0" && ch<="9" || ch=="-") {// look for signed (decimal) number
      k++;
      while (k<st.length && (ch=st.charAt(k))>="0" && ch<="9") k++;
      if (ch==".") {
        k++;
        while (k<st.length && (ch=st.charAt(k))>="0" && ch<="9") k++;
      }
    } else if (ch=="(") {// look for matching closing bracket and function name
      nested = 1;
      k++;
      while (k<st.length && nested>0) {
        ch = st.charAt(k);
        if (ch=="(") nested++;
        else if (ch==")") nested--;
        k++;
      }
    } else if (ch>="a" && ch<="z" || ch>="A" && ch<="Z") {// look for variable
      k++;
      while (k<st.length && (ch=st.charAt(k))>="a" && ch<="z" ||
               ch>="A" && ch<="Z") k++;
    } else {
      return "Error: incorrect syntax in "+st+" at position "+k;
    }
    st = st.slice(0,j+1)+"pow("+st.slice(j+1,i)+","+st.slice(i+1,k)+")"+
           st.slice(k);
  }
  while ((i=st.indexOf("!"))!=-1) {
    //find left argument
    if (i==0) return "Error: missing argument";
    j = i-1;
    ch = st.charAt(j);
    if (ch>="0" && ch<="9") {// look for (decimal) number
      j--;
      while (j>=0 && (ch=st.charAt(j))>="0" && ch<="9") j--;
      if (ch==".") {
        j--;
        while (j>=0 && (ch=st.charAt(j))>="0" && ch<="9") j--;
      }
    } else if (ch==")") {// look for matching opening bracket and function name
      nested = 1;
      j--;
      while (j>=0 && nested>0) {
        ch = st.charAt(j);
        if (ch=="(") nested--;
        else if (ch==")") nested++;
        j--;
      }
      while (j>=0 && (ch=st.charAt(j))>="a" && ch<="z" || ch>="A" && ch<="Z")
        j--;
    } else if (ch>="a" && ch<="z" || ch>="A" && ch<="Z") {// look for variable
      j--;
      while (j>=0 && (ch=st.charAt(j))>="a" && ch<="z" || ch>="A" && ch<="Z")
        j--;
    } else {
      return "Error: incorrect syntax in "+st+" at position "+j;
    }
    st = st.slice(0,j+1)+"factorial("+st.slice(j+1,i)+")"+st.slice(i+1);
  }
  return st;
}

///////////////////////////////////////
//
// InitBoard and axes
//
///////////////////////////////////////



function axes(dx,dy,labels,gdx,gdy,xAxisVble,yAxisVble) {

    //////////////////////////////////////////
    //
    // dx for ticks and labels on horiz axis
    // dy for ticks and labels on vert axis
    // labels can be any text - "labels" (for showing labels) or null to hide labels
    // gdx for grids horiz axis (null turns them off)
    // gdy for grids on vert axis (null turns them off)
    //
    ///////////////////////////////////////////

    var nanObj = {dx:dx,dy:dy,gdx:gdx};
    for (var name in nanObj){
        if(isNaN(nanObj[name]) || typeof(nanObj[name]) == "undefined") {
            console.log(name + " is not a number! Aborting...");
            return;
        }
    }

    if(dx==null && dy==null) {
        doAxes=0;
    }

    if(gdx==null && gdy==null) {
        doGrids=0;
    }


    //console.log(dx/Math.PI);




    var x, y, ldx, ldy, lx, ly, lxp, lyp, pnode, st;
//  if (typeof dx=="string") { labels = dx; dx = null; }
//  if (typeof dy=="string") { gdx = dy; dy = null; }
    dx = (dx==null?xunitlength:dx*xunitlength);
    dy = (dy==null?dx:dy*yunitlength);
    fontsize = Math.max(12, Math.min(dx/2,dy/2,16));
    ticklength = fontsize/4;


    // Grids
    if(doGrids == 1) {
        gdx = (typeof gdx=="string"?dx:gdx*xunitlength);
        gdy = (gdy==null?dy:gdy*yunitlength);
        pnode = document.createElementNS('http://www.w3.org/2000/svg', "path");
        st="";
        if (gdx!==null && gdx!== 0 && gdx > 0) {
            for (x = origin[0]; x<boardWidth; x = x+gdx)
              st += " M"+x.toFixed(2)+",0"+" "+x.toFixed(2)+","+boardHeight.toFixed(2);
            for (x = origin[0]-gdx; x>0; x = x-gdx)
              st += " M"+x.toFixed(2)+",0"+" "+x.toFixed(2)+","+boardHeight.toFixed(2);
        } else {
            console.log("Is your gdax null or otherwise strange? Aborting...");
            return;
        }
        if (gdy!==null && gdy!== 0 && gdy > 0) {
            if(gdy > 0 ) {
              for (y = boardHeight-origin[1]; y<boardHeight-0.99*padding; y = y+gdy){
                st += " M0,"+y.toFixed(2)+" "+boardWidth+","+y.toFixed(2);
              }
            }
            for (y = boardHeight-origin[1]-gdy; y>0.99*padding; y = y-gdy) {
              st += " M0,"+y.toFixed(2)+" "+boardWidth+","+y.toFixed(2);
            }
        } else {
            console.log("Is your yMax less than your yMin? Aborting...");
            return;
        }

        pnode.setAttribute("d",st);
        pnode.setAttribute("stroke-width", 1);
        pnode.setAttribute("shape-rendering", "crispEdges");
        pnode.setAttribute("stroke", gridstroke);
        pnode.setAttribute("fill", fill);
        theSVG.appendChild(pnode);
    }

    if(doAxes == 1) {

        // Axes
        pnode = document.createElementNS('http://www.w3.org/2000/svg', "path");
        st="M0,"+(boardHeight-origin[1]).toFixed(2)+" "+boardWidth.toFixed(2)+","+
        (boardHeight-origin[1]).toFixed(2)+" M"+origin[0].toFixed(2)+",0 "+origin[0].toFixed(2)+","+boardHeight.toFixed(2);

        if(dx !== null && dx > 0) {
            for (x = origin[0]+dx; x<boardWidth; x = x+dx) {
                st += " M"+x.toFixed(2)+","+(boardHeight-origin[1]+ticklength).toFixed(2)+" "+x.toFixed(2)+","+
                    (boardHeight-origin[1]-ticklength).toFixed(2);
            }
            for (x = origin[0]-dx; x>0; x = x-dx) {
                st += " M"+x.toFixed(2)+","+(boardHeight-origin[1]+ticklength).toFixed(2)+" "+x.toFixed(2)+","+
                    (boardHeight-origin[1]-ticklength).toFixed(2);
            }
        }

        if(dy !== null && dy > 0) {
            for (y = boardHeight-origin[1]+dy; y<boardHeight-0.99*padding; y = y+dy) {
                st += " M"+(origin[0]+ticklength).toFixed(2)+","+y.toFixed(2)+" "+(origin[0]-ticklength).toFixed(2)+","+y.toFixed(2);

            }
            for (y = boardHeight-origin[1]-dy; y>0.99*padding; y = y-dy) {
                st += " M"+(origin[0]+ticklength).toFixed(2)+","+y.toFixed(2)+" "+(origin[0]-ticklength).toFixed(2)+","+y.toFixed(2);
            }

        }

//      } else {
//          console.log("Is your gdx strange? Aborting...");
//          return;
//      }

        pnode.setAttribute("d",st);
        pnode.setAttribute("stroke-width", 1);
        pnode.setAttribute("shape-rendering", "crispEdges");
        pnode.setAttribute("stroke", axesstroke);
        pnode.setAttribute("fill", fill);
        theSVG.appendChild(pnode);

        // Axes labels

        if (labels!=null && labels!="none") with (Math) {
            ldx = dx/xunitlength;
            ldy = dy/yunitlength;
            lx = (xmin>0 || xmax<0?xmin:0);
            ly = (ymin>0 || ymax<0?ymin:0);
            lxp = (ly==0?"below":"above");
            lyp = (lx==0?"left":"right");
            if (gdx!==null && gdx!== 0) {
                var ddx = floor(1.1-log(ldx)/log(10))+2;
                for (x = ldx; x<=xmax; x = x+ldx)
                  text([x,ly],chopZ(x.toFixed(ddx)),lxp);
                for (x = -ldx; xmin<=x; x = x-ldx)
                  text([x,ly],chopZ(x.toFixed(ddx)),lxp);
            }
            if (gdy!==null && gdy!== 0) {
                var ddy = Math.max(0, floor(1.1-log(ldy)/log(10))+2);
                if(ddy < 0) {
                    console.log("ddy is < 0. Aborting...");
                    return;
                }
                for (y = ldy; y<=ymax; y = y+ldy) {
                  text([lx,y],chopZ(y.toFixed(ddy)),lyp);
                }
                for (y = -ldy; ymin<=y; y = y-ldy)
                  text([lx,y],chopZ(y.toFixed(ddy)),lyp);
            }
        } //syntax: text(p,str,pos,id,fontsty)... Complains if id set

        //////////////////////////////////
        //
        // These became necessary for some reason
        // Was working fine without before...
        //
        ////////////////////////////////////
        if(typeof(xAxisVble) == "undefined") {
            xAxisVble = window.xAxisVble;
        }
        if(typeof(yAxisVble) == "undefined") {
            yAxisVble = window.yAxisVble;
        }
        text([xmax+(padding-10)/xunitlength,0],xAxisVble,"above","","",'MathJax_Math-italic,"Times New Roman",Times,serif'); // x-axis label
        text([0,ymax+(padding-10)/yunitlength],yAxisVble,"right","","",'MathJax_Math-italic,"Times New Roman",Times,serif'); // y-axis label
        markerstrokewidth = 0.5;
        stroke = "#555";
        arrowhead([0,0],[xmax+padding/xunitlength,0],"xaxisArr");
        arrowhead([0,0],[0,ymax+padding/yunitlength],"yaxisArr");

    }
}

function initBoard(id, x_min,x_max,y_min,y_max){
    boundingDiv = document.getElementById(id);
    boundingDiv.style.position = "relative";
    boardWidth = boundingDiv.getBoundingClientRect().width;
    boardHeight = Math.round(boardWidthToHeight * boardWidth);
    svgID = id+'SVG';
    makeSVG('svg', {id:svgID, width:boardWidth, height:boardHeight}, id);
    theSVG = document.getElementById(svgID);
    //////////////////////////////////////
    //
    // Defaults for all boards on a page
    //
    //////////////////////////////////////
    strokewidth = "1"; // pixel
    strokedasharray = null;
    stroke = "black"; // default line color
    fill = "none";    // default fill color
    fontstyle = "normal"; // default shape for text labels
    fontfamily = 'MathJax_Main,"Times New Roman",Times,serif';  //"Georgia, times, serif"; // default font
    fontsize = "16";      // default size
    fontweight = "normal";
    fontstroke = "none";  // default font outline color
    fontfill = "none";    // default font color
    marker = "none";
    //
    ymax = null;
    xmin = x_min;
    xmax = x_max;
    ymin = y_min;
    ymax = y_max;
    if(xmin >= xmax) { xmax++;}
    if(ymin >= ymax && ymax!=null) { ymax++; }
    xunitlength = (boardWidth-2*padding)/(xmax-xmin);
    yunitlength = xunitlength;
    if (ymax==null) { // Equally scaled axes case
        ymax = ymin + (boardHeight - 2*padding)/yunitlength;
    } else {
        yunitlength = (boardHeight-2*padding)/(ymax-ymin);
    }
    origin = [-xmin*xunitlength+padding,-ymin*yunitlength+padding];
    boardPropsArr[id+"xMin"] = xmin;
    boardPropsArr[id+"yMin"] = ymin;
    boardPropsArr[id+"xMax"] = xmax;
    boardPropsArr[id+"yMax"] = ymax;
    boardPropsArr[id+"Width"] = boardWidth;
    boardPropsArr[id+"Height"] = boardHeight;
    boardPropsArr[id+"XuL"] = xunitlength;
    boardPropsArr[id+"YuL"] = yunitlength;
    boardPropsArr[id+"ox"] = origin[0];
    boardPropsArr[id+"oy"] = origin[1];
    var boardBG = makeSVG('rect', {
                id:"board"+id, x:0, y:0, width:boardWidth+"px", height:boardHeight+"px",
                stroke:'none', fill: 'white'}, svgID);
}