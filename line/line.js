/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-21 18:24:46
 * @version $Id$
 */

(function(window, Vue) {
    var option = {
        title: {
            text: '人口趋势图'
        },
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
            data: ["1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"]
        },
        yAxis: {
            splitNumber: 3,
            unit: '亿'
        },
        series: [{
            "name": "中国",
            "lineStyle": {
                color: '#ff6949',
                width: 3,
                opacity: 1
            },
            "data": [6.6707, 6.6033, 6.6577, 6.82335, 6.98355, 7.15185, 7.354, 7.5455, 7.7451, 7.96025, 8.18315, 8.41105, 8.6203, 8.8194, 9.0035, 9.16395, 9.30685, 9.43455, 9.56165, 9.69005, 9.81235, 9.93885, 10.0863, 10.2331, 10.36825, 10.5104, 10.6679, 10.84035, 11.0163, 11.1865, 11.35185, 11.5078, 11.6497, 11.7844, 11.91835, 12.04855, 12.1755, 12.30075, 12.41935, 12.52735, 12.62645, 12.7185, 12.804, 12.884, 12.96075, 13.0372, 13.1102, 13.17885, 13.24655, 13.3126, 13.37705, 13.4413, 13.50695, 13.5738]
        }, {
            "name": "印度",
            "lineStyle": {
                color: '#4b9bf9',
                width: 1,
                opacity: 0.5
            },
            "data": [4.49595489, 4.58626687, 4.67962144, 4.77615992, 4.87607406, 4.97952332, 5.08656247, 5.19722246, 5.31160986, 5.42983934, 5.55199768, 5.67805061, 5.80798773, 5.94192969, 6.08002572, 6.22232355, 6.36883717, 6.51935141, 6.67339022, 6.83032539, 6.98965575, 7.15105168, 7.31443752, 7.47986284, 7.64749394, 7.81736502, 7.98941802, 8.16328792, 8.3383351, 8.51374699, 8.688907, 8.86348712, 9.03749636, 9.21107534, 9.3845255, 9.55804355, 9.73147577, 9.90460131, 10.07746556, 10.25014711, 10.42261758, 10.59500888, 10.76705723, 10.93786762, 11.10626108, 11.27143548, 11.4328935, 11.5909525, 11.74662334, 11.90138069, 12.05624648, 12.21156319, 12.36686732, 12.52139596]
        }, {
            "name": "美国",
            "lineStyle": {
                color: '#97d48c',
                width: 1,
                opacity: 0.5
            },
            "data": [1.80671158, 1.83691481, 1.86537737, 1.89241798, 1.91888791, 1.94302963, 1.96560338, 1.98712056, 2.00706052, 2.02676946, 2.05052174, 2.07660677, 2.09896021, 2.11908788, 2.13853928, 2.15973199, 2.18035164, 2.20239425, 2.22584545, 2.25055487, 2.2654225, 2.29465744, 2.31664432, 2.33792014, 2.35824908, 2.37923734, 2.40132831, 2.42288936, 2.44499004, 2.46819222, 2.49622814, 2.52980941, 2.56514224, 2.59918588, 2.63125821, 2.66278393, 2.69394284, 2.72646925, 2.75854104, 2.79040168, 2.82162411, 2.84968955, 2.87625193, 2.90107933, 2.92805298, 2.95516599, 2.98379912, 3.01231207, 3.04093966, 3.06771529, 3.09349689, 3.11721632, 3.14112078, 3.16497531]
        }]
    };

    var numobj = {
        getInterval: function(arr, splitNumber, fixMin, fixMax) {
            this._min = Math.min.apply(Math, arr);
            this._max = Math.max.apply(Math, arr);
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

    var series = option.series,
        xdata = option.xAxis.data,
        ydata = (function() {
            var result = [];
            series.forEach(function(item) {
                result = result.concat(item.data);
            });
            return result;
        })();
        grid = option.grid,
        xAxisLabel = numobj.getInterval(xdata, option.xAxis.splitNumber, '', option.xAxis.max),
        yAxisLabel = numobj.getInterval(ydata, option.yAxis.splitNumber),
        xmin = xdata[0],
        xmax = xdata[xdata.length - 1],
        ymin = yAxisLabel[0],
        ymax = yAxisLabel[yAxisLabel.length - 1],
        xunit = (grid.width - grid.left - grid.right - grid['padding'][1] - grid['padding'][3])/ (xmax - xmin),
        yunit = (grid.height - grid.top - grid.bottom) / (ymax - ymin);

    var lines = [],
        result = {};

    series.forEach(function(item, k) {
        var path = [],
            lineStyle = item.lineStyle;

        item.data.forEach(function(value, index) {
            var year = xdata[index],
                num = value,
                x = xunit * (year - xmin) + grid.left + grid['padding'][3] ,
                y = grid.height - (yunit * num + grid.bottom),
                _x = parseInt(x),
                obj = {
                    name: item.name,
                    r: lineStyle.width + 2,
                    color: lineStyle.color,
                    opacity: lineStyle.opacity,
                    num: num.toString().substr(0, 5),
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

        lines.push({
            d: 'M' + path.join(' '),
            color: lineStyle.color,
            width: lineStyle.width,
            opacity: lineStyle.opacity || 0.5
        });
    });

    // xtick
    var xAxis = [];
    xAxisLabel.forEach(function(value) {
        var x = (value - xmin) * xunit + grid.left + grid['padding'][3],
            y = grid.height - grid.bottom;

        xAxis.push({
            x1: x,
            y1: y,
            x2: x,
            y2: y + 5,
            tx: x - 20,
            ty: y + 20,
            text: value + option.xAxis.unit
        });
    });

    var yAxis = [];
    yAxisLabel.forEach(function(value) {
        var y = grid.height - (yunit * value + grid.bottom);
        yAxis.push({
            x1: grid.left,
            y: y,
            x2: grid.width,
            tx: 0,
            ty: y + 6,
            text: value == 0 ? 0 : (value + option.yAxis.unit)
        });
    })

    var legendData = option.legend.data,
        keys = Object.keys(result),
        circles = result[keys[keys.length - 1]],
        count = 0;


    Vue.component('sg-xaxis', {
        props: ['item'],
        template: '<g><line :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" line-anchor="middle" stroke="#f2f2f2" stroke-width="1"></line><text :x="item.tx" :y="item.ty">{{item.text}}</text></g>'
    });

    Vue.component('sg-yaxis', {
        props: ['item'],
        template: '<g><line :x1="item.x1" :y1="item.y" :x2="item.x2" :y2="item.y" line-anchor="middle" stroke="#f2f2f2" stroke-width="1"></line><text :x="item.tx" :y="item.ty">{{item.text}}</text></g>'
    });

    Vue.component('sg-path', {
        props: ['line'],
        template: '<path :stroke-width="line.width" :stroke="line.color" :d="line.d" :opacity="line.opacity" fill="none"></path>'
    });

    var initCircles = result[keys[keys.length - 1]];

    var vm = new Vue({
        el: '#sgGraph',
        data: {
            lines: lines,
            xAxis: xAxis,
            yAxis: yAxis,
            circles: initCircles,
            lineVisible: 'visible',
            line_x1: 0,
            line_y2: 0
        },
        methods: {
            mouseover: function() {
                var lines = this.lines,
                    circles = this.circles;

                for(var i = 0, len = lines.length; i < len; i++) {
                    lines[i]['opacity'] = circles[i]['opacity'] = 1;
                }
                this.lines = lines;
                this.circles = circles;
                this.lineVisible = 'visible';
            },
            mousemove: function(event) {
                var me = this,
                    circles = [],
                    offsetX = event.offsetX;

                circles = result[offsetX] || '';

                if(!circles.length) return;
                me.line_x1 = circles[0]['x'];
                me.line_y2 = grid.height - grid.bottom;

                for(var i = 0, len = circles.length; i < len; i++) {
                    circles[i]['opacity'] = 1;
                }

                me.circles = circles;
            },
            mouseout: function() {
                var lines = this.lines,
                    circles = this.circles;

                for(var i = 0, len = lines.length; i < len; i++) {
                    lines[i]['opacity'] = circles[i]['opacity'] = lines[i]['width'] == 3 ? 1 : 0.55;
                }
                this.lines = lines;
                this.circles = circles;
                this.lineVisible = 'hidden';
            }
        }
    });
})(window, Vue);