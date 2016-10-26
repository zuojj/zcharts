/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-25 10:56:53
 * @update
 * tanx, 1/x函数图像边界处理
 * 多项式pow嵌套解析处理
 * 优化平移拖动错误，增加动画
 * 细化坐标轴处理，tryToMakeFraction
 * UI及code更新
 * 组件封装
 * 工程自动化
 */

(function(window, Vue, Math) {
    var sgCharts = {
        option: {
            colors: ['#ff6949', '#00f', '#0f0', '#f0f', '#0ff'],
            grid: {
                width: 500,
                height: 250,
                // 上、右、下、左
                padding: [10, 10, 10, 10],
                show: false,
                borderWidth: 1,
                color: '#eee',
                zoom: 1
            },
            xAxis: {
                width: 500,
                height: 1,
                color: '#e7e7e7',
                min: -6.5,
                max: 6.5,
                scaleStyle: {
                    len: 5,
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
                width: 1,
                height: 250,
                color: '#e7e7e7',
                min: -4,
                max: 4,
                step: 1,
                scaleStyle: {
                    len: 5,
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
            asin: Math.asin,
            acos: Math.acos,
            atan: Math.atan,
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
                series = option.series = [];

            //var value = '2sin(x) + cos(2x)';

            value = value.replace(/ /g, "");
            // 2sin(2x) => 2*sin(2*x)
            value = value.replace(/([0-9])([a-df-z]|[a-z][a-z]|\()/ig, "$1*$2");
            // sin(x)2 => sin(x)*2
            value = value.replace(/(\))([0-9a-df-z]|[a-z][a-z]|\()/ig, "$1*$2");
            // 2*sin(x) => 2 *sin(x)
            value = value.replace(/([a-z0-9\.])([^a-z0-9\.])/ig, "$1 $2");
            // sin(x)*2 => sin(x)* 2
            value = value.replace(/([^a-z0-9\.])([a-z0-9\.])/ig, "$1 $2");
            // a-b => a - b
            value = value.replace(/(\-|\)|\()/g, " $1 ");

            values = value.split(/\s,|，/);

            values.forEach(function(value, index) {
                var items = value.split(/ +/),
                    obj = {};
console.log(items);
                items = items.map(function(item, index) {
                    item = item.toLowerCase();

                    return math[item] && 'function' === typeof math[item] ? ('sgCharts.math.' + item) : item;
                });
console.log(items);

                var _getItems = function() {
                    for(var i = 0, ilen = items.length; i < ilen; i ++) {
                        var item = items[i];

                        if(Array.isArray(item)) {
                            items[i] = _getItems(item);
                        }
                    }
                    for(var i = 0, ilen = items.length; i < ilen; i ++) {
                        var item = items[i];

                        if(item === '^') {
                            items.splice(i - 1, 3, new Array('Math.pow', new Array('(', items[i - 1], ',', items[i + 1], ')')));
                            //items.splice(i - 1, 3, 'Math.pow', '(', items[i - 1], ',', items[i + 1], ')');
                            //i += 4;
                            i -= 2;
                        }
                    }
                }
                _getItems(items);

console.log(items);
                eval('obj.callback=function(x) {return ' + items.join('') + ';}');

                obj.lineStyle = obj.lineStyle || {};
                obj.lineStyle.color = colors[index];
                series.push(obj);
            });
            svgFun.gdata = me.drawAxis();
        },

        getStep: function() {
            var option = this.option;

            [option.xAxis, option.yAxis].forEach(function(item, index) {
                var orderfull, order, rem, step;

                orderfull = Math.log(item.max - item.min) / Math.log(10) - 0.9;
                order = Math.floor(orderfull);
                rem = orderfull - order;
                step = Math.pow(10, order);

                if (rem > .7) step *= 5;
                else if (rem > .3) step *= 2;

                item.step = step;
            });
        },
        drawAxis: function() {
            this.getStep();

            var option = this.option,
                grid = option.grid,
                width = grid.width,
                height = grid.height,
                grid = option.grid,
                xAxis = option.xAxis,
                yAxis = option.yAxis,
                xmin = xAxis.min,
                xmax = xAxis.max,
                ymin = yAxis.min,
                ymax = yAxis.max,
                xhtml = [],
                yhtml = [],
                x, y, tx, ty;

            console.log(xAxis.min, xAxis.max, yAxis.max, yAxis.min, 'min+max');

            // 处理坐标轴平移
            x = (0 - xmin) / (xmax - xmin) * width;
            if(x <= 0) {
                x = 0;
                tx = x + 10;
            }else if(x >= width - 2) {
                x = width - 2;
                tx = x - 40;
            }else {
                tx = x + 10;
            }

            y = (1 - (0 - ymin) / (ymax - ymin)) * height;
            if(y <= 0) {
                y = 0;
                ty = y + 18;
            }else if(y >= height - 4) {
                y = height - 4;
                ty = y - 5;
            }else {
                ty = y + 18;
            }

            var axises = {};

            [xAxis, yAxis].forEach(function(item, index) {
                var step = item.step,
                    min  = item.min,
                    max  = item.max,
                    textFormat = function(text) {
                        var exp10 = Math.pow(10, 2 - Math.floor(Math.log(max - min) / Math.log(10)));

                        return parseFloat(Math.round(text * exp10) / exp10);
                    },
                    texts = [],
                    grids = [],
                    scales = [],
                    shortScales = [],
                    x1, x2, y1, y2,
                    sx1, sx2, sy1, sy2,
                    gx1, gx2, gy1, gy2,
                    rectx, recty;

                if(index == 0) {
                    rectx = 0;
                    recty = y;
                    for(var i = Math.ceil(min / step) * step; i <= max; i += step) {
                        if(i == 0) continue;
                        x1 = x2 = gx1 = gx2 = (i - min) / (max - min) * grid.width;
                        y1 = y;
                        y2 = y + item.scaleStyle.len;
                        gy1 = 0;
                        gy2 = grid.height;

                        grid.show && grids.push('M' + gx1 + ',' + gy1 + ' L' + gx2 + ',' + gy2);
                        scales.push('M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2);
                        texts.push({
                            ta: 'middle',
                            c: item.textStyle.color,
                            tx: x1,
                            ty: ty,
                            text: textFormat(i)
                        });
                    }
                    for(var i = Math.ceil(min / step) * step; i <= max; i += step / 5) {
                        if(i == 0) continue;
                        sx1 = sx2 = (i - min) / (max - min) * grid.width;
                        sy1 = y;
                        sy2 = y + item.scaleStyle.len - 2;

                        shortScales.push('M' + sx1 + ',' + sy1 + ' L' + sx2 + ',' + sy2);
                    }
                }else {
                    rectx = x;
                    recty = 0;
                    for(var i = Math.ceil(min / step) * step; i <= max; i += step) {
                        if(i == 0) continue;
                        x1 = x;
                        x2 = x + item.scaleStyle.len;
                        gx1 = 0;
                        gx2 = grid.width;
                        y1 = y2 = gy1 = gy2 = (1 - (i - min) / (max - min)) * grid.height;
                        grid.show && grids.push('M' + gx1 + ',' + gy1 + ' L' + gx2 + ',' + gy2);
                        scales.push('M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2);

                        texts.push({
                            ta: 'start',
                            c: item.textStyle.color,
                            tx: tx,
                            ty: y1 + 5,
                            text: textFormat(i)
                        });
                    }

                    for(var i = Math.ceil(min / step) * step; i <= max; i += step / 5) {
                        if(i == 0) continue;
                        sx1 = x;
                        sx2 = x + item.scaleStyle.len;
                        sy1 = sy2 = (1 - (i - min) / (max - min)) * grid.height;
                        shortScales.push('M' + sx1 + ',' + sy1 + ' L' + sx2 + ',' + sy2);
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
                xmin = xAxis.min,
                xmax = xAxis.max,
                ymin = yAxis.min,
                ymax = yAxis.max,
                xstep = xAxis.step,
                ystep = yAxis.step,
                px, py, x, y, result = [];

            series && series.length && series.forEach(function(item) {
                var path = ['M'],
                    callback = item.callback;

                if('function' !== typeof callback) return;

                for(var px = 0; px < grid.width; px += 0.25) {
                    x = (px / grid.width) * (xmax - xmin) + xmin;

                    y = callback(x);

                    if(!isFinite(y)) {continue}

                    if(!isNaN(y)){
                        py = (ymax - y) / (ymax - ymin) * grid.height;
                    }

                    path.push(px + ',' + py);
                }

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

                svgFun.gdata = me.drawAxis();
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
                xmin = xAxis.min,
                xmax = xAxis.max,
                ymin = yAxis.min,
                ymax = yAxis.max,
                result = [],
                callback,px, py, x, y;

            if(!series.length) return;
            callback = series[0]['callback'];
            if('function' !== typeof callback) return;
            // 暂时只显示一条
            x = (offsetX / grid.width) * (xmax - xmin) + xmin;
            y = callback(x);

            if(!isNaN(y)){
                py = (ymax - y) / (ymax - ymin) * grid.height;
            }

            return {
                cx: offsetX,
                cy: py,
                x: x.toFixed(7),
                y: y.toFixed(7)
            };
        }
    };

    var svgFun = new Vue({
        el: '#example',
        data: {
            gdata: false,
            circle: false,
            transform: {x: 0, y: 0},
            transition: false,
            scale: false,
            strans: false,
            etrans: false,
            functions: '2sin(x^2),1/x, x/2'
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

            mouseout: function(e) {
                var option = sgCharts.option,
                    grid   = option.grid,
                    xAxis  = option.xAxis,
                    yAxis  = option.yAxis;

                if(grid.isMouseDown) {
                    grid.isMouseDown = false;
                    var x = grid.translateX / grid.width * (xAxis.max - xAxis.min),
                        y = grid.translateY / grid.height * (yAxis.max - yAxis.min);

                    xAxis.min -= x;
                    xAxis.max -= x;
                    yAxis.min += y;
                    yAxis.max += y;

                    var me = this;
                    setTimeout(function() {
                        me.gdata = sgCharts.drawAxis();
                        me.transform = 'translate(0,0)';
                    }, 100);
                }
            },

            mousedown: function(e) {
                var grid = sgCharts.option.grid,
                    tagname = e.target.tagName;

                if(!grid.isMouseDown && tagname === 'svg') {
                    grid.pageX = e.offsetX;
                    grid.pageY = e.offsetY;
                    grid.isMouseDown = true;
                    console.log(e);
                }
            },

            mousemove: function(e) {
                var grid = sgCharts.option.grid,
                    tagname = e.target.tagName;

                if(grid.isMouseDown && tagname === 'svg') {
                    grid.translateX = e.offsetX - grid.pageX;
                    grid.translateY = e.offsetY - grid.pageY;
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

                    var me = this;
                if(grid.isMouseDown && tagname === 'svg') {
                    this.transition = 'transform 10s ease';
                    grid.isMouseDown = false;
                    var x = grid.translateX / grid.width * (xAxis.max - xAxis.min),
                        y = grid.translateY / grid.height * (yAxis.max - yAxis.min);

                    console.log(x, y, 'translate');
                    xAxis.min -= x;
                    xAxis.max -= x;
                    yAxis.min += y;
                    yAxis.max += y;

                    var me = this;
                    setTimeout(function() {
                        me.gdata = sgCharts.drawAxis();
                        me.transform = {x: 0, y: 0};
                        me.transition = false;
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

            arrow_mouseover: function() {
                svgFun.etrans = 'translate(34, 0)';
                svgFun.strans = 'translate(17, 0)';
            }
        }
    });

    svgFun.inputchange(svgFun.functions);
})(window, Vue, Math);