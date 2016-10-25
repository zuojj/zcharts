/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-25 10:56:53
 * @version $Id$
 */

(function() {
    var sgCharts = {
        option: {
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
                min: -2,
                max: 2,
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
            series: [{
                name: 'sin(x)',
                // type['function', 'ploar', 'parametric']
                type: 'function',
                lineStyle: {
                    color: '#ff6949'
                }
            }]
        },
        getStep: function() {
            var option = this.option;

            [option.xAxis, option.yAxis].forEach(function(item, index) {
                var orderfull, order, rem, step;

                orderfull = -0.9 + Math.log(item.max - item.min) / Math.log(10);
                order = Math.floor(orderfull);
                rem = orderfull - order;
                step = Math.pow(10, order);

                if (rem > .7) step *= 5;
                else if (rem > .3) step *= 2;

                item.step = step;
            });
        },

        drawGrid: function() {
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
                    texts = [],
                    grids = [],
                    scales = [],
                    x1, x2, y1, y2, gx1, gx2, gy1, gy2, rectx, recty;

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
                            text: i
                        });
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
                            c: item.textStyle.color,
                            tx: tx,
                            ty: y1 + 5,
                            text: i
                        });
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
                    }
                };
            });

            return {
                axises: axises,
                paths: this.drawFunction()
            };
        },

        drawFunction: function() {
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
                px, py, x, y,html = ['M'];

            for(var px = 0; px < grid.width; px += 0.25) {
                x = (px / grid.width) * (xmax - xmin) + xmin;
                y = Math.sin(x);

                if(!isNaN(y)){
                    py = (ymax - y) / (ymax - ymin) * grid.height;
                }

                html.push(px + ',' + py);
            }

            return [{
                d: html.join(' '),
                c: '#f00',
                w: 1
            }]
        },

        reDraw: function() {
            vm.gdata = this.drawGrid();
        },

        zoom: function(factor) {
            var me = this,
                option = me.option,
                grid = option.grid,
                xAxis = option.xAxis,
                yAxis = option.yAxis;

            vm.scale = 'scale(' + factor +')';
            grid.zoom *= factor;


            setTimeout(function() {
                var cx = (xAxis.max + xAxis.min) / 2,
                    cy = (yAxis.max + yAxis.min) / 2;

                xAxis.max = (xAxis.max - cx) / grid.zoom + cx;
                xAxis.min = (xAxis.min - cx) / grid.zoom + cx;

                yAxis.max = (yAxis.max - cy) / grid.zoom + cy;
                yAxis.min = (yAxis.min - cy) / grid.zoom + cy;

                grid.zoom = 1;

                vm.gdata = me.drawGrid();
                vm.scale = '';
            }, 300);
        },

        drawTrace: function(offsetX) {
            var option = this.option,
                grid = option.grid,
                xAxis = option.xAxis,
                yAxis = option.yAxis,
                xmin = xAxis.min,
                xmax = xAxis.max,
                ymin = yAxis.min,
                ymax = yAxis.max,
                px, py, x, y;

            x = (offsetX / grid.width) * (xmax - xmin) + xmin;
            y = Math.sin(x);

            if(!isNaN(y)){
                py = (ymax - y) / (ymax - ymin) * grid.height;
            }

            return {
                cx: offsetX,
                cy: py,
                x: x.toFixed(7),
                y: y.toFixed(7)
            }
        }
    };

    var count = 0;
    var vm = new Vue({
        el: '#example',
        data: {
            gdata: sgCharts.drawGrid(),
            circle: sgCharts.drawTrace(258),
            transform: {x: 0, y: 0},
            scale: '',
            strans: '',
            etrans: ''
        },
        methods: {
            mouseover: function(e) {
                var grid = sgCharts.option.grid;
                grid.isMouseDown = false;
                // e.target.style.cursor = "move";
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
                        me.gdata = sgCharts.drawGrid();
                    }, 100);


                    this.transform = 'translate(0,0)';
                }
            },

            mousedown: function(e) {
                var grid = sgCharts.option.grid;

                if(!grid.isMouseDown) {
                    grid.pageX = e.offsetX;
                    grid.pageY = e.offsetY;
                    grid.isMouseDown = true;
                    console.log(e);
                }
            },

            mousemove: function(e) {
                var grid = sgCharts.option.grid;

                if(grid.isMouseDown) {
                    grid.translateX = e.offsetX - grid.pageX;
                    grid.translateY = e.offsetY - grid.pageY;
                    //this.transform = 'translate(' + grid.translateX + ',' + grid.translateY + ')';
                    vm.transform = {
                        x: grid.translateX,
                        y: grid.translateY
                    }
                }else {
                    vm.circle = sgCharts.drawTrace(e.offsetX);
                }
            },

            mouseup: function(e) {
                var option = sgCharts.option,
                    grid   = option.grid,
                    xAxis  = option.xAxis,
                    yAxis  = option.yAxis;

                if(grid.isMouseDown) {

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
                        me.gdata = sgCharts.drawGrid();
                    }, 100);


                    this.transform = {x: 0, y: 0};
                }
            },

            mousewheel: function(e) {
                var zoom = e.wheelDelta > 0 ? 1.25 : 0.8;
                sgCharts.zoom(zoom);
            },

            plusClick: function() {
                sgCharts.zoom(1.25);
            },

            minusClick: function() {
                sgCharts.zoom(0.8);
            },

            arrow_mouseover: function() {
                vm.etrans = 'translate(34, 0)';
                vm.strans = 'translate(17, 0)';
            },

            op_mouseover: function() {

            },

            op_mouseout: function() {

            },

            op_mousedown: function() {

            }
        }
    })
sgCharts.drawGrid();

})();