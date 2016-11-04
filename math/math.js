/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-25 10:56:53
 */

(function(window, $, Math) {
    var ZCharts = window.ZCharts = window.ZCharts || {};
    function MathFun(options) {
        var me = this,
            noop = function() {};

        options = options || {};

        if(! (me instanceof MathFun) ) {
            return new MathFun(options);
        }

        me.options = $.extend(true, {}, MathFun.defaults, options);

        me.init();

    }

    /**
     * [defaults defaults config]
     * @type {Object}
     */
    MathFun.defaults = {
        container: '',
        colors: ['#ff5a34', '#4b9bf9', '#97d48c', '#febe44', '#ccc'],
        grid: {
            width: 526,
            height: 248
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
    }

    /**
     * [math Math extension]
     * @type {Object}
     */
    MathFun.math = {
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
    };

    MathFun.prototype = {

        init: function() {
            var me = this,
                opts = me.options,
                $container = $(opts.container);

            me.$svg      = $container.find('svg');
            me.$axis     = $container.find('.zcharts-math-axis');
            me.$path     = $container.find('.zcharts-math-path');
            me.$trace    = $container.find('.zcharts-math-trace');
            me.$toggle   = $container.find('.zcharts-math-toggle');
            me.$valbox   = $container.find('.zcharts-math-valbox');
            me.$operator = $container.find('.zcharts-math-operator');

            me.drawLegends();
            me.drawCircles();
            me.bindEvents();
            me.draw();
        },

        draw: function() {
            var me = this;
            me.setStep();
            me.drawAxis();
        },

        setStep: function() {
            var opts = this.options,
                grid   = opts.grid;

            [opts.xAxis, opts.yAxis].forEach(function(item, index) {
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
            var me     = this,
                opts   = me.options,
                grid   = opts.grid,
                width  = grid.width,
                height = grid.height,
                grid   = opts.grid,
                xAxis  = opts.xAxis,
                yAxis  = opts.yAxis,
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

            var htmlAxises = [];
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
                    _axises = [],
                    axisArr = [],
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

                            texts.push('<text text-anchor="middle" x="'+ x1 +'" y="'+ ty +'">'+ (text != 0 ? text : '') +'</text>');
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
                            texts.push('<text text-anchor="'+ yta +'" x="'+ tx +'" y="'+ (y1 + 5) +'">'+ (text != 0 ? text : '') +'</text>')
                        }

                        jump ++;
                    }
                }

                _axises.push('<g>');
                _axises.push([
                    '<rect x="'+ rectx +'" y="'+ recty +'" width="'+ item.width +'" height="'+ item.height +'" fill="'+ item.color +'"></rect>',
                    '<path stroke-width="'+ item.scaleStyle.border +'" stroke="'+ item.scaleStyle.color +'" d="'+ scales.join(' ') +'"></path>',
                    '<path stroke-width="'+item.scaleStyle.border+'" stroke="'+ item.scaleStyle.shortScaleColor +'" d="'+ shortScales.join(' ') +'"></path>'
                ].concat(['<g>' + texts.join('\n') + '</g>']));
                _axises.push('</g>');

                htmlAxises.push(_axises.join('\n'));
            });

            me.$axis.html(htmlAxises.join('\n'));
            me.drawTrace();
            me.drawFunction();
        },

        drawFunction: function() {
            var me = this,
                opts = me.options,
                colors = opts.colors,
                series = opts.series,
                grid = opts.grid,
                xAxis = opts.xAxis,
                yAxis = opts.yAxis,
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
                px, py, x, y, htmlPaths = [];

            series && series.length && series.forEach(function(item, index) {
                var path = [],
                    pxstep = xdis > 50 ? xdis > 200 ? 0.05 : 0.1 : 1,
                    javascript = item.javascript;

                eval('item.function = function(x) {return '+ javascript +'}');

                if('function' !== typeof item.function) return;

                for(var i = 0; i <= width; i += pxstep) {
                    x = (i / width) * xdis + xmin;
                    y = item.function(x);

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

                path[0] && path[0].indexOf('M') < 0 &&  path.unshift('M');

                htmlPaths.push('<path stroke="'+ colors[index] +'" stroke-width="'+ 1.5 +'" fill="none" d="'+ path.join(' ') +'"></path>');
            });

            me.$path.html(htmlPaths.join('\n'));
        },

        drawZoom: function(factor) {
            var me = this,
                opts = me.options,
                grid = opts.grid,
                xAxis = opts.xAxis,
                yAxis = opts.yAxis;

            grid.zoom = grid.zoom || 1;

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

                me.draw();
            }, 300);
        },

        drawTrace: function(offsetX) {
            var me = this,
                opts = this.options,
                series = opts.series,
                colors = opts.colors,
                grid = opts.grid,
                xAxis = opts.xAxis,
                yAxis = opts.yAxis,
                width = xAxis.width,
                height = yAxis.height,
                xmin = xAxis.amin,
                xmax = xAxis.amax,
                ymin = yAxis.amin,
                ymax = yAxis.amax,
                selected = 0,
                callback,
                result = [],
                _format = function(val) {
                    var supArr = '\u2070\u00b9\u00b2\u00b3\u2074\u2075\u2076\u2077\u2078\u2079'.split(''),
                        len = 9,
                        temp = 3,
                        sup = '',
                        int = parseInt(val),
                        int = Math.abs(int),
                        num = parseInt(Math.log10(int));

                    if(num > temp) {
                        val = val / Math.pow(10, num);
                        val = val.toString().substr(0, len - 4);
                        num = num.toString().split('');
                        num.map(function(item) {
                            sup += supArr[item]
                        });
                        val += '\u00d710' + sup;
                    }else {
                        val = val.toString().substr(0, len);
                    }

                    return val;
                },
                callback,px, py, x, y;

            offsetX = offsetX || 400;
            if(!series.length) return;

            series.forEach(function(item, index) {
                if(item.selected === true) {
                    selected = index;
                }
            });

            callback = series[selected]['function'];

            if('function' !== typeof callback) return;

            // 暂时只显示一条
            x = ( (offsetX + grid.width) / width) * (xmax - xmin) + xmin;
            y = callback(x);

            if(!isNaN(y)){
                py = (ymax - y) / (ymax - ymin) * height - grid.height;
            }

            me.$trace.html('<circle r="3.5" fill="'+ colors[selected] +'" cx="'+ offsetX +'" cy="'+ (isFinite(py) ? py : 0) +'"></circle>');
            me.$valbox.find('.xvalue').html(_format(x))
            me.$valbox.find('.yvalue').html(_format(y))
        },

        drawCircles: function() {
            var me = this,
                opts = me.options,
                series = opts.series,
                colors = opts.colors,
                html = [];

            if(series.length < 2) {
                me.$valbox.css('right', 0);
                me.$toggle.hide();
            }else {
                me.$valbox.css('right', 18);
                me.$toggle.show();
                series.forEach(function(item, index) {
                    var c = item.selected ? 'cur' : '';
                    html.push('<li data-index="'+index+'" class="'+ c +'"><i style="background-color: '+ colors[index]+'">·</i></li>');
                });

                me.$toggle.find('.list').html(html.join('\n'));
            }
        },

        drawLegends: function() {
            var me = this,
                opts = me.options,
                series = opts.series,
                colors = opts.colors,
                legends = [];

            series.forEach(function(item, index) {
                legends.push('<strong style="color: '+ colors[index]+'">'+ item.legend +'</strong>');
            });

            $('.legends').html(legends.join(' , '));
        },

        bindEvents: function() {
            var me = this,
                opts = me.options,
                eventObj = {
                    mouseover: function(e) {
                        var grid = opts.grid;
                        grid.isMouseDown = false;
                    },

                    mousedown: function(e) {
                        var grid = opts.grid;

                        if(!grid.isMouseDown) {
                            grid.offsetX = e.offsetX;
                            grid.offsetY = e.offsetY;
                            grid.isMouseDown = true;
                        }
                    },

                    mouseup: function(e) {
                        var grid   = opts.grid,
                            xAxis  = opts.xAxis,
                            yAxis  = opts.yAxis;

                        if(grid.isMouseDown) {
                            grid.isMouseDown = false;

                            var x = (grid.translateX || 0) / xAxis.width * (xAxis.amax - xAxis.amin),
                                y = (grid.translateY || 0) / yAxis.height * (yAxis.amax - yAxis.amin);

                            x = isNaN(x) ? 0 : x;
                            y = isNaN(y) ? 0 : y;

                            xAxis.amin -= x;
                            xAxis.amax -= x;
                            yAxis.amin += y;
                            yAxis.amax += y;

                            setTimeout(function() {
                                me.drawAxis();
                                $('.zcharts-math-axis, .zcharts-math-path, .zcharts-math-trace').attr('transform', 'translate(0,0)');
                            }, 200);
                        }
                    },

                    mousemove: function(e) {
                        var $this = $(this),
                            grid = opts.grid,
                            width = grid.width,
                            height = grid.height,
                            tagname = e.target.tagName,
                            offsetX = e.offsetX,
                            offsetY = e.offsetY;

                        if(grid.isMouseDown) {
                            offsetX = offsetX <= 0 ? 1 : offsetX >= width ? width : offsetX;
                            offsetY = offsetY <= 0 ? 1 : offsetY >= width ? width : offsetY;

                            grid.translateX = offsetX - grid.offsetX;
                            grid.translateY = offsetY - grid.offsetY;

                            $('.zcharts-math-axis, .zcharts-math-path, .zcharts-math-trace').attr('transform', 'translate('+ grid.translateX +', ' + grid.translateY+')')
                        }else {
                            me.drawTrace(e.offsetX);
                        }
                    },

                    mousewheel: function(e) {
                        var zoom = e.originalEvent.wheelDelta > 0 ? 1.25 : 0.8;
                        me.drawZoom(zoom);
                        e.stopPropagation();
                        e.preventDefault();
                    }
                };

            me.$svg.on('mouseover mousedown mouseup mousemove mousewheel DOMMouseScroll', function(e) {
                var type = e.type;
                type = type == 'DOMMouseScroll' ? 'mousemove' : type;
                eventObj[type] && eventObj[type].call(this, e);
            });

            me.$operator.on('click', function(e) {
                var index = $(e.target).data('index');
                me.drawZoom(index == 1 ? 1.25 : 0.8);

                return false;
            });

            me.$toggle.on('click', 'li', function(e) {
                var $this = $(this),
                    index = $this.data('index'),
                    series = opts.series;

                $this.addClass('cur').siblings().removeClass('cur').show();
                series.forEach(function(item, i) {
                    item.selected = index == i;
                });
                me.drawTrace();
            }).on('mouseover', '.arrow-down', function() {
                me.$toggle.find('li').show();
            }).on('mouseout', '.list', function(e) {
                var to = e.toElement.tagName.toLowerCase(),
                    series = opts.series;
                if(to === 'li' || to === 'i') return;

                series.forEach(function(item, i) {
                    item.selected && me.$toggle.find('li').eq(i).show().siblings().hide();
                });
            });
        }
    };

    ZCharts.math = MathFun;
})(window, jQuery, Math);