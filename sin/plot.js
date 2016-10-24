/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-23 23:03:23
 * @version $Id$
 */

(function(window, Vue) {
    var sgCharts = {
        option: {
            grid: {
                width: 500,
                height: 250,
                // 上、右、下、左
                padding: [10, 10, 10, 10]
            },
            xAxis: {
                width: 1500,
                height: 1,
                color: '#e7e7e7',
                min: -8.2,
                max: 9.88,
                scaleStyle: {
                    height: 5,
                    width: 1,
                    color: '#bbb',
                    shortScale: true,
                    shortScaleColor: '#ddd',
                    splitNumber: 5
                },
                textStyle: {
                    color: '#666',
                    size: 11
                }
            },
            yAxis: {
                width: 1,
                height: 750,
                color: '#e7e7e7',
                min: -2,
                max: 2,
                scaleStyle: {
                    height: 1,
                    width: 5,
                    color: '#bbb',
                    shortScale: true,
                    splitNumber: 5
                },
                textStyle: {
                    color: '#666',
                    size: 11
                }
            },
            series: [{
                name: 'sin(x)',
                // type['function', 'ploar', 'parametric']
                type: 'function',
                lineStyle: {
                    color: '#ff6949'
                }
            }]
        },

        getStep : function() {
            var option = this.option;
            [option.xAxis, option.yAxis].forEach(function(item) {
                var full = -0.9 + Math.log(item.max - item.min) / Math.log(10),
                    order = Math.floor(full),
                    rem = full - order,
                    step = Math.pow(10, order);

                if(rem > 0.7) {
                    step *= 5;
                }else if(rem > 0.3) {
                    step *= 2;
                }

                item.step = step;
            });
        },
        draw: function(translateX, translateY) {
            this.getStep();

            var option = this.option,
                grid = option.grid,
                xAxis = option.xAxis,
                yAxis = option.yAxis,
                xmin = xAxis.min,
                xmax = xAxis.max,
                ymin = yAxis.min,
                ymax = yAxis.max,
                xstep = xAxis.step,
                ystep = yAxis.step,
                width = grid.width,
                natrualWidth = grid.width - grid['padding'][1] - grid['padding'][3],
                height = grid.height,
                natrualHeight = grid.height - grid['padding'][0] - grid['padding'][2],
                axisWidth = 3 * natrualWidth,
                axisHeight = 3 * natrualHeight;

            translateX = translateX || 0;
            translateY = translateY || 0;

            xmin = Math.floor(xmin / xstep) * xstep;
            xmax = Math.ceil(xmax / xstep) * xstep;

            xunit = natrualWidth / (xmax - xmin);
            xmin = 0 - axisWidth / xunit * 1 / 3 + xmin;
            xmax = axisWidth / xunit * 2 / 3 - xmax;
            xmin = Math.floor(xmin / xstep) * xstep;
            xmax = Math.ceil(xmax / xstep) * xstep;

            ymin = Math.floor(ymin / ystep) * ystep;
            ymax = Math.ceil(ymax / ystep) * ystep;

            yunit = natrualHeight / (ymax - ymin);
            ymin = 0 - axisHeight / yunit * 1 / 3 + ymin;
            ymax = axisHeight / yunit * 2 / 3 - ymax;
            ymin = Math.floor(ymin / ystep) * ystep;
            ymax = Math.ceil(ymax / ystep) * ystep;


            xAxis.unit = xunit;
            xAxis.xmax = xmax;
            xAxis.xmin = xmin;
            yAxis.ymax = ymax;
            yAxis.ymin = ymin;
            yAxis.unit = yunit;

            console.log(xmin, xmax, ymin, ymax, 'xxxxxxx');
            var xpath = [];
            xpath.push('<rect x="'+ (-natrualWidth) +'" y="'+(natrualHeight / 2 + grid['padding'][0] + translateX)+'" fill="#333" stroke-width="0.5" width="1500" height="0.5"></rect>');
            for(var i = xmin; i <= xmax; i += xstep) {
                x1 = x2 = (i - xmin) / (xmax - xmin) * axisWidth + xmin * xunit * 2 / 3 + grid['padding'][3];
                y1 = 0 + grid['padding'][0];
                y2 = natrualHeight / 2 + grid['padding'][0];

                xpath.push('<line x1="'+x1+'" x2="'+x1+'" y1="'+ y2 +'" y2="'+ (y2 + 5)+'" stroke="#f00" stroke-width="1" width="1" height="5"></line>');
                xpath.push('<text text-anchor="middle" x="'+ x1 +'" y="'+ (height / 2 + 16) +'">'+i+'</text>');
            }

            xpath = xpath.join('\n');

            var ypath = [];
            ypath.push('<rect x="'+ (natrualWidth / 2 + grid['padding'][3] + translateY) +'" y="'+ (-natrualHeight) +'" fill="#333" stroke-width="0.5" width="0.5" height="750"></rect>');
            for(var i = ymin; i <= ymax; i += ystep) {
                x1 = natrualWidth / 2 + grid['padding'][3];
                x2 = x1 + 5;
                y1 = y2 = axisHeight - (i - ymin) / (ymax - ymin) * axisHeight + grid['padding'][0] + ymin * yunit * 2 / 3;

                ypath.push('<line x1="'+x1+'" x2="'+x2+'" y1="'+ y1 +'" y2="'+ y2 +'" stroke="#f00" stroke-width="1" width="1" height="5"></line>');
                ypath.push('<text text-anchor="middle" x="'+ (x1 + 16) +'" y="'+ (y2 + 6)+'">'+i+'</text>');
            }

            ypath = ypath.join('\n');

            var fpath = ['M'], x, y;

            for(var i = xmin; i < xmax; i += 0.25) {
                x = i * xunit + natrualWidth / 2 + grid['padding'][3];
                y = natrualHeight / 2 + grid['padding'][0] - Math.sin(i) * yunit;
                fpath.push(x + ',' + y);
            }

            fpath = fpath.join(' ');

            return {
                fpath: fpath,
                xpath: xpath,
                ypath: ypath
            }
        },

        drawGrid: function() {
            var option = this.option,
                grid   = option.grid;

            var res = [];
                html = [];

            [option.xAxis, option.yAxis].forEach(function(item, index) {
                var min = item.min,
                    max = item.max,
                    width = grid.width - grid['padding'][1] - grid['padding'][3],
                    height = grid.height - grid['padding'][0] - grid['padding'][2],
                    step, full, order,rem,
                    i, x, y, x1, x2, y1, y2;

                full = -0.9 + Math.log(max - min) / Math.log(10);
                order = Math.floor(full);
                rem = full - order;
                step = Math.pow(10, order);
                if(rem > 0.7) {
                    step *= 5;
                }else if(rem > 0.3) {
                    step *= 2;
                }

                item.step = step;

                _min = Math.floor(min / step) * step;
                _max = Math.ceil(max / step) * step;
                console.log(_min, _max, 'xxx');
                item.step = step;
                item.data = [];
                item.html = [];

                if(index == 0) {
                    unit = width / (_max - _min);
                    min = 0 - item.width / unit * 1 / 3 + _min;
                    max = item.width / unit * 2 / 3 - _max;

                }else {
                    unit = height / (_max - _min);
                    console.log(unit);
                    min = 0 - item.height / unit * 1 / 3 + _min;
                    max = item.height / unit * 2 / 3 - _max;
                }

                min = Math.floor(min / step) * step;
                max = Math.ceil(max / step) * step;

                item.data = [];
                item.html = [];
                console.log(min, max, 'new');

                if(index == 0) {
                    item.html.push('<line x1="'+ (min * unit * 2 / 3) +'" x2="'+ (item.width * 2 / 3) +'" y1="'+ (grid.height / 2 + 2)+'" y2="'+(grid.height / 2 + 2)+'" stroke="#333" stroke-width="1" width="1500" height="1"></line>');
                }else {
                    item.html.push('<line x1="'+ (grid.width / 2 - 2) +'" x2="'+ (grid.width / 2 -2) +'" y1="'+ (min * unit * 2 / 3)+'" y2="'+(item.height * 2 / 3)+'" stroke="#333" stroke-width="1" width="1" height="750"></line>');
                }
                console.log(min, max, step, 'ddd');
                for(i = min; i <= max; i += step){
                    if(index == 0) {
                        x1 = x2 = (i - min) / (max - min) * item.width + grid['padding'][3] + min * unit * 2 / 3;
                        console.log(i, x1);
                        y1 = 0 + grid['padding'][0];
                        y2 = height + grid['padding'][0];
                        item.html.push('<text text-anchor="middle" x="'+ x1 +'" y="'+ (grid.height / 2 + 16) +'">'+i+'</text>');
                        item.html.push('<line x1="'+x1+'" x2="'+x1+'" y1="'+ (grid.height/2)+'" y2="'+(grid.height / 2 + 5)+'" stroke="#f00" stroke-width="1" width="1" height="5"></line>');
                    }else {
                        x1 = 0 + grid['padding'][3];
                        x2 = grid.width - grid['padding'][1];
                        y1 = y2 = (1 - (i - min) / (max - min)) * item.height + grid['padding'][0] + min * unit * 2 / 3;

                        item.html.push('<text text-anchor="middle" x="'+ (grid.width / 2 - 16) +'" y="'+ (y1 + 10) +'">'+i+'</text>');
                        item.html.push('<line x1="'+ (grid.width / 2) +'" x2="'+(grid.width/2 + 5)+'" y1="'+ y1+'" y2="'+y1+'" stroke="#f00" stroke-width="1"></line>');

                    }
                    item.html.push('<line stroke="#ccc" stroke-width="1" x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"></line>');

                    item.data.push([x1, x2, y1, y2, i]);
                }
                res.push(item.data);
                html.push(item.html.join('\n'));
            });
            //document.getElementById('grid').innerHTML = html.join('\n')

            return res;
        },

        drawFunction: function() {

        },

        drawPolar: function() {

        },

        drawParametric: function() {

        },

        zoom: function(zoom) {
            var option = this.option,
                grid = option.grid,
                xAxis = option.xAxis,
                yAxis = option.yAxis;

            xAxis.max /= zoom;
            xAxis.min /= zoom;

            yAxis.max /= zoom;
            yAxis.min /= zoom;

            this.scale = 'scale('+ zoom +')';

            var res = sgCharts.draw();

            vm.fpath = res.fpath;
            vm.xpath = res.xpath;
            vm.ypath = res.ypath;
        },

        move: function(translateX, translateY) {

        }
    }


    var res = sgCharts.draw();

    var vm = new Vue({
        el: '#example',
        data: {
            fpath: res.fpath,
            xpath: res.xpath,
            ypath: res.ypath,
            transform: 'translate(0, 0)',
            scale: ''
        },
        methods: {
            dbclick: function(event) {
                var me = this;
                if(event.detail == 2) {
                    sgCharts.zoom(1.2);
                }
            },
            mousedown: function(event) {
                var grid = sgCharts.option.grid;

                grid.pageX = event.pageX;
                grid.pageY = event.pageY;
                grid.isMouseDown = true;
            },
            mousemove: function(event) {
                var grid = sgCharts.option.grid;

                if(grid.isMouseDown) {
                    var translateX = grid.translateX = Math.floor((event.pageX - grid.pageX)),
                        translateY = grid.translateY = event.pageY - grid.pageY;

                    this.transform = 'translate('+ translateX + ',' + translateY +')';
                }else {
                    // 小圆球逻辑
                }
            },
            mouseout: function() {
/*                var me = this;
                axis.isDown = false;

                var x = parseInt(+Math.abs(axis.translateX / axis.xunitlen).toFixed(2)),
                    y = parseInt(+Math.abs(axis.translateY / axis.yunitlen).toFixed(2));

                if(axis.translateX > 0) {
                    axis.min -= x;
                    axis.xmax -= x;
                }else {
                    axis.min += x;
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
                });*/
            },
            mouseup: function() {
                var me = this,
                    option = sgCharts.option,
                    xAxis = option.xAxis,
                    yAxis = option.yAxis,
                    grid = option.grid;

                grid.isMouseDown = false;

                var x = parseInt(+Math.abs(grid.translateX / xAxis.unit).toFixed(2)),
                    y = parseInt(+Math.abs(grid.translateY / yAxis.unit).toFixed(2));

                console.log(x, y, grid.translateX, grid.translateY, 'translate');

                console.log(xAxis.min, xAxis.max, yAxis.min, yAxis.max, 'old');
                if(grid.translateX > 0) {
                    xAxis.min -= x;
                    xAxis.max -= x;
                }else {
                    xAxis.min += x;
                    xAxis.max += x;
                }

                if(grid.translateY > 0) {
                    yAxis.min -= y;
                    yAxis.max -= y;
                }else {
                    yAxis.min += y;
                    yAxis.max += y;
                }
                console.log(xAxis.min, xAxis.max, yAxis.min, yAxis.max, 'new');

                // 重新绘制
                var res = sgCharts.draw();
/*                ['fpath', 'xpath', 'ypath'].forEach(function(item){
                    me[item] = res[item];
                });
*/
                vm.fpath = res.fpath;
                vm.xpath = res.xpath;
                vm.ypath = res.ypath;

            },
            mousewheel: function(event) {
                var zoom = event.deltaY > 0 ? 0.5 : 2;

                sgCharts.zoom(zoom);
            }
        }
    });

    //console.log(sgCharts.drawAxis());
})(window, Vue);