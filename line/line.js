/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-21 18:24:46
 * @version $Id$
 */

(function(window, $) {
    var ZCharts = window.ZCharts = window.ZCharts || {};

    /**
     * [Line Contructor]
     * @param {[type]} options [description]
     */
    function Line(options) {
        var me = this,
            noop = function() {};

        options = options || {};
        if(! (me instanceof Line) ) {
            return new Line(options);
        }
        me.options = $.extend(true, {}, Line.defaults, options, {});

        me.init();
    }

    /**
     * [defaults 默认配置]
     * @type {Object}
     */
    Line.defaults = {
        legend: {
            data: ["中国","印度","美国"]
        },
        grid: {
            width: 412,
            height: 215,
            // 上右下左
            padding: [0, 10, 0, 10],
            left: 32,
            right: 0,
            top: 10,
            bottom: 30
        },
        xAxis: {
            splitNumber: 5,
            unit: '年',
            max: '2013',
            data: null
        },
        yAxis: {
            splitNumber: 3,
            unit: '亿'
        },
        lineStyle: {
            width: 1,
            colors: ['#ff6949', '#4b9bf9', '#97d48c', '#0f0', '#f0f']
        },
        series: null
    };

    ZCharts.base = {
        getInterval: function(arr, splitNumber, fixMin, fixMax) {
            this._min = parseInt(Math.min.apply(Math, arr));
            this._max = parseInt(Math.max.apply(Math, arr));
            this._splitNumber = splitNumber;

            return this.niceInterval(fixMin, fixMax);
        },
        nice: function(val, round) {
            var exp10 = Math.pow(10, Math.floor(Math.log(val) / Math.LN10));
            var f = val / exp10; // between 1 and 10
            var nf;
            if (round) {
                if (f < 1.5) { nf = 1; }
                else if (f < 2.5) { nf = 2; }
                else if (f < 4) { nf = 3; }
                else if (f < 7) { nf = 5; }
                else { nf = 10; }
            }
            else {
                if (f < 1) { nf = 1; }
                else if (f < 2) { nf = 2; }
                else if (f < 3) { nf = 3; }
                else if (f < 5) { nf = 5; }
                else { nf = 10; }
            }
            return nf * exp10;
        },
        niceInterval: function(fixMin, fixMax) {
            var splitStep,
                result = [],
                splitNumber = Math.max(parseInt(this._splitNumber) - 1, 1),
                min = this._min,
                max = this._max;

            splitStep = this.nice((max - min) / splitNumber, true);
            min = fixMin || Math.floor(min / splitStep) * splitStep;
            max = fixMax || Math.ceil(max / splitStep) * splitStep;

            for (var curr = min; curr <= max; curr += splitStep) {
                result.push(curr);
            }

            return result;
        }
    };

    Line.prototype = {
        /**
         * [init 初始化]
         * @return {[type]} [description]
         */
        init: function() {
            var me = this,
                opts = me.options,
                series = opts.series,
                grid = opts.grid,
                frag = me.createFragment(),
                $container;

            if(!opts.container) {
                new Error('config container must be a selector');
            }

            $container = $(me.options.container);
            me.$svg = $container.find('svg');
            me.$legend = $container.find('div.zcharts-line-legend');
            ['axis', 'path', 'trace'].forEach(function(item) {
                frag.appendChild(me[item] = me.createElement('g'));
                me['$' + item] = $(me[item]);
            });
            me.axis.setAttribute('fill', '#999');
            me.$svg[0].appendChild(frag);

            [opts.xAxis, opts.yAxis].forEach(function(item, index) {
                var _labels;

                if(index == 1) {
                    item.data = (function() {
                        var result = [];
                        series.forEach(function(item) {
                            result = result.concat(item.data);
                        });
                        return result;
                    })();
                }
                item.labels = ZCharts.base.getInterval(item.data, item.splitNumber, item.min || '', item.max || '');

                _labels = index == 0 ? item.data : item.labels;
                item.min = _labels[0];
                item.max = _labels[_labels.length - 1];

                item.unitlen = index == 0
                ? (grid.width - grid.left - grid.right - grid['padding'][1] - grid['padding'][3]) / (item.max - item.min)
                : (grid.height - grid.top - grid.bottom) / (item.max - item.min);
            });

            me.drawAxises();
            me.drawLines();
            me.bindEvents();
            me.drawLegend(true);
        },

        createFragment: function() {
            return document.createDocumentFragment();
        },

        createElement: function(ele, attr) {
            var ele = document.createElementNS('http://www.w3.org/2000/svg', ele);
            if(attr) {
                this.setAttr(ele, attr);
            }
            return ele;
        },

        setAttr: function(ele, attrobj) {
            for(var name in attrobj) {
                attrobj.hasOwnProperty(name) && ele.setAttribute(name, attrobj[name]);
            }
            return ele;
        },

        /**
         * [drawAxises 绘制坐标轴]
         * @return {[type]} [description]
         */
        drawAxises: function() {
            var me = this,
                opts = me.options,
                grid = opts.grid,
                axises = [];

            me.axis.textContent = '';
            [opts.xAxis, opts.yAxis].forEach(function(item, index) {
                var min = item.min,
                    max = item.max,
                    unit = item.unit,
                    unitlen = item.unitlen,
                    labels = item.labels,
                    fragAxis = me.createFragment(),
                    axis = [],
                    x1, y1, x2, y2, tx, ty, text = '';

                var g = me.createElement('g', {
                    fill: '#999'
                });
                labels.forEach(function(value) {
                    if(index == 0) {
                        x1 = x2 = (value - min) * unitlen + grid.left + grid['padding'][3];
                        y1 = grid.height - grid.bottom;
                        y2 = y1 + 5;
                        tx = x1 - 20;
                        ty = y1 + 20;
                        text = value + unit;
                    } else {
                        x1 = grid.left;
                        x2 = grid.width;
                        y1 = y2 = grid.height - (unitlen * value + grid.bottom);
                        tx = 0;
                        ty = y1 + 6;
                        text = value == 0 ? 0 : (value + unit);
                    }

                    fragAxis.appendChild(me.createElement('line', {
                        x1: x1,
                        y1: y1,
                        x2: x2,
                        y2: y2,
                        stroke: '#f2f2f2',
                        "stroke-width": 1
                    }))

                    var _t = me.createElement('text', {
                        x: tx,
                        y: ty
                    });

                    _t.textContent = text;
                    fragAxis.appendChild(_t);
                });

                g.appendChild(fragAxis);
                me.axis.appendChild(g);
            });
        },

        /**
         * [drawLines 绘制曲线]
         * @return {[type]} [description]
         */
        drawLines: function() {
            var me = this,
                opts = me.options,
                grid = opts.grid,
                lineStyle = opts.lineStyle,
                series = opts.series,
                xAxis = opts.xAxis,
                yAxis = opts.yAxis,
                fragLines = me.createFragment(),
                lines = [],
                result = me.result = {};

            series.forEach(function(item, k) {
                var path = ['M'],
                    selected = item.selected,
                    color = lineStyle.colors[k],
                    width = item.width = selected ? parseInt(lineStyle.width) + 2 : lineStyle.width,
                    opacity = item.opacity = selected ? 1 : 0.5;

                item.data && item.data.forEach(function(value, index) {
                    var year = xAxis.data[index],
                        x = xAxis.unitlen * (year - xAxis.min) + grid.left + grid['padding'][3],
                        y = grid.height - (yAxis.unitlen * value + grid.bottom),
                        _x = parseInt(x),
                        obj = {
                            name: item.name,
                            r: width + 2,
                            color: color,
                            opacity: opacity,
                            num: value.toString().substr(0, 5),
                            year: year,
                            x: x,
                            y: y
                        };

                    if(_x in result) {
                        result[_x].push(obj);
                    }else {
                        result[_x] = [obj];
                    }
                    path.push( x + ',' + y)
                });

                fragLines.appendChild(me.createElement('path', {
                    "stroke-width": width,
                    stroke: color,
                    opacity: opacity,
                    fill: 'none',
                    d: path.join(' ')
                }));
            });
            me.path.textContent = '';
            me.path.appendChild(fragLines);
        },

        /**
         * [drawTrace 绘制游标]
         * @param  {[type]} circles [description]
         * @return {[type]}         [description]
         */
        drawTrace: function(circles) {
            var me = this,
                opts = me.options,
                grid = opts.grid,
                fragTrace = me.createFragment(),
                trace = [];

            if(!circles.length) return;

            line_x = circles[0]['x'];

            fragTrace.appendChild(me.createElement('line', {
                x1: line_x,
                y1: 0,
                x2: line_x,
                y2: grid.height - grid.bottom,
                stroke: '#ddd',
                "stroke-width": 1,
                "stroke-dasharray": '2,2'
            }));
            circles.forEach(function(item, index) {
                var c = item.opacity == 1 ? 'cur' : '';

                fragTrace.appendChild(me.createElement('circle', {
                    r: item.r,
                    transform: 'translate(' + item.x +','+ item.y +')',
                    fill: item.color
                }));
            });
            me.trace.textContent = '';
            me.trace.appendChild(fragTrace);
        },

        /**
         * [drawLegend 绘制legend]
         * @param  {[type]} circles [description]
         * @return {[type]}         [description]
         */
        drawLegend: function(isInit, circles) {
            var me = this,
                opts = me.options,
                grid = opts.grid,
                yAxis = opts.yAxis,
                result = me.result,
                keys = Object.keys(me.result),
                circles = circles || result[keys[keys.length - 1]],
                $p = me.$legend.find('p'),
                legend = [];

            circles.forEach(function(item, index ) {
                if(isInit) {
                    legend.push('<p ' + (item.opacity == 1 ? 'class="cur"' : '') + '><i style="background-color: '+ item.color +'"></i>'+ item.name +'<br><span class="value">'+ item.num + '</span>' + yAxis.unit +'<br>(<span class="date">'+ item.year +'</span>)</p>');
                } else {
                    $p.eq(index).find('.value').text(item.num);
                    $p.eq(index).find('.date').text(item.year);
                }
            });

            isInit && me.$legend.html(legend.join('\n'));
        },

        /**
         * [bindEvents 绑定事件]
         * @return {[type]} [description]
         */
        bindEvents: function() {
            var me = this,
                opts = me.options,
                series = opts.series,
                events = {
                    mouseover: function() {
                        me.$trace.show();
                        me.$path.find('path').css('opacity', 1);
                        me.$legend.find('p').addClass('cur');
                    },
                    mousemove: function(event) {
                        var offsetX = event.offsetX,
                            circles = me.result[offsetX] || '';

                        if(!circles.length) return;
                        me.drawTrace(circles);
                        me.drawLegend(false, circles);
                    },
                    mouseout: function() {
                        var $path = me.$path.find('path'),
                            $p = me.$legend.find('p');

                        series.forEach(function(item, index) {
                            var s = item.selected;
                            $path.eq(index).css('opacity', s ? 1 : '.5');
                            $p.eq(index)[s ? 'addClass' : 'removeClass']('cur');
                        });
                        me.$trace.hide();
                    }
                };

            me.$svg.on('mouseover mousemove mouseout', function(e) {
                var type = e.type;
                events[type] && events[type].call(this, e);
            });
        }
    };

    ZCharts.line = Line;
})(window, jQuery);