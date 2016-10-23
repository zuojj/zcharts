/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-23 10:46:41
 * @version $Id$
 */



function checkEnter(event) {
  var keynum;
  var keychar;
  var enttest;
  if (window.event && window.event.srcElement.onchange) {
    keynum = window.event.keyCode;
    if(keynum==13) {
      window.event.returnValue=false;
      window.event.srcElement.onchange();
      window.event.srcElement.focus();
    }
  }
}

var theplot;
$(document).ready(function(){
  $('#fooplot-frame').resizable({
    resize:function(){ theplot.setSize(); theplot.reDraw(); $('#_resizable_display').html(parseInt($(this).css('width'))+' x '+parseInt($(this).css('height'))); },
    start:function(){$(this).append('<div id="_resizable_display" style="position:absolute;top:50%;left:50%;z-index:10000;background:#ffffff;font-size:14px;color:#a0a0a0;border:2px solid #c0c0c0;text-align:center;padding:4px;width:80px;height:18px;margin-left:-44px;margin-top:-14px;"></div>');},
    stop:function(){$('#_resizable_display').remove(); writeState();},
    grid:50,
    minWidth:300,
    minHeight:200
  });
  $('.sortable').sortable({
    stop:function() { writeState(); }
  });
  $('.button').button().css({'font-size':'11px','height':'27px'});
  $('.button-makewindowsquare').button({'icons':{primary:'ui-icon-arrowthick-1-s'}}).css({'width':'32px','padding-top':'3px','padding-bottom':'3px'});
  $('.selectmenu').selectmenu();

  theplot=new Fooplot(document.getElementById('theplot'));
  theplot.reDraw();

  theplot.onWindowChange=function(w) {
    $('#options-xmin').val(w[0]);
    $('#options-xmax').val(w[1]);
    $('#options-ymin').val(w[2]);
    $('#options-ymax').val(w[3]);
    writeState();
  };

  if(window.location.hash==''||window.location.hash=='#'||window.location.hash=='#!') {
    $('<li class="plot ui-widget-content">'+$('#plot_template_0').html()+'</li>').data($('#plot_template_0').data()).appendTo('#plots').find('.data-color').miniColors({change:changeColorTimeout});
    writeState();
    doPlot();
  } else {
    readStateFromHash();
    doPlot();
  }
  $('.colorpicker').miniColors({change:changeColorTimeout});

});

var changeColorTimeout_t=null;

function changeColorTimeout() {
  if(changeColorTimeout_t) {window.clearTimeout(changeColorTimeout_t);changeColorTimeout_t=null; }
  changeColorTimeout_t=window.setTimeout(function(){writeState();doPlot();},500);
}

var _ignoreHashChange=false;
window.onhashchange=function() {
  if(!_ignoreHashChange) {
    readStateFromHash();
    doPlot();
  } else {
    _ignoreHashChange=false;
  }
}

function makeWindowSquare() {
  var ycenter=(theplot.ymax+theplot.ymin)/2;
  var xhalfspan=(theplot.xmax-theplot.xmin)/2;
  var ratio=theplot.height/theplot.width;
  $('#options-ymax').val(ycenter+xhalfspan*ratio);
  $('#options-ymin').val(ycenter-xhalfspan*ratio);
  writeState();
  doPlot();
}

