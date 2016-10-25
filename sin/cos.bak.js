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
                padding: [10, 10, 10, 10]
            },
            xAxis: {
                width: 1500,
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
                height: 750,
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
                tx = x - 10;
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
                    x1, x2, y1, y2, gx1, gx2, gy1, gy2, rectx, recty;

                var arr = [];
                var scale = [];
                if(index == 0) {
                    rectx = 0;
                    recty = y;
                    xhtml.push('<rect x="'+ rectx +'" y="'+ recty +'" fill="#f00" stroke-width="0.5" width="'+ grid.width +'" height="'+ 0.5 +'"></rect>');
                    for(var i = Math.ceil(min / step) * step; i <= max; i += step) {
                        if(i == 0) continue;
                        x1 = x2 = (i - min) / (max - min) * grid.width;
                        y1 = y;
                        y2 = y + item.scaleStyle.len;
                        gy1 = 0;
                        gy2 = grid.height;
                        xhtml.push('<line stroke="#eee" stroke-width="0.5" x1="'+ x1 +'" x2="'+ x2 +'" y1="'+ gy1 +'" y2="'+ gy2 +'"></line>');

                        xhtml.push('<line stroke="#f00" stroke-width="1" x1="'+ x1 +'" x2="'+ x2 +'" y1="'+ y1 +'" y2="'+ y2 +'"></line>');

                        scale.push('M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2);
                        xhtml.push('<text text-anchor="middle" x="'+ x1 +'" y="'+ ty +'">'+ i +'</text>');

                        arr.push({
                            ta: 'middle',
                            c: item.textStyle.color,
                            tx: tx,
                            ty: ty,
                            text: i
                        });
                    }
                }else {
                    rectx = x;
                    recty = 0;
                    yhtml.push('<rect x="'+ rectx +'" y="'+ recty +'" fill="#f00" stroke-width="0.5" width="'+ 0.5 +'" height="'+ grid.height +'"></rect>');

                    for(var i = Math.ceil(min / step) * step; i <= max; i += step) {
                        if(i == 0) continue;
                        x1 = x;
                        x2 = x + item.scaleStyle.len;
                        gx1 = 0;
                        gx2 = grid.width;

                        y1 = y2 = (1 - (i - min) / (max - min)) * grid.height;

                        yhtml.push('<line stroke="#eee" stroke-width="1" x1="'+ gx1 +'" x2="'+ gx2 +'" y1="'+ y1 +'" y2="'+ y2 +'"></line>');

                        yhtml.push('<line stroke="#f00" stroke-width="1" x1="'+ x1 +'" x2="'+ x2 +'" y1="'+ y1 +'" y2="'+ y2 +'"></line>');
                        yhtml.push('<text text-anchor="start" x="'+ tx +'" y="'+ (y1 + 4) +'">'+ i +'</text>');

                        scale.push('M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2);
                        arr.push({
                            ta: 'middle',
                            c: item.textStyle.color,
                            tx: tx,
                            ty: ty,
                            text: i
                        });
                    }
                }

                axises[index] = {
                    texts: arr,
                    rect: {
                        x: rectx,
                        y: recty,
                        w: item.width,
                        h: item.height,
                        c: item.color
                    },
                    scale: {
                        d: scale.join(' '),
                        c: item.scaleStyle.color,
                        b: item.scaleStyle.border
                    }
                };
            });
            console.log(axises);
            document.getElementById('xaxis').innerHTML = xhtml.join('');
            document.getElementById('yaxis').innerHTML = yhtml.join('');

            this.drawFunction();

            return axises;
        },
        drawLabel: function() {
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
                xstep = xAxis.step,
                ystep = yAxis.step,
                x, y, x1, x2, y1, y2,
                xhtml = [], yhtml = [];

            x = (0 - xmin) / (xmax - xmin) * width;
            if(x <= 0) {
                x = 0;
                tx = x + 10;
            }else if(x >= width - 2) {
                x = width - 2;
                tx = x - 10;
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

            for(var i = Math.ceil(xmin / xstep) * xstep; i <= xmax; i += xstep) {
                if(i == 0) continue;
                x1 = x2 = (i - xmin) / (xmax - xmin) * grid.width;
                y1 = y;
                y2 = y + 5;
                xhtml.push('<line stroke="#f00" stroke-width="1" x1="'+ x1 +'" x2="'+ x2 +'" y1="'+ y1 +'" y2="'+ y2 +'"></line>');
                xhtml.push('<text text-anchor="middle" x="'+ x1 +'" y="'+ ty +'">'+ i +'</text>');
            }

            for(var i = Math.ceil(ymin / ystep) * ystep; i <= ymax; i += ystep) {
                if(i == 0) continue;
                x1 = x;
                x2 = x + 5;
                y1 = y2 = (1 - (i - ymin) / (ymax - ymin)) * grid.height;
                yhtml.push('<line stroke="#f00" stroke-width="1" x1="'+ x1 +'" x2="'+ x2 +'" y1="'+ y1 +'" y2="'+ y2 +'"></line>');
                yhtml.push('<text text-anchor="start" x="'+ tx +'" y="'+ (y1 + 4) +'">'+ i +'</text>');
            }

            return [xhtml.join('\n'), yhtml.join('\n')];
        },

        drawAxis: function() {
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
                px, py, x, y, xhtml, yhtml;

            if(xmin < 0 && xmax > 0) {
                px = (0 - xmin) / (xmax - xmin) * grid.width;
            }else if(xmin >= 0) {
                px = 0;
            }else if(xmax <= 0) {
                px = grid.width;
            }

            yhtml = '<rect x="'+ px +'" y="'+ 0+'" fill="#f00" stroke-width="0.5" width="'+ 0.5 +'" height="'+ grid.height +'"></rect>';

            if(ymin < 0 && ymax > 0) {
                py = grid.height - grid.height * ( (0 - ymin) / (ymax - ymin));
            }else if(ymin >= 0) {
                py = grid.height;
            }else if(ymax <= 0) {
                py = 0;
            }

            xhtml = '<rect x="'+ 0 +'" y="'+ py +'" fill="#f00" stroke-width="0.5" width="'+ grid.width +'" height="'+ 0.5 +'"></rect>';

            return [xhtml, yhtml];
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

            document.getElementById('path').setAttribute('d', html.join(' '));
        },

        reDraw: function() {
            this.drawGrid();
        },

        zoom: function() {

        },

        move: function() {

        }
    };

    var vm = new Vue({
        el: '#example',
        data: {
            axises: sgCharts.drawGrid(),
            transform: '',
            scale: ''
        },
        methods: {
            mouseover: function(e) {

            },

            mouseout: function(e) {
                var grid = sgCharts.option.grid;
                grid.isMouseDown = false;
            },

            mousedown: function(e) {
                var grid = sgCharts.option.grid;

                grid.pageX = e.pageX;
                grid.pageY = e.pageY;
                grid.isMouseDown = true;
            },

            mousemove: function(e) {
                var grid = sgCharts.option.grid;

                if(grid.isMouseDown) {
                    grid.translateX = e.pageX - grid.pageX;
                    grid.translateY = e.pageY - grid.pageY;

                    this.transform = 'translate(' + grid.translateX + ',' + grid.translateY + ')';
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

                    sgCharts.reDraw();
                    this.transform = '';
                }
            },

            mousewheel: function(e) {

            }
        }
    })
sgCharts.drawGrid();

})();