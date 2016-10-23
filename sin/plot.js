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
                padding: [0, 10, 0, 10],
                left: 32,
                right: 0,
                top: 10,
                bottom: 30
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
                min: -10,
                max: 10,
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

        drawGrid: function() {
            var option = this.option,
                grid   = option.grid;

            var res = [];
                html = [];
            [option.xAxis, option.yAxis].forEach(function(item, index) {
                var min = item.min,
                    max = item.max,
                    step, full, order,rem,
                    i, x1, x2, y1, y2;

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
                item.data = [];
                item.html = [];
                min = Math.floor(min / step) * step;
                max = Math.ceil(max / step) * step;

                console.log(min, max);

                for(i = min; i <= max; i += step){
                    if(index == 0) {
                        x1 = x2 = (i - min) / (max - min) * grid.width;
                        y1 = 0;
                        y2 = grid.height;
                        item.html.push('<text text-anchor="middle" x="'+ x1 +'" y="'+ (grid.height / 2 + 16) +'">'+i+'</text>');
                        item.html.push('<line x1="'+x1+'" x2="'+x1+'" y1="'+ (grid.height/2)+'" y2="'+(grid.height / 2 + 5)+'" stroke="#f00" stroke-width="2" width="1" height="5"></line>');
                    }else {
                        x1 = 0;
                        x2 = grid.width;
                        y1 = y2 = (1 - (i - min) / (max - min)) * grid.height;
                        item.html.push('<text text-anchor="middle" x="'+ (grid.width / 2 - 16) +'" y="'+ (y1 + 10) +'">'+i+'</text>');
                        item.html.push('<line x1="'+ (grid.width / 2) +'" x2="'+(grid.width/2 + 20)+'" y1="'+ y1+'" y2="'+y1+'" stroke="#f00" stroke-width="2"></line>');

                    }
                    item.html.push('<line stroke="#ccc" stroke-width="1" x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"></line>');

                    item.data.push([x1, x2, y1, y2, i]);
                }
                res.push(item.data);
                html.push(item.html.join('\n'));
            });
            document.getElementById('grid').innerHTML = html.join('\n')

            return res;
        },

        drawLabel: function() {

        },

        drawAxis: function() {

        },

        drawFunction: function() {

        },

        drawPolar: function() {

        },

        drawParametric: function() {

        },

        zoom: function() {

        },

        move: function() {

        }
    }

    console.log(sgCharts.drawGrid());

})(window, Vue);