function doPlot() {
  theplot.deleteAllPlots();
  // set options
  theplot.setBackgroundColor($('#options-bgcolor').val());
  theplot.setAxesColor($('#options-axescolor').val());
  theplot.setGridColor($('#options-gridcolor').val());
  theplot.setLabelsColor($('#options-labelscolor').val());
  theplot.setWindow([$('#options-xmin').val(),$('#options-xmax').val(),$('#options-ymin').val(),$('#options-ymax').val()]);
  theplot.setGrid([$('#options-xgrid').val(),$('#options-ygrid').val()]);
  theplot.setShowAxes($('#options-showaxes').is(':checked'));
  theplot.setShowTicks($('#options-showticks').is(':checked'));
  theplot.setShowGrid($('#options-showgrid').is(':checked'));
  theplot.setShowLabels($('#options-showlabels').is(':checked'));
  // add the plots
  $('#plots').children('li').each(function () {
    switch(parseInt($(this).data('type'))) {
      case FOOPLOT_TYPE_FUNCTION:
        theplot.addPlot($(this).children('.data-eq').val(),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});
        break;
      case FOOPLOT_TYPE_POLAR:
        theplot.addPlot($(this).children('.data-eq').val(),FOOPLOT_TYPE_POLAR,{'color':$(this).find('.data-color').val(),'thetamin':$(this).children('.data-thetamin').val(),'thetamax':$(this).children('.data-thetamax').val(),'thetastep':$(this).children('.data-thetastep').val()});
        break;
      case FOOPLOT_TYPE_PARAMETRIC:
        theplot.addPlot([$(this).children('.data-eqx').val(),$(this).children('.data-eqy').val()],FOOPLOT_TYPE_PARAMETRIC,{'color':$(this).find('.data-color').val(),'smin':$(this).children('.data-smin').val(),'smax':$(this).children('.data-smax').val(),'sstep':$(this).children('.data-sstep').val()});
        break;
      case FOOPLOT_TYPE_POINTS:
        lines=$(this).find('.data-eq').val().split(/\n/);
        points=[];
        for(i in lines) {
          coords=lines[i].split(',');
          if(coords.length==2) points.push([coords[0],coords[1]]);
        }
        theplot.addPlot(points,FOOPLOT_TYPE_POINTS,{'color':$(this).find('.data-color').val()});
        break;
    }
  });
  theplot.reDraw();
}

var plotState=[];

function doPermalink() {
  jQuery.post('link-create','data='+escape(JSON.stringify(plotState)).replace(/\+/g,'%2B'),function(response,status,xhr) {
    $("#dialog-permalink").html('<div style="padding-top:15px;padding-bottom:15px;">Permalink to this graph:<br><a href="http://fooplot.com/plot/'+response+'"><b>http://fooplot.com/plot/'+response+'</b></a></div>').dialog({modal:true,width:500,title:'Permalink'});
  });
}

function rgb2hex(rgb) {
 if(rgb==undefined || !rgb.indexOf) return '#000000';
 if(rgb.indexOf('#')==0) return rgb;
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}

function writeState() {
  var hashData=[];
  var hashElement={};
  $('#plots').children('li').each(function () {
    hashElement={};
    switch(parseInt($(this).data('type'))) {
      case FOOPLOT_TYPE_FUNCTION:
        hashElement['type']=FOOPLOT_TYPE_FUNCTION;
        hashElement['eq']=$(this).children('.data-eq').val().replace(/ /g,'');
        hashElement['color']=rgb2hex($(this).find('.data-color').val());
        hashData.push(hashElement);
        break;
      case FOOPLOT_TYPE_POLAR:
        hashElement['type']=FOOPLOT_TYPE_POLAR;
        hashElement['eq']=$(this).children('.data-eq').val().replace(/ /g,'');
        hashElement['color']=$(this).find('.data-color').val();
        hashElement['thetamin']=$(this).children('.data-thetamin').val();
        hashElement['thetamax']=$(this).children('.data-thetamax').val();
        hashElement['thetastep']=$(this).children('.data-thetastep').val();
        hashData.push(hashElement);
        break;
      case FOOPLOT_TYPE_PARAMETRIC:
        hashElement['type']=FOOPLOT_TYPE_PARAMETRIC;
        hashElement['eqx']=$(this).children('.data-eqx').val().replace(/ /g,'');
        hashElement['eqy']=$(this).children('.data-eqy').val().replace(/ /g,'');
        hashElement['color']=$(this).find('.data-color').val();
        hashElement['smin']=$(this).children('.data-smin').val();
        hashElement['smax']=$(this).children('.data-smax').val();
        hashElement['sstep']=$(this).children('.data-sstep').val();
        hashData.push(hashElement);
        break;
      case FOOPLOT_TYPE_POINTS:
        lines=$(this).find('.data-eq').val().split(/\n/);
        points=[];
        for(i in lines) {
          coords=lines[i].split(',');
          if(coords.length==2) points.push([coords[0],coords[1]]);
        }
        hashElement['type']=FOOPLOT_TYPE_POINTS;
        hashElement['eq']=points;
        hashElement['color']=$(this).find('.data-color').val();
        hashData.push(hashElement);
        break;
    }
  });
  hashElement={'type':1000};
  var w=[$('#options-xmin').val(),$('#options-xmax').val(),$('#options-ymin').val(),$('#options-ymax').val()];
  if(w[0]!=-6.5||w[1]!=6.5||w[2]!=-4||w[3]!=4) hashElement['window']=w;
  var g=[$('#options-xgrid').val(),$('#options-ygrid').val()];
  if(g[0]!=''||g[1]!='') hashElement['grid']=g;
  var s=[parseInt($('#fooplot-frame').css('width')),parseInt($('#fooplot-frame').css('height'))];
  if(s[0]!=650||s[1]!=400) hashElement['size']=s;
  if(!$('#options-showgrid').is(':checked')) hashElement['showgrid']=0;
  if(!$('#options-showaxes').is(':checked')) hashElement['showaxes']=0;
  if(!$('#options-showticks').is(':checked')) hashElement['showticks']=0;
  if(!$('#options-showlabels').is(':checked')) hashElement['showlabels']=0;
  if($('#options-bgcolor').val()!='#FFFFFF') hashElement['bgcolor']=$('#options-bgcolor').val();
  if($('#options-axescolor').val()!='#000000') hashElement['axescolor']=$('#options-axescolor').val();
  if($('#options-labelscolor').val()!='#000000') hashElement['labelscolor']=$('#options-labelscolor').val();
  if($('#options-gridcolor').val()!='#D0D0D0') hashElement['gridcolor']=$('#options-gridcolor').val();
  hashData.push(hashElement);
  _ignoreHashChange=true;
  window.location.hash='#'+Base64.encode(JSON.stringify(hashData));
  plotState=hashData;
}

