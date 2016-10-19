/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-19 10:52:44
 * @version $Id$
 */
(function(window, Vue) {
    var axis = {
        width: 500,
        height: 250,
        xmin: -8,
        xmax: 12,
        xpoints: 150,
        ymin: -2,
        ymax: 2,
        zoom: 1,
        textSize: 11,
        textColor: '#666',
        axisWidth: 1,
        axisColor: '#e7e7e7',
        lineWidth: 1.5,
        lineColor: '#ff6949',
        scaleWidth: 5,
        scaleColor: '#bbb',
        shortScaleWidth: 3,
        shortScaleColor: '#ddd',
        translateX: 0,
        translateY: 0
    }

    var res = plot_xaxis();

    var vm = new Vue({
        el: '#example',
        data: {
            fpath: res.fpath,
            xpath: res.xpath,
            xshortpath: res.xshortpath,
            xtext: res.xtext,
            ypath: res.ypath,
            yshortpath: res.yshortpath,
            ytext: res.ytext,
            xorigin: res.xorigin,
            yorigin: res.yorigin,
            textColor: axis.textColor,
            axisColor: axis.axisColor,
            lineColor: axis.lineColor,
            scaleColor: axis.scaleColor,
            shortScaleColor: axis.shortScaleColor,
            lineWidth: axis.lineWidth,
            transform: 'translate(0, 0)',
/*            axis_x_x: axis_x_x,
            axis_x_y: axis_x_y,
            axis_y_x: axis_y_x,
            axis_y_y: axis_y_y*/
        },
        methods: {
            dbclick: function(event) {
                var me = this;
                if(event.detail == 2) {
                    axis.zoom *= 1.2;
                    this.transform = 'scale('+ axis.zoom +')';
                }
            },
            mousedown: function(event) {
                axis.clientX = event.clientX;
                axis.clientY = event.clientY;
                axis.isDown = true;
            },
            mousemove: function(event) {
                console.log(axis.isDown);
                if(axis.isDown) {
                    var translateX = axis.translateX = event.clientX - axis.clientX,
                        translateY = axis.translateY = event.clientY - axis.clientY;

                    this.transform = 'translate('+ translateX + ',' + translateY +')';
                }else {
                    // 小圆球逻辑
                }
            },
            mouseout: function() {
                var me = this;
                axis.isDown = false;

                var x = parseInt(+Math.abs(axis.translateX / axis.xunitlen).toFixed(2)),
                    y = parseInt(+Math.abs(axis.translateY / axis.yunitlen).toFixed(2));

                if(axis.translateX > 0) {
                    axis.xmin -= x;
                    axis.xmax -= x;
                }else {
                    axis.xmin += x;
                    axis.xmax += x;
                }

                if(axis.translateY > 0) {
                    axis.ymin -= y;
                    axis.ymax -= y;
                }else {
                    axis.ymin += y;
                    axis.ymax += y;
                }

                // 重新绘制
                res = plot_xaxis();
                ['fpath', 'xpath', 'xshortpath', 'xtext', 'ypath', 'yshortpath', 'ytext', 'xorigin', 'yorigin'].forEach(function(item){
                    me[item] = res[item];
                });
            },
            mouseup: function() {
                var me = this;
                axis.isDown = false;

                var x = parseInt(+Math.abs(axis.translateX / axis.xunitlen).toFixed(2)),
                    y = parseInt(+Math.abs(axis.translateY / axis.yunitlen).toFixed(2));

                if(axis.translateX > 0) {
                    axis.xmin -= x;
                    axis.xmax -= x;
                }else {
                    axis.xmin += x;
                    axis.xmax += x;
                }

                if(axis.translateY > 0) {
                    axis.ymin -= y;
                    axis.ymax -= y;
                }else {
                    axis.ymin += y;
                    axis.ymax += y;
                }

                // 重新绘制
                res = plot_xaxis();
                ['fpath', 'xpath', 'xshortpath', 'xtext', 'ypath', 'yshortpath', 'ytext', 'xorigin', 'yorigin'].forEach(function(item){
                    me[item] = res[item];
                });
            },
            mousewheel: function(event) {
                var multiple = event.deltaY > 0 ? 0.2 : -0.2;
                this.transform = 'scale('+ axis.zoom +')';
                update.call(this, multiple);
            }
        }
    });

    function update(multiple) {
        var me = this;
        ['xmin', 'xmax', 'ymin', 'ymax'].forEach(function(item) {
            axis[item] += axis[item] * multiple
        });
        //axis.xpoints = axis.xpoints + (+axis.xpoints * multiple)
        res = plot_xaxis();
        ['fpath', 'xpath', 'xshortpath', 'xtext', 'ypath', 'yshortpath', 'ytext', 'xorigin', 'yorigin'].forEach(function(item){
            me[item] = res[item];
        });
    }

    function plot_xaxis() {
        var xmin = axis.xmin,
            xmax = axis.xmax,
            ymin = axis.ymin,
            ymax = axis.ymax,

            xpoints = axis.xpoints,

            // svg
            width = axis.width,
            height = axis.height,

            axisWidth = 3 * width,
            axisHeight = 3 * height,

            // 单位长度
            xunitlen = axis.xunitlen = width / (xmax - xmin),
            yunitlen = axis.yunitlen = height/ (ymax - ymin),

            x_min = xmin - width/xunitlen,
            x_max = xmax + width/xunitlen,

            y_min = ymin - height/yunitlen,
            y_max = ymax + height/yunitlen,

            // 原点
            xorigin = Math.abs(xmin) * xunitlen,
            yorigin = height - Math.abs(ymin) * yunitlen,

            scaleWidth = axis.scaleWidth,
            shortScaleWidth = axis.shortScaleWidth,

            // 点间隔
            inch = xmax - xmin - 0.000001*(xmax -xmin),
            inch = inch / xpoints,
            _formatCurvePath = function(arr) {
                return (xorigin + arr[0] * xunitlen).toFixed(2) + ',' + (yorigin - arr[1] * yunitlen).toFixed(2);
            },
            _formatPath = function(x1, y1, x2, y2) {
                return 'M' + x1 + ',' + y1 + " L" + x2 + ',' + y2;
            },
            _formatText = function(x, y, text) {
                return '<text x="'+ x +'" y="'+ y +'">'+ text +'</text>'
            },

            // distance
            xscale  = xunitlen,
            xshortscale = xunitlen / 5,
            yscale      = yunitlen,
            yshortscale = yunitlen / 5,

            dots = [],
            fPath = [],
            xPath = [],
            xShortPath = [],
            xText = [],
            yPath = [],
            yShortPath = [],
            yText = [];

        xorigin = xorigin - axis.translateX;
        yorigin = yorigin - axis.translateY;

        // dot 集合
        for(var t = x_min; t <= x_max; t += inch) {
            dots.push([t, Math.sin(t)]);
        }

        // 绘制曲线
        for(var i = 0, ilen = dots.length; i < ilen; i ++) {
            fPath.push(_formatCurvePath(dots[i]));
        }

        // 绘制 X 轴
        for(var x = -500, text = x_min; x <= 1000; x += xscale, text += 1) {
            xPath.push( _formatPath(x, yorigin - scaleWidth / 2, x, (yorigin - scaleWidth / 2 + scaleWidth).toFixed(2)) );
            text !== 0 && xText.push(_formatText(x - (text < 0 ? 8 : text > 10 ? 6 : 3), (yorigin + 15), text));
        }

        for(var x = -500; x <= 1000; x += xshortscale) {
            xShortPath.push( _formatPath(x, yorigin - shortScaleWidth / 2, x, (yorigin - shortScaleWidth / 2 + shortScaleWidth).toFixed(2)) )
        }

        // 绘制 Y 轴
        for(var y = 500, text = y_min; y >= -250; y -= yscale, text += 1) {
            yPath.push(_formatPath(xorigin - scaleWidth / 2, y, xorigin - scaleWidth / 2 + scaleWidth, y));
            text !== 0 && yText.push(_formatText(xorigin - 5 / 2 - 10, y + 6, text));
        }

        for(var y = 500; y >= -250; y -= yshortscale) {
            yShortPath.push( _formatPath(xorigin - shortScaleWidth / 2, y, (xorigin - shortScaleWidth / 2 + shortScaleWidth).toFixed(2), y) )
        }

        return {
            fpath: 'M' + fPath.join(' '),
            xpath: xPath.join(' '),
            xshortpath: xShortPath.join(' '),
            xtext: xText.join('\n'),
            ypath: yPath.join(' '),
            yshortpath: yShortPath.join(' '),
            ytext: yText.join('\n'),
            yorigin: yorigin,
            xorigin: xorigin
        }
    }
})(window, Vue);
