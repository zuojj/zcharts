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
        grid: {
            width: 526,
            height: 248
        },
        lineStyle: {
            width: 1,
            colors: ['#ff5a34', '#4b9bf9', '#97d48c', '#febe44', '#ccc']
        },
        xAxis: {
            borderWidth: 1,
            color: '#e7e7e7',
            min: -8.5,
            max: 8.5,
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
        e: Math.E,
        exp: Math.exp,
        ln: function(x) {
            return Math.log(x);
        },
        lg: function(x) {
            return Math.log(x) / Math.log(2);
        },
        log: function(x) {
            return Math.log(x) / Math.log(10);
        },
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
        atan: Math.atan,
        acot: function(x) {
            return Math.atan(1 / x);
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
        coth: function(x) {
            return (Math.exp(x) + Math.exp(-x)) / (Math.exp(x) - Math.exp(-x));
        },
        sech: function(x) {
            return 2 / (Math.exp(x) + Math.exp(-x));
        },
        csch: function(x) {
            return 2 / (Math.exp(x) - Math.exp(-x));
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
        acoth: function(x) {
            return 0.5 * Math.log((1 + x) / (1 - x));
        },
        asech: function(x) {
            return Math.log(1 / x + Math.sqrt(1 / x / x - 1));
        },
        acsch: function(x) {
            return Math.log(1 / x + Math.sqrt(1 / x / x + 1));
        }
    };

    var Parser = {
        /**
         * [parserExp 解析指数]
         * @param  {[type]} items [description]
         * @return {[type]}       [description]
         */
        parserExp: function(items) {
            for(var i = 1, ilen = items.length; i < ilen - 1; i++) {
                var _t = i,
                    isHas = false,
                    item = items[i],
                    before = i - 1,
                    after = i + 1;

                if(item === '^') {
                    if(items[after] === '-') {
                        after = after + 1;
                    }
                    var _items = items.splice(i + 1, after - i);
                    items.splice(i - 1, 2, ['Math.pow', '(', items[before], ',', _items.join(''), ')'].join('') );
                    i -= 2;
                }
            }
            return items;
        },

        /**
         * [parserBracket 解析]
         * @param  {[type]} items [description]
         * @return {[type]}       [description]
         */
        parserBracket: function(items) {
            // 增加括号匹配及合法性判断
            
            if(items.indexOf('(') >= 0) {
                var before = 0;
                for(var i = 0, ilen = items.length; i < ilen; i++) {
                    var item = items[i];
                    if(item === '(') {
                        before = i;
                    }else if(item === ')') {
                        var _items = items.splice(before, i - before + 1);

                        _items = this.parserExp(_items).join('');

                        if(before - 1 < 0) {
                            items.unshift(_items);
                        }else {
                            items.splice(before - 1, 1, items[before - 1], _items);
                        }
                        items = this.parserBracket(items);
                    }
                }
            }else {
                items = this.parserExp(items);
            }

            return items;
        },

        /**
         * [parser 解析value]
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        parser: function(value) {
            var me = this,
                series = [];

            if(!value) return;

            value = value
            .replace(/\s+/g, '')
            // 2sin(2x) => 2*sin(2*x)
            .replace(/([0-9]+)([a-z]|[A-Z]|\()/ig, "$1*$2")
            // sin(x)2 => sin(x)*2
            .replace(/(\))(\w|\()/ig, "$1*$2")
            // 2*sin(x) => 2 *sin(x)
            .replace(/([a-z0-9\.])([^a-z0-9\.])/ig, "$1 $2")
            // sin(x)*2 => sin(x)* 2
            .replace(/([^a-z0-9\.])([a-z0-9\.])/ig, "$1 $2")
            // sin(x +2)^2 => sin(x +2 ) ^ 2
            .replace(/(\-|\)|\()/g, " $1 ");

            values = value.split(/\s,|，/);

            values.forEach(function(value, index) {
                var items = value.split(/\s+/),
                    obj = {};

                items = items.map(function(item) {
                    item = item.toLowerCase().trim();
                    if(item === 'e') {
                        item = '(Math.E)'
                    }
                    return item;
                }).filter(function(item) {
                    return item && item.length > 0;
                });

                items = me.parserBracket(items);

                items = items.map(function(item) {
                    item = item.replace(/^\s+.+\s+$/, '');
                    item = MathFun.math[item] ? ('ZCharts.math.math.' + item) : item;
                    return item;
                });

                series.push({
                    javascript: items.join(''),
                    selected: index == 0,
                    legend: value.replace(/\s*/g, '')
                });
            });

            return series;
        }
    };

    MathFun.prototype = {
        /**
         * [init 初始化]
         * @return {[type]} [description]
         */
        init: function() {
            var me = this,
                opts = me.options,
                grid = opts.grid,
                series = opts.series,
                frag = me.createFragment(),
                $container;

            if(!opts.container) {
                new Error('Config container must be a selector');
            }

            if(!series || !series.length) return;

            if(typeof series === 'string') {
                opts.series = Parser.parser(series);
            }

            me.optimizeMinMax();

            $container = $(opts.container);
            me.$svg = $container.find('svg').attr({
                width: grid.width,
                height: grid.height
            }).html('');

            ['toggle', 'valbox', 'operator', 'legend'].forEach(function(item) {
                me['$'+ item] = $container.find('.zcharts-math-' + item);
            });

            ['axis', 'path', 'trace'].forEach(function(item) {
                frag.appendChild(me[item] = me.createElement('g'));
                me[item].style.cssText = 'pointer-events: none;';
            });

            me.$svg[0].appendChild(frag);

            me.drawLegends();
            me.drawCircles();
            me.bindEvents();
            me.draw();
        },


        /**
         * [createFragment 创建DOM片段]
         * @return {[type]} [description]
         */
        createFragment: function() {
            return document.createDocumentFragment();
        },

        /**
         * [createElement 创建SVG DOM]
         * @param  {[type]} ele  [description]
         * @param  {[type]} attr [description]
         * @return {[type]}      [description]
         */
        createElement: function(ele, attr) {
            var ele = document.createElementNS('http://www.w3.org/2000/svg', ele);

            if(attr) {
                this.setAttr(ele, attr);
            }
            return ele;
        },

        /**
         * [setAttr description]
         * @param {[type]} ele     [description]
         * @param {[type]} attrobj [description]
         */
        setAttr: function(ele, attrobj) {
            for(var name in attrobj) {
                attrobj.hasOwnProperty(name) && ele.setAttribute(name, attrobj[name]);
            }
            return ele;
        },

        /**
         * [draw 绘制]
         * @return {[type]} [description]
         */
        draw: function() {
            var me = this;
            me.setStep();
            me.drawAxis();
            me.drawTrace();
        },

        /**
         * [optimizeMinMax 优化最大值和最小值]
         * @return {[type]} [description]
         */
        optimizeMinMax: function() {
            var me = this,
                opts = me.options,
                series = opts.series,
                xAxis = opts.xAxis,
                yAxis = opts.yAxis,
                xmin = xAxis.min,
                xmax = xAxis.max,
                ymin = yAxis.min,
                ymax = yAxis.max,
                isExp = false,
                _ymin = 0,
                _ymax = 0;

            series.forEach(function(item) {
                var arr = [],
                    javascript = item.javascript,
                    legend = item.legend;

                !isExp && (isExp = /x\^(?:[2-9]|[1-9]\d+)/.test(legend));
                eval('item.__callback = function(x) {return '+ javascript +'}');

                for(var x = xmin; x <= xmax; x += 0.2) {
                    var y = item.__callback(x);
                    isFinite(y) && arr.push(y);
                }

                _ymin = Math.min(_ymin, Math.min.apply(Math, arr));
                _ymax = Math.max(_ymax, Math.max.apply(Math, arr));
            });

            if(isExp) {
                yAxis.min = _ymin;
                yAxis.max = _ymax;
            }

            delete me.__callback;
        },

        /**
         * [setStep 计算步长]
         */
        setStep: function() {
            var opts = this.options,
                grid  = opts.grid,
                log10 = Math.log10 || function() {
                    return Math.log(x) * Math.LOG10E;
                };

            [opts.xAxis, opts.yAxis].forEach(function(item, index) {
                var min = item.min,
                    max = item.max,
                    dis = max - min,
                    wh = ['width', 'height'][index],
                    hw = ['height', 'width'][index],
                    full, order, rem, step;

                full  = Math.log(dis) / Math.log(10) - 0.8;
                order = Math.floor(full);
                rem   = full - order;
                step  = Math.pow(10, order);

                if(rem > .5) {
                    step *= 5;
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

        /**
         * [drawAxis 绘制坐标轴]
         * @return {[type]} [description]
         */
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

            me.axis.textContent = '';
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
                    fragTexts = me.createFragment(),
                    fragAxis = me.createFragment(),
                    grids = [],
                    scales = [],
                    shortScales = [],
                    jump = 5,
                    text, ele,
                    x1, x2, y1, y2,
                    sx1, sx2, sy1, sy2,
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

                            // text
                            text = textFormat(i);
                            ele = me.createElement('text');
                            me.setAttr(ele, {
                                x: x1,
                                y: ty,
                                "text-anchor": 'middle'
                            });
                            ele.textContent = text != 0 ? text : '';
                            fragTexts.appendChild(ele);
                        }
                        jump ++;
                    }
                }else {
                    rectx = x;
                    recty = 0 - height;
                    for(var i = Math.ceil(min / step) * step; i <= max; i += step / 5) {
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
                            text = Math.abs(i) >= Math.pow(10, 4) ? me.formatText(i) : textFormat(i);
                            ele = me.createElement('text');
                            me.setAttr(ele, {
                                x: tx,
                                y: y1 + 5,
                                "text-anchor": yta
                            });
                            ele.textContent = text != 0 ? text : '';
                            fragTexts.appendChild(ele);
                        }

                        jump ++;
                    }
                }

                var g = me.createElement('g');
                    gt = me.createElement('g', {
                        fill: item.textStyle.color
                    });

                gt.appendChild(fragTexts);
                fragAxis.appendChild(gt);
                fragAxis.appendChild(me.createElement('rect', {
                    x: rectx,
                    y: recty,
                    width: item.width,
                    height: item.height,
                    fill: item.color
                }));
                fragAxis.appendChild(me.createElement('path', {
                    "stroke-width": item.scaleStyle.border,
                    stroke: item.scaleStyle.color,
                    d: scales.join(' ')
                }));
                fragAxis.appendChild(me.createElement('path', {
                    "stroke-width": item.scaleStyle.border,
                    stroke: item.scaleStyle.shortScaleColor,
                    d: shortScales.join(' ')
                }));

                g.appendChild(fragAxis);

                me.axis.appendChild(g);
            });
            me.drawLines();
        },

        /**
         * [drawLines 绘制曲线]
         * @return {[type]} [description]
         */
        drawLines: function() {
            var me = this,
                opts = me.options,
                colors = opts.lineStyle.colors,
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
                fragPath = me.createFragment(),
                isExp = false,
                translateY = [],
                translateYTop = 125,
                translateYBottom = 220,
                px, py, x, y;

            series && series.length && series.forEach(function(item, index) {
                var path = [],

                    pxstep = xdis > 50 ? xdis > 200 ? 0.05 : 0.1 : 1,
                    javascript = item.javascript;

                isExp = javascript.indexOf('^') > 0;

                eval('item.function = function(x) {return '+ javascript +'}');

                // 原点值判断
                (function() {
                    var y = item.function(0);

                    if(isFinite(y)) {
                        py = (ymax - y) / (ymax - ymin) * height - grid.height;
                        translateY.push(py);
                    }
                })();

                for(var i = 0; i <= width; i += pxstep) {
                    x = (i / width) * xdis + xmin;
                    if(isNaN(x)) continue;
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

                    if(isNaN(py)) continue;

                    path.push(px.toFixed(1) + ',' + py.toFixed(1));
                }
                path[0] && path[0].indexOf('M') < 0 &&  path.unshift('M');
                fragPath.appendChild(me.createElement('path', {
                    stroke: colors[index],
                    "stroke-width": 1.5,
                    fill: 'none',
                    d: path.join(' ')
                }));
            });

            me.path.textContent = '';
            me.path.appendChild(fragPath);

            translateY = parseInt(Math.min.apply(Math, translateY));
            if(translateY > translateYBottom) {
                me.translate(0, translateYBottom - translateY, 1);
            }else if(translateY < 0) {
                me.translate(0, 0 - translateY + translateYTop, 1);
            }
        },

        /**
         * [formatText description]
         * @param  {Number} val [格式化value]
         * @param  {Number} len [总长度]
         * @param  {Number} tmp [临界长度， 4 => x >= Math.pow(10, 4)]
         * @return {[type]}     [description]
         */
        formatText: function(val, len, tmp) {
            var supArr = '\u2070\u00b9\u00b2\u00b3\u2074\u2075\u2076\u2077\u2078\u2079'.split(''),
                len = len || 9,
                tmp = tmp || 4,
                sup = '',
                int = parseInt(val),
                int = Math.abs(int),
                log10 = Math.log10 || function() {
                    return Math.log(x) * Math.LOG10E;
                },
                num = parseInt(log10(int));

            if(num >= tmp) {
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

        /**
         * [drawTrace 绘制Trace]
         * @param  {[type]} offsetX [description]
         * @return {[type]}         [description]
         */
        drawTrace: function(offsetX) {
            var me = this,
                opts = this.options,
                series = opts.series,
                colors = opts.lineStyle.colors,
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

            x = ( (offsetX + grid.width) / width) * (xmax - xmin) + xmin;
            y = callback(x);

            if(!isNaN(y)){
                py = (ymax - y) / (ymax - ymin) * height - grid.height;
            }else {
                return;
            }

            me.trace.textContent = '';
            me.trace.appendChild(me.createElement('circle', {
                r: 3.5,
                fill: colors[selected],
                cx: offsetX,
                cy: isFinite(py) ? py : 0
            }))
            me.$valbox.find('.xvalue').html(me.formatText(x))
            me.$valbox.find('.yvalue').html(me.formatText(y))
        },

        /**
         * [drawCircles 绘制circle List]
         * @return {[type]} [description]
         */
        drawCircles: function() {
            var me = this,
                opts = me.options,
                series = opts.series,
                colors = opts.lineStyle.colors,
                html = [];

            if(series.length < 2) {
                me.$valbox.css('right', 0);
                me.$toggle.hide();
            }else {
                me.$valbox.css('right', 18);
                me.$toggle.show();
                series.forEach(function(item, index) {
                    var c = item.selected ? 'cur' : '';
                    html.push('<li data-index="'+index+'" class="'+ c +'"><i style="background-color: '+ colors[index]+'"></i></li>');
                });

                me.$toggle.find('.list').html(html.join('\n'));
            }
        },

        /**
         * [drawLegends 绘制图例]
         * @return {[type]} [description]
         */
        drawLegends: function() {
            var me = this,
                opts = me.options,
                series = opts.series,
                colors = opts.lineStyle.colors,
                legends = [];

            series.forEach(function(item, index) {
                legends.push('<strong style="color: '+ colors[index]+'">'+ item.legend +'</strong>');
            });

            me.$legend.html(legends.join(' , '));
        },

        /**
         * [zoom 缩放]
         * @param  {Number} factor [缩放因子]
         * @return {[type]}        [description]
         */
        zoom: function(factor) {
            var me = this,
                opts = me.options,
                grid = opts.grid,
                xAxis = opts.xAxis,
                yAxis = opts.yAxis;

            grid.zoom = grid.zoom || 1;
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
            }, 200);
        },

        /**
         * [translate 处理偏移]
         * @param  {[type]} translateX [description]
         * @param  {[type]} translateY [description]
         * @param  {[type]} duration   [description]
         * @return {[type]}            [description]
         */
        translate: function(translateX, translateY, duration) {
            var me = this,
                opts = me.options,
                grid   = opts.grid,
                xAxis  = opts.xAxis,
                yAxis  = opts.yAxis;
            var x = (translateX || 0) / xAxis.width * (xAxis.amax - xAxis.amin),
                y = (translateY || 0) / yAxis.height * (yAxis.amax - yAxis.amin);

            x = isNaN(x) ? 0 : x;
            y = isNaN(y) ? 0 : y;

            xAxis.amin -= x;
            xAxis.amax -= x;
            yAxis.amin += y;
            yAxis.amax += y;

            setTimeout(function() {
                me.drawAxis();
                [me.axis, me.path].forEach(function(item) {
                    item.setAttribute('transform', 'translate(0,0)');
                });
                $(me.trace).show();
            }, duration || 400);
        },

        /**
         * [bindEvents 绑定事件]
         * @return {[type]} [description]
         */
        bindEvents: function() {
            var me = this,
                opts = me.options,
                grid = opts.grid,
                eventObj = {
                    mouseover: function(e) {
                        grid.isMouseDown = false;
                    },

                    mousedown: function(e) {
                        if(!grid.isMouseDown) {
                            grid.offsetX = e.offsetX;
                            grid.offsetY = e.offsetY;
                            grid.isMouseDown = true;
                            $(me.trace).hide();
                        }
                    },

                    mouseup: function(e) {
                        if(grid.isMouseDown) {
                            grid.isMouseDown = false;
                            me.translate(grid.translateX, grid.translateY);
                        }
                    },

                    mousemove: function(e) {
                        var $this = $(this),
                            width = grid.width,
                            height = grid.height,
                            tagname = e.target.tagName,
                            offsetX = e.offsetX,
                            offsetY = e.offsetY;

                        if(grid.isMouseDown) {
                            offsetX = offsetX <= 0 ? 1 : offsetX >= width ? width : offsetX;
                            offsetY = offsetY <= 0 ? 1 : offsetY >= height ? height : offsetY;


                            grid.translateX = offsetX - grid.offsetX;
                            grid.translateY = offsetY - grid.offsetY;
                            [me.axis, me.path].forEach(function(item) {
                                item.setAttribute('transform', 'translate('+ grid.translateX +', ' + grid.translateY+')');
                            });
                            if(offsetX <= 0 || offsetX >= width || offsetY <= 0 || offsetY >= height ) {
                                $this.trigger('mouseup');
                            }
                        }else {
                            me.drawTrace(offsetX);
                        }
                    },

                    mousewheel: function(e) {
                        var zoom = e.originalEvent.wheelDelta > 0 ? 1.25 : 0.8;
                        me.zoom(zoom);
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
                me.zoom(index == 1 ? 1.25 : 0.8);

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