function readState() {
  var newLi;
  $('#plots').children('li').remove();
  for(i in plotState) {
    switch(parseInt(plotState[i]['type'])) {
      case FOOPLOT_TYPE_FUNCTION:
        newLi=$('<li class="plot ui-widget-content">'+$('#plot_template_'+FOOPLOT_TYPE_FUNCTION).html()+'</li>').data('type',FOOPLOT_TYPE_FUNCTION);
        newLi.children('.data-eq').val(plotState[i]['eq']);
        if(plotState[i]['color']==undefined) plotState[i]['color']='#000000';
        newLi.find('.data-color').val(plotState[i]['color']).miniColors({change:changeColorTimeout});
        newLi.find('.data-color').val(plotState[i]['color']).miniColors('value',plotState[i]['color']);
        $('#plots').append(newLi);
        break;
      case FOOPLOT_TYPE_POLAR:
        newLi=$('<li class="plot ui-widget-content">'+$('#plot_template_'+FOOPLOT_TYPE_POLAR).html()+'</li>').data('type',FOOPLOT_TYPE_POLAR);
        newLi.children('.data-eq').val(plotState[i]['eq']);
        if(plotState[i]['color']===undefined) plotState[i]['color']='#000000';
        newLi.find('.data-color').val(plotState[i]['color']).miniColors({change:changeColorTimeout});
        newLi.find('.data-color').val(plotState[i]['color']).miniColors('value',plotState[i]['color']);
        if(plotState[i]['thetamin']===undefined) plotState[i]['thetamin']='0';
        newLi.children('.data-thetamin').val(plotState[i]['thetamin']);
        if(plotState[i]['thetamax']===undefined) plotState[i]['thetamax']='6';
        newLi.children('.data-thetamax').val(plotState[i]['thetamax']);
        if(plotState[i]['thetastep']===undefined) plotState[i]['thetastep']='.01';
        newLi.children('.data-thetastep').val(plotState[i]['thetastep']);
        $('#plots').append(newLi);
        break;
      case FOOPLOT_TYPE_PARAMETRIC:
        newLi=$('<li class="plot ui-widget-content">'+$('#plot_template_'+FOOPLOT_TYPE_PARAMETRIC).html()+'</li>').data('type',FOOPLOT_TYPE_PARAMETRIC);
        newLi.children('.data-eqx').val(plotState[i]['eqx']);
        newLi.children('.data-eqy').val(plotState[i]['eqy']);
        if(plotState[i]['color']===undefined) plotState[i]['color']='#000000';
        newLi.find('.data-color').val(plotState[i]['color']).miniColors({change:changeColorTimeout});
        newLi.find('.data-color').val(plotState[i]['color']).miniColors('value',plotState[i]['color']);
        if(plotState[i]['smin']===undefined) plotState[i]['smin']='0';
        newLi.children('.data-smin').val(plotState[i]['smin']);
        if(plotState[i]['smax']===undefined) plotState[i]['smax']='2pi';
        newLi.children('.data-smax').val(plotState[i]['smax']);
        if(plotState[i]['sstep']===undefined) plotState[i]['sstep']='.01';
        newLi.children('.data-sstep').val(plotState[i]['sstep']);
        $('#plots').append(newLi);
        break;
      case FOOPLOT_TYPE_POINTS:
        newLi=$('<li class="plot ui-widget-content">'+$('#plot_template_'+FOOPLOT_TYPE_POINTS).html()+'</li>').data('type',FOOPLOT_TYPE_POINTS);
        pointstext='';
        for(j in plotState[i]['eq']) {
          pointstext+=plotState[i]['eq'][j].join()+'\n';
        }
        newLi.find('.data-eq').val(pointstext);
        if(plotState[i]['color']===undefined) plotState[i]['color']='#000000';
        newLi.find('.data-color').val(plotState[i]['color']).miniColors({change:changeColorTimeout});
        newLi.find('.data-color').val(plotState[i]['color']).miniColors('value',plotState[i]['color']);
        $('#plots').append(newLi);
        break;
      case 1000:
        if(plotState[i]['size']===undefined) plotState[i]['size']=[650,400];
        $('#fooplot-frame').css('width',plotState[i]['size'][0]+'px');
        $('#fooplot-frame').css('height',plotState[i]['size'][1]+'px');
        theplot.setSize();
        if(plotState[i]['window']===undefined) plotState[i]['window']=[-6.5,6.5,-4,4];
        $('#options-xmin').val(plotState[i]['window'][0]);
        $('#options-xmax').val(plotState[i]['window'][1]);
        $('#options-ymin').val(plotState[i]['window'][2]);
        $('#options-ymax').val(plotState[i]['window'][3]);
        if(plotState[i]['grid']===undefined) plotState[i]['grid']=['',''];
        $('#options-xgrid').val(plotState[i]['grid'][0]);
        $('#options-ygrid').val(plotState[i]['grid'][1]);
        if(plotState[i]['showgrid']===undefined) plotState[i]['showgrid']=true;
        $('#options-showgrid').attr('checked',plotState[i]['showgrid']?true:false);
        if(plotState[i]['showaxes']===undefined) plotState[i]['showaxes']=true;
        $('#options-showaxes').attr('checked',plotState[i]['showaxes']?true:false);
        if(plotState[i]['showticks']===undefined) plotState[i]['showticks']=true;
        $('#options-showticks').attr('checked',plotState[i]['showticks']?true:false);
        if(plotState[i]['showlabels']===undefined) plotState[i]['showlabels']=true;
        $('#options-showlabels').attr('checked',plotState[i]['showlabels']?true:false);
        if(plotState[i]['bgcolor']===undefined) plotState[i]['bgcolor']='#FFFFFF';
        $('#options-bgcolor').val(plotState[i]['bgcolor']).miniColors('value',plotState[i]['bgcolor']);
        if(plotState[i]['gridcolor']===undefined) plotState[i]['gridcolor']='#D0D0D0';
        $('#options-gridcolor').val(plotState[i]['gridcolor']).miniColors('value',plotState[i]['gridcolor']);
        if(plotState[i]['labelscolor']===undefined) plotState[i]['labelscolor']='#000000';
        $('#options-labelscolor').val(plotState[i]['labelscolor']).miniColors('value',plotState[i]['labelscolor']);
        if(plotState[i]['axescolor']===undefined) plotState[i]['axescolor']='#000000';
        $('#options-axescolor').val(plotState[i]['axescolor']).miniColors('value',plotState[i]['axescolor']);
    }
  }
}

function readStateFromHash() {
  if(window.location.hash.indexOf('q=')==1) {
    window.location.hash=Base64.encode('[{"type":"0","eq":"'+window.location.hash.substring(3)+'"}]');
  }
  if(window.location.hash.indexOf('%5B')==1) {
    try {
      plotState=JSON.parse(unescape(window.location.hash.substring(1)));
    } catch(e) {
      plotState=[];
    }
  } else {
    try {
      plotState=JSON.parse(Base64.decode(window.location.hash.substring(1)));
    } catch(e) {
      plotState=[];
    }
  }
  readState();
}
