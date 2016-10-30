/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-25 10:56:53
 * @update
 * body禁止滚动处理
 * firefox使用DOMMouseScroll，其他浏览器使用onmousewheel，阻止事件冒泡
 */

(function(window, Vue, Math) {
    var sgCharts = {
        option: {
            colors: ['#ff5a34', '#4b9bf9', '#97d48c', '#febe44', '#ccc'],
            grid: {
                width: 528,
                height: 250,
                // 上、右、下、左
                padding: [10, 10, 10, 10],
                show: false,
                borderWidth: 1,
                color: '#eee',
                zoom: 1
            },
            xAxis: {
                borderWidth: 1,
                color: '#e7e7e7',
                min: -8,
                max: 8,
                scaleStyle: {
                    len: 7,
                    color: '#bbb',
                    shortScale: true,
                    shortScaleColor: '#ddd',
                    splitNumber: 5,
                    border: 1
                },
                textStyle: {
                    color: '#666',
                    size: 11
                }
            },
            yAxis: {
                borderWidth: 1,
                color: '#e7e7e7',
                min: -3.5,
                max: 3.5,
                step: 1,
                scaleStyle: {
                    len: 7,
                    color: '#bbb',
                    shortScale: true,
                    shortScaleColor: '#ddd',
                    splitNumber: 5,
                    border: 1
                },
                textStyle: {
                    color: '#666',
                    size: 11
                }
            },
            series: []
        },
        math: {
            pow: Math.pow,
            pi: Math.PI,
            abs: Math.abs,
            arcsin: Math.asin,
            arcos: Math.acos,
            arctan: Math.atan,
            sin: Math.sin,
            sinh: Math.sinh,
            cos: Math.cos,
            cosh: Math.cosh,
            tan: Math.tan,
            tanh: Math.tanh,
            sec: function(x) {
                return 1 / Math.cos(x);
            },
            csc: function(x) {
                return 1 / Math.sin(x);
            },
            cot: function(x) {
                return 1 / Math.tan(x);
            },
            asec: function(x) {
                return Math.acos(1 / x);
            },
            acsc: function(x) {
                return Math.asin(1 / x);
            },
            acot: function(x) {
                return Math.atan(1 / x);
            },
            ln: function(x) {
                return Math.log(x);
            },
            log: function(x) {
                return Math.log(x) / Math.log(10);
            },
            sinh: function(x) {
                return (Math.exp(x) - Math.exp(-x)) / 2;
            },
            cosh: function(x) {
                return (Math.exp(x) + Math.exp(-x)) / 2;
            },
            tanh: function(x) {
                return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
            },
            asinh: function(x) {
                return Math.log(x + Math.sqrt(x * x + 1));
            },
            acosh: function(x) {
                return Math.log(x + Math.sqrt(x * x - 1));
            },
            atanh: function(x) {
                return 0.5 * Math.log((1 + x) / (1 - x));
            },
            sech: function(x) {
                return 2 / (Math.exp(x) + Math.exp(-x));
            },
            csch: function(x) {
                return 2 / (Math.exp(x) - Math.exp(-x));
            },
            coth: function(x) {
                return (Math.exp(x) + Math.exp(-x)) / (Math.exp(x) - Math.exp(-x));
            },
            asech: function(x) {
                return Math.log(1 / x + Math.sqrt(1 / x / x - 1));
            },
            acsch: function(x) {
                return Math.log(1 / x + Math.sqrt(1 / x / x + 1));
            },
            acoth: function(x) {
                return 0.5 * Math.log((1 + x) / (1 - x));
            }
        },

        parseEquation: function(value) {
            var me = this,
                option = me.option,
                math = me.math,
                colors = option.colors,
                series = option.series = [],
                titles = [],
                miniCircles = [],
                parsePower = function(items) {
                    for(var i = 0, ilen = items.length; i < ilen; i++) {
                        var _t = i,
                            isHas = false,
                            item = items[i],
                            before = items[i - 1],
                            after = items[i + 1];

                        if(item === '^') {
/*                            if(!before || !after || before === '(' || after === ')') {
                                console.log('^ requires two arguments, eg: x^2');
                            }


                            if(before === ')') {
                                if(after === '(') {

                                }else {
                                    while(_t > 0) {
                                        if(items[_t] === '(') {
                                            items[_t] = 'pow(';
                                            isHas = true;

                                            items.splice(_t, 3, ['Math.pow', '(', items[i - 1], ',', items[i + 1], ')'].join('') );
                                        }
                                        _t --;
                                    }
                                    if(!isHas) {
                                        console.log('Unmatched left parentheses (');
                                    }
                                }

                            }else if(after === '(') {
                                while (_t < ilen) {
                                    if(items[i] === ')') {

                                    }
                                }
                            }else {

                            }*/

                            items.splice(i - 1, 3, ['Math.pow', '(', items[i - 1], ',', items[i + 1], ')'].join('') );
                            i -= 2;
                        }
                    }

                    return items;
                };

            //var value = '2sin(x) + cos(2x)';

            value = value.replace(/\s+/g, '');
console.log(value);
            // 2sin(2x) => 2*sin(2*x)
            value = value.replace(/([0-9])([a-df-z]|[a-z][a-z]|\()/ig, "$1*$2");
            // sin(x)2 => sin(x)*2
            value = value.replace(/(\))([0-9a-df-z]|[a-z][a-z]|\()/ig, "$1*$2");
            // 2*sin(x) => 2 *sin(x)
            value = value.replace(/([a-z0-9\.])([^a-z0-9\.])/ig, "$1 $2");
            // sin(x)*2 => sin(x)* 2
            value = value.replace(/([^a-z0-9\.])([a-z0-9\.])/ig, "$1 $2");
            // sin(x +2)^2 => sin(x +2 ) ^ 2
            value = value.replace(/(\-|\)|\()/g, " $1 ");

            values = value.split(/\s,|，/);

            // values = [2sin(x), cos(x), 1/x]
            values.forEach(function(value, index) {
                var items = value.split(/ +/),
                    obj = {};
console.log(items);
                items = items.map(function(item) {
                    return item.toLowerCase().trim();
                }).filter(function(item) {
                    return item && item.length > 0;
                });

                items = parsePower(items);

                items = items.map(function(item, index) {
                    item = item.replace(/^\s+.+\s+$/, '');
                    item = Array.isArray(item) ? item.join('') : item;

                    item = math[item] ? ('sgCharts.math.' + item) : item;
                    return item;
                });
console.log(items);
                eval('obj.callback=function(x) {return ' + items.join('').replace(/\u200b/, '') + ';}');

                obj.name = value;
                obj.lineStyle = obj.lineStyle || {};
                obj.lineStyle.color = colors[index];
                obj.lineStyle.width = 1.5;
                series.push(obj);

                miniCircles.push('<li data-index="'+index+'"><i style="background-color: '+ colors[index]+'">·</i></li>');
                titles.push('<strong style="color: '+ colors[index]+'">'+ value +'</strong>');
                console.log(obj.callback);
            });


            svgFun.titles = titles.join(',');
            svgFun.gdata = me.draw();
            svgFun.circle = me.drawTrace(250);
            svgFun.miniCircles = miniCircles.join('\n');
        },

        draw: function() {
            this.init();
            return this.drawAxis();
        },

        init: function() {
            var option = this.option,
                grid   = option.grid;

            [option.xAxis, option.yAxis].forEach(function(item, index) {
                var min = item.min,
                    max = item.max,
                    wh = ['width', 'height'][index],
                    hw = ['height', 'width'][index],
                    full, order, rem, step;

                full  = Math.log(max - min) / Math.log(10) - 0.8;
                order = Math.floor(full);
                rem   = full - order;
                step  = Math.pow(10, order);

                if(rem > .7) {
                    step *= 5;
                }else if(rem > .5) {
                    step *= 3;
                }else if(rem > .3){
                    step *= 2;
                }

                item[wh]  = grid[wh] * 3;
                item[hw]  = item[hw] || 1;
                item.amin = min * 3;
                item.amax = max * 3;
                item.step = step;
            });
        },
        drawAxis: function() {
            var option = this.option,
                grid   = option.grid,
                width  = grid.width,
                height = grid.height,
                grid   = option.grid,
                xAxis  = option.xAxis,
                yAxis  = option.yAxis,
                xmin   = xAxis.amin,
                xmax   = xAxis.amax,
                ymin   = yAxis.amin,
                ymax   = yAxis.amax,
                yta    = 'start',
                axises       = [],
                x, y, tx, ty;

            // 处理坐标轴平移
            x = (0 - xmin) / (xmax - xmin) * xAxis.width - width;
            if(x <= 0) {
                x = 0;
                tx = x + 10;

            }else if(x >= width - 1) {
                x = width - 1;
                tx = x - 10;
                yta = 'end';
            }else {
                tx = x + 10;
            }

            y = (1 - (0 - ymin) / (ymax - ymin)) * yAxis.height - height;
            if(y <= 0) {
                y = 0;
                ty = y + 18;
            }else if(y >= height - 1) {
                y = height - 1;
                ty = y - 5;
            }else {
                ty = y + 18;
            }

            var axises = {};
            [xAxis, yAxis].forEach(function(item, index) {
                var step = item.step,
                    scale_2 = (item.scaleStyle.len - item.borderWidth) / 2,
                    shortScale_2 = scale_2 - 1,
                    min  = item.amin,
                    max  = item.amax,
                    textFormat = function(text) {
                        var exp10 = Math.pow(10, 2 - Math.floor(Math.log(max - min) / Math.log(10)));

                        return parseFloat(Math.round(text * exp10) / exp10);
                    },
                    texts = [],
                    grids = [],
                    scales = [],
                    shortScales = [],
                    jump = 5,
                    text,
                    x1, x2, y1, y2,
                    sx1, sx2, sy1, sy2,
                    gx1, gx2, gy1, gy2,
                    rectx, recty;

                if(index == 0) {
                    // x轴
                    rectx = 0 - width;
                    recty = y;

                    for(var i = Math.ceil(min / step) * step; i <= max; i += step / 5) {
                        sx1 = sx2 = (i - min) / (max - min) * item.width - width;
                        sy1 = y - shortScale_2;
                        sy2 = y + shortScale_2;
                        shortScales.push('M' + sx1 + ',' + sy1 + ' L' + sx2 + ',' + sy2);

                        if(jump % 5 == 0) {
                            // scale
                            x1 = x2 = (i - min) / (max - min) * item.width - width;
                            y1 = y - scale_2;
                            y2 = y + scale_2;
                            scales.push('M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2);

                            // grid
                            if(grid.show) {
                                gx1 = gx2 = x1;
                                gy1 = 0 - height;
                                gy2 = height * 2;

                                grid.show && grids.push('M' + gx1 + ',' + gy1 + ' L' + gx2 + ',' + gy2);
                            }

                            // text
                            text = textFormat(i);
                            texts.push({
                                ta: 'middle',
                                c: item.textStyle.color,
                                tx: x1,
                                ty: ty,
                                text: text != 0 ? text : ''
                            });
                        }
                        jump ++;
                    }
                }else {
                    rectx = x;
                    recty = 0 - height;

                    for(var i = Math.ceil(min / step) * step; i <= max; i += step / 5) {
                        if(i == 0) continue;
                        sx1 = x - shortScale_2;
                        sx2 = x + shortScale_2;
                        sy1 = sy2 = (1 - (i - min) / (max - min)) * item.height - height;
                        shortScales.push('M' + sx1 + ',' + sy1 + ' L' + sx2 + ',' + sy2);

                        if(jump % 5 == 0) {

                            // scale
                            x1 = x - scale_2;
                            x2 = x + scale_2;
                            y1 = y2 = gy1 = gy2 = (1 - (i - min) / (max - min)) * item.height - height;
                            scales.push('M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2);

                            if(grid.show) {
                                gx1 = 0 - width;
                                gx2 = width * 2;
                                gy1 = gy2 = y1;
                                grids.push('M' + gx1 + ',' + gy1 + ' L' + gx2 + ',' + gy2);
                            }

                            // text
                            text = textFormat(i);
                            texts.push({
                                ta: yta,
                                c: item.textStyle.color,
                                tx: tx,
                                ty: y1 + 5,
                                text: text != 0 ? text : ''
                            });
                        }

                        jump ++;
                    }
                }

                axises[index] = {
                    texts: texts,
                    grid: {
                        d: grids.join(' '),
                        c: grid.color,
                        w: grid.borderWidth
                    },
                    rect: {
                        x: rectx,
                        y: recty,
                        w: item.width,
                        h: item.height,
                        c: item.color
                    },
                    scale: {
                        d: scales.join(' '),
                        c: item.scaleStyle.color,
                        b: item.scaleStyle.border
                    },
                    shortScale: {
                        d: shortScales.join(' '),
                        c: item.scaleStyle.shortScaleColor,
                        b: item.scaleStyle.border
                    }
                };
            });

            return {
                axises: axises,
                paths: this.drawFunction(),
            };
            svgFun.circle = this.drawTrace(100);
        },

        drawFunction: function() {
            var me = this,
                option = me.option,
                series = option.series,
                grid = option.grid,
                xAxis = option.xAxis,
                yAxis = option.yAxis,
                height = yAxis.height,
                width = xAxis.width,
                gWidth = grid.width,
                gHeight = grid.height,
                xmin = xAxis.amin,
                xmax = xAxis.amax,
                xdis = xmax - xmin,
                ymin = yAxis.amin,
                ymax = yAxis.amax,
                xstep = xAxis.step,
                ystep = yAxis.step,
                px, py, x, y, result = [];

            series && series.length && series.forEach(function(item) {
                var path = [],
                    pxstep = xdis > 50 ? xdis > 100 ? 0.01 : 0.08 : 1,
                    callback = item.callback;

                if('function' !== typeof callback) return;

                for(var i = 0; i <= width; i += pxstep) {
                    x = (i / width) * xdis + xmin;
                    y = callback(x);

                    px = i - grid.width;
                    if(!isNaN(y)){
                        py = (ymax - y) / (ymax - ymin) * height - grid.height;
                    }else {
                        continue;
                    }

                    if(isFinite(y)) {
                        if(py > gHeight * 2 ) {
                            py = gHeight * 2;
                            path.push('M')
                        }else if(py < 0 - gHeight) {
                            py = 0 - gHeight;
                            path.push('M')
                        }
                    }else {
                        continue;
                    }

                    path.push(px.toFixed(1) + ',' + py.toFixed(1));
                }

                path[0].indexOf('M') < 0 &&  path.unshift('M');

                result.push({
                    d: path.join(' '),
                    c: item.lineStyle.color,
                    w: item.lineStyle.width
                });
            });

            return result;
        },

        drawZoom: function(factor) {
            var me = this,
                option = me.option,
                grid = option.grid,
                xAxis = option.xAxis,
                yAxis = option.yAxis;

            svgFun.scale = 'scale(' + factor +')';
            grid.zoom *= factor;

            setTimeout(function() {
                var cx = (xAxis.max + xAxis.min) / 2,
                    cy = (yAxis.max + yAxis.min) / 2;

                xAxis.max = (xAxis.max - cx) / grid.zoom + cx;
                xAxis.min = (xAxis.min - cx) / grid.zoom + cx;

                yAxis.max = (yAxis.max - cy) / grid.zoom + cy;
                yAxis.min = (yAxis.min - cy) / grid.zoom + cy;

                grid.zoom = 1;

                svgFun.gdata = me.draw();
                svgFun.scale = false;
                svgFun.circle = me.drawTrace(200);
            }, 300);
        },

        drawTrace: function(offsetX, index) {
            var me = this,
                option = this.option,
                series = option.series,
                grid = option.grid,
                xAxis = option.xAxis,
                yAxis = option.yAxis,
                width = xAxis.width,
                height = yAxis.height,
                xmin = xAxis.amin,
                xmax = xAxis.amax,
                ymin = yAxis.amin,
                ymax = yAxis.amax,
                selected = 0,
                callback,
                result = [],
                callback,px, py, x, y;

            if(!series.length) return;

            series.forEach(function(item, index) {
                if(item.selected === true) {
                    selected = index;
                }
            });

            callback = series[selected]['callback'];

            if('function' !== typeof callback) return;

            // 暂时只显示一条
            x = ( (offsetX + grid.width) / width) * (xmax - xmin) + xmin;
            y = callback(x);

            if(!isNaN(y)){
                py = (ymax - y) / (ymax - ymin) * height - grid.height;
            }

            return {
                cx: offsetX,
                cy: isFinite(py) ? py : 0,
                c: option.colors[selected],
                x: x.toString().substr(0, 10),
                y: y.toString().substr(0, 10)
            };
        }
    };

    var svgFun = new Vue({
        el: '#example',
        data: {
            miniCircles: false,
            titles: false,
            width: sgCharts.option.grid.width,
            height: sgCharts.option.grid.height,
            gdata: false,
            circle: false,
            transform: {x: 0, y: 0},
            scale: false,
            strans: false,
            etrans: false,
            functions: 'tan(x),sec(x),sin(x),x/2'
        },
        methods: {
            inputchange: function(e) {
                var value = typeof e === 'string' ? e : e.target.value;
                value && sgCharts.parseEquation(value);
            },
            mouseover: function(e) {
                var grid = sgCharts.option.grid;
                grid.isMouseDown = false;
            },

            mousedown: function(e) {
                var grid = sgCharts.option.grid,
                    tagname = e.target.tagName;

                if(!grid.isMouseDown && tagname === 'svg') {
                    grid.offsetX = e.offsetX;
                    grid.offsetY = e.offsetY;
                    grid.isMouseDown = true;
                }
            },

            mousemove: function(e) {
                var grid = sgCharts.option.grid,
                    width = grid.width,
                    height = grid.height,
                    tagname = e.target.tagName,
                    offsetX = e.offsetX,
                    offsetY = e.offsetY;

                if(grid.isMouseDown && tagname === 'svg') {
                    offsetX = offsetX <= 0 ? 1 : offsetX >= width ? width : offsetX;
                    offsetY = offsetY <= 0 ? 1 : offsetY >= width ? width : offsetY;

                    grid.translateX = offsetX - grid.offsetX;
                    grid.translateY = offsetY - grid.offsetY;

                    svgFun.transform = {
                        x: grid.translateX,
                        y: grid.translateY
                    }
                }else {
                    svgFun.circle = sgCharts.drawTrace(e.offsetX);
                }
            },

            mouseup: function(e) {
                var option = sgCharts.option,
                    grid   = option.grid,
                    xAxis  = option.xAxis,
                    yAxis  = option.yAxis,
                    tagname = e.target.tagName;

                if(grid.isMouseDown && tagname === 'svg') {
                    grid.isMouseDown = false;
                    var x = grid.translateX / xAxis.width * (xAxis.amax - xAxis.amin),
                        y = grid.translateY / yAxis.height * (yAxis.amax - yAxis.amin);

                    xAxis.amin -= x;
                    xAxis.amax -= x;
                    yAxis.amin += y;
                    yAxis.amax += y;

                    var me = this;
                    setTimeout(function() {
                        me.gdata = sgCharts.drawAxis();
                        me.transform = {x: 0, y: 0};
                    }, 200);
                }
            },

            mousewheel: function(e) {
                var zoom = e.wheelDelta > 0 ? 1.25 : 0.8;
                sgCharts.drawZoom(zoom);
            },

            plusClick: function() {
                sgCharts.drawZoom(1.25);
            },

            minusClick: function() {
                sgCharts.drawZoom(0.8);
            },

            minCircleClick: function(e) {
                var target = e.target;

                target = /^i$/i.test(target.tagName) ? target.parentNode : target;
                var index = +target.getAttribute('data-index');


                sgCharts.option.series.forEach(function(item, i) {
                    item.selected = i === index;
                });
            },

            arrow_mouseover: function() {
                svgFun.etrans = 'translate(34, 0)';
                svgFun.strans = 'translate(17, 0)';
            }
        }
    });

    document.body.addEventListener('mousewheel', function(e) {
        e.preventDefault();
    });
    svgFun.inputchange(svgFun.functions);
})(window, Vue, Math);