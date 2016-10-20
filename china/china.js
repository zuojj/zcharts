(function(window, Vue) {
    var option = {
        title: {
            text: '人口趋势图'
        },
        legend: {
            data: ["中国","印度","美国"]
        },
        grid: {
            width: 450,
            height: 185,
            padding: 10,
            left: 38,
            right: 10,
            top: 10,
            bottom: 30
        },
        xAxis: {
            splitNumber: 5,
            data: ["1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"]
        },
        yAxis: {
            splitNumber: 3
        },
        series: [{
            "name": "中华人民共和国",
            "lineStyle": {
                color: '#ff6949',
                width: 3,
                opacity: 1
            },
            "data": [667070000, 660330000, 665770000, 682335000, 698355000, 715185000, 735400000, 754550000, 774510000, 796025000, 818315000, 841105000, 862030000, 881940000, 900350000, 916395000, 930685000, 943455000, 956165000, 969005000, 981235000, 993885000, 1008630000, 1023310000, 1036825000, 1051040000, 1066790000, 1084035000, 1101630000, 1118650000, 1135185000, 1150780000, 1164970000, 1178440000, 1191835000, 1204855000, 1217550000, 1230075000, 1241935000, 1252735000, 1262645000, 1271850000, 1280400000, 1288400000, 1296075000, 1303720000, 1311020000, 1317885000, 1324655000, 1331260000, 1337705000, 1344130000, 1350695000, 1357380000]
        }, {
            "name": "印度",
            "lineStyle": {
                color: '#4b9bf9',
                width: 1,
                opacity: 0.5
            },
            "data": [449595489, 458626687, 467962144, 477615992, 487607406, 497952332, 508656247, 519722246, 531160986, 542983934, 555199768, 567805061, 580798773, 594192969, 608002572, 622232355, 636883717, 651935141, 667339022, 683032539, 698965575, 715105168, 731443752, 747986284, 764749394, 781736502, 798941802, 816328792, 833833510, 851374699, 868890700, 886348712, 903749636, 921107534, 938452550, 955804355, 973147577, 990460131, 1007746556, 1025014711, 1042261758, 1059500888, 1076705723, 1093786762, 1110626108, 1127143548, 1143289350, 1159095250, 1174662334, 1190138069, 1205624648, 1221156319, 1236686732, 1252139596]
        }, {
            "name": "美国",
            "lineStyle": {
                color: '#97d48c',
                width: 1,
                opacity: 0.5
            },
            "data": [180671158, 183691481, 186537737, 189241798, 191888791, 194302963, 196560338, 198712056, 200706052, 202676946, 205052174, 207660677, 209896021, 211908788, 213853928, 215973199, 218035164, 220239425, 222584545, 225055487, 226542250, 229465744, 231664432, 233792014, 235824908, 237923734, 240132831, 242288936, 244499004, 246819222, 249622814, 252980941, 256514224, 259918588, 263125821, 266278393, 269394284, 272646925, 275854104, 279040168, 282162411, 284968955, 287625193, 290107933, 292805298, 295516599, 298379912, 301231207, 304093966, 306771529, 309349689, 311721632, 314112078, 316497531]
        }]
    };

    var numobj = {
        quantity: function(val) {
            return Math.pow(10, Math.floor(Math.log(val) / Math.LN10));
        },
        nice: function(val, round) {
            var exp10 = this.quantity(val);
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
        getPrecisionSafe: function(val) {
            var str = val.toString(),
                dotIndex = str.indexOf('.');

            if (dotIndex < 0) {
                return 0;
            }
            return str.length - 1 - dotIndex;
        },
        roundingErrorFix: function(x, precision) {
            if (precision == null) {
                precision = 10;
            }
            return +(+x).toFixed(precision);
        },
        nextTick: function(min, max, splitNumber) {
            var me = this;

            splitNumber = splitNumber || 5;
            var extent = [min, max];
            var span = extent[1] - extent[0];
            if (!isFinite(span)) {
                return;
            }
            // User may set axis min 0 and data are all negative
            // FIXME If it needs to reverse ?
            if (span < 0) {
                span = -span;
                extent.reverse();
            }

            // From "Nice Numbers for Graph Labels" of Graphic Gems
            // var niceSpan = numberUtil.nice(span, false);
            var step = me.roundingErrorFix(
                me.nice(span / splitNumber, true),
                Math.max(
                    me.getPrecisionSafe(extent[0]),
                    me.getPrecisionSafe(extent[1])
                // extent may be [0, 1], and step should have 1 more digits.
                // To make it safe we add 2 more digits
                ) + 2
            );

            var precision = me.getPrecisionSafe(step) + 2;

            var min = me.roundingErrorFix(Math.ceil(extent[0] / step) * step, precision),
                max = me.roundingErrorFix(Math.floor(extent[1] / step) * step, precision),
                res  = [];

            //res.push(min-step);
            for(var i = min; i <= max; i += step) {
                res.push(i);
            }
            //res.push(max + step);

            return res;
        }
    };

    function getMinMax(arr) {
        return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
    }

    var series = option.series,
        xdata = option.xAxis.data,
        xAxisRange = getMinMax(xdata),
        yAxisRange = (function() {
            var result = [];

            series.forEach(function(item) {
                var d = getMinMax(item.data);
                result.push(d[0], d[1]);
            });

            return getMinMax(result);
        })(),
        xmin = xAxisRange[0],
        xmax = xAxisRange[1],
        ymin = yAxisRange[0] / Math.pow(10, 8),
        ymax = yAxisRange[1]/ Math.pow(10, 8),
        grid = option.grid,
        ymin = 0,
        ymax = 15,
        xunit = (grid.width - grid.left - grid.right)/ (xmax - xmin),
        yunit = (grid.height - grid.top - grid.bottom) / (ymax - ymin)/*,
        xAxisLabel = numobj.nextTick(xmin, xmax, option.xAxis.splitNumber),
        yAxisLabel = numobj.nextTick(ymin, ymax, option.yAxis.splitNumber)*/;

    console.log(numobj.nextTick(0, 13.7, option.yAxis.splitNumber));

    var lines = [],
        result = {};

    series.forEach(function(item, k) {
        var path = [],
            lineStyle = item.lineStyle;

        item.data.forEach(function(value, index) {
            var year = xdata[index],
                num = value / Math.pow(10, 8),
                x = xunit * (year - xmin) + grid.left,
                y = grid.height - (yunit * num + grid.bottom),
                _x = parseInt(x),
                obj = {
                    name: item.name,
                    r: lineStyle.width + 2,
                    color: lineStyle.color,
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
/*    var xlabel = [];
    xAxisLabel.forEach(function(value) {
        var x = (value - xmin) * xunit + grid.left,
            y = grid.height - grid.bottom;

        xlabel.push('<line x1="'+ x +'" y1="'+ y +'" x2="' + x +'" y2="'+ (y + 5) +'" line-anchor="middle" stroke="#f2f2f2" stroke-width="1"></line>');
        xlabel.push('<text x="'+ x +'" y="'+ (y + 20 )+'" text-anchor="middle">'+ value +'年</text>');
    });*/

    var xlabel = [];
    xdata.forEach(function(value) {
        var x = (value - xmin) * xunit + grid.left,
            y = grid.height - grid.bottom;
        if(value % 10 == 0) {
            xlabel.push('<line x1="'+ x +'" y1="'+ y +'" x2="' + x +'" y2="'+ (y + 5) +'" line-anchor="middle" stroke="#f2f2f2" stroke-width="1"></line>');
            xlabel.push('<text x="'+ x +'" y="'+ (y + 20 )+'" text-anchor="middle">'+ value +'年</text>');
        }
    });

/*    var ylabel = [];
    yAxisLabel = [0, 5, 10, 15];
    yAxisLabel.forEach(function(value) {
        var x = 0,
            x1 = grid.left - 10,
            x2 = grid.width,
            y = grid.height - (yunit * value + grid.bottom),
            value = value == 0 ? 0 : (value + '亿');
console.log(yunit);
        ylabel.push('<line x1="'+ x1 +'" y1="'+ y +'" x2="' + x2 +'" y2="'+ y +'" line-anchor="middle" stroke="#f2f2f2" stroke-width="1"></line>');
        ylabel.push('<text x="'+ x +'" y="'+ (y + 8) +'">'+ value +'</text>');
    })*/

    var ylabel = [];
    for(var i = 0; i <= ymax / 5; i ++) {
        var x = 0,
            x1 = grid.left - 10,
            x2 = grid.width,
            text = i * 5,
            text = text == 0 ? 0 : (text + '亿'),
            y = grid.height - (yunit * i * 5 + grid.bottom);

        ylabel.push('<line x1="'+ x1 +'" y1="'+ y +'" x2="' + x2 +'" y2="'+ y +'" line-anchor="middle" stroke="#f2f2f2" stroke-width="1"></line>');
        ylabel.push('<text x="'+ x +'" y="'+ (y + 8) +'">'+ text +'</text>');
    }

    var legendData = option.legend.data,
        keys = Object.keys(result),
        circles = result[keys[keys.length - 1]];

    var vm = new Vue({
        el: '#sgGraph',
        data: {
            lines: lines,
            xlabel: xlabel.join(''),
            ylabel: ylabel.join(''),
            circles: result[keys[keys.length - 1]],
            lineVisible: 'visible',
            line_x1: 0,
            line_y2: 0
        },
        methods: {
            mouseover: function() {
                var lines = this.lines;
                for(var i = 0, len = lines.length; i < len; i++) {
                    lines[i]['opacity'] = 1;
                }
                this.lines = lines;
                this.lineVisible = 'visible';
            },
            mousemove: function(event) {
                var me = this,
                    circles = [],
                    offsetX = event.offsetX;

                circles = result[offsetX] || '';

                if(!circles.length) return;

                setTimeout(function() {
                    me.line_x1 = circles[0]['x'];
                    me.line_y2 = grid.height - grid.bottom;
                    me.circles = circles;
                }, 20);
            },
            mouseout: function() {
                var lines = this.lines;
                for(var i = 0, len = lines.length; i < len; i++) {
                    lines[i]['opacity'] = lines[i]['width'] == 3 ? 1 : 0.55;
                }
                this.lines = lines;
                this.lineVisible = 'hidden';
            }
        }
    });
})(window, Vue);