(function(window, Vue) {
    var d = '{\x22v\x22:[[6.6707E8,6.6033E8,6.6577E8,6.82335E8,6.98355E8,7.15185E8,7.354E8,7.5455E8,7.7451E8,7.96025E8,8.18315E8,8.41105E8,8.6203E8,8.8194E8,9.0035E8,9.16395E8,9.30685E8,9.43455E8,9.56165E8,9.69005E8,9.81235E8,9.93885E8,1.00863E9,1.02331E9,1.036825E9,1.05104E9,1.06679E9,1.084035E9,1.10163E9,1.11865E9,1.135185E9,1.15078E9,1.16497E9,1.17844E9,1.191835E9,1.204855E9,1.21755E9,1.230075E9,1.241935E9,1.252735E9,1.262645E9,1.27185E9,1.2804E9,1.2884E9,1.296075E9,1.30372E9,1.31102E9,1.317885E9,1.324655E9,1.33126E9,1.337705E9,1.34413E9,1.350695E9,1.35738E9],[4.49595489E8,4.58626687E8,4.67962144E8,4.77615992E8,4.87607406E8,4.97952332E8,5.08656247E8,5.19722246E8,5.31160986E8,5.42983934E8,5.55199768E8,5.67805061E8,5.80798773E8,5.94192969E8,6.08002572E8,6.22232355E8,6.36883717E8,6.51935141E8,6.67339022E8,6.83032539E8,6.98965575E8,7.15105168E8,7.31443752E8,7.47986284E8,7.64749394E8,7.81736502E8,7.98941802E8,8.16328792E8,8.3383351E8,8.51374699E8,8.688907E8,8.86348712E8,9.03749636E8,9.21107534E8,9.3845255E8,9.55804355E8,9.73147577E8,9.90460131E8,1.007746556E9,1.025014711E9,1.042261758E9,1.059500888E9,1.076705723E9,1.093786762E9,1.110626108E9,1.127143548E9,1.14328935E9,1.15909525E9,1.174662334E9,1.190138069E9,1.205624648E9,1.221156319E9,1.236686732E9,1.252139596E9],[1.80671158E8,1.83691481E8,1.86537737E8,1.89241798E8,1.91888791E8,1.94302963E8,1.96560338E8,1.98712056E8,2.00706052E8,2.02676946E8,2.05052174E8,2.07660677E8,2.09896021E8,2.11908788E8,2.13853928E8,2.15973199E8,2.18035164E8,2.20239425E8,2.22584545E8,2.25055487E8,2.2654225E8,2.29465744E8,2.31664432E8,2.33792014E8,2.35824908E8,2.37923734E8,2.40132831E8,2.42288936E8,2.44499004E8,2.46819222E8,2.49622814E8,2.52980941E8,2.56514224E8,2.59918588E8,2.63125821E8,2.66278393E8,2.69394284E8,2.72646925E8,2.75854104E8,2.79040168E8,2.82162411E8,2.84968955E8,2.87625193E8,2.90107933E8,2.92805298E8,2.95516599E8,2.98379912E8,3.01231207E8,3.04093966E8,3.06771529E8,3.09349689E8,3.11721632E8,3.14112078E8,3.16497531E8]],\x22fv\x22:[[\x226.671 亿\x22,\x226.603 亿\x22,\x226.658 亿\x22,\x226.823 亿\x22,\x226.984 亿\x22,\x227.152 亿\x22,\x227.354 亿\x22,\x227.546 亿\x22,\x227.745 亿\x22,\x227.96 亿\x22,\x228.183 亿\x22,\x228.411 亿\x22,\x228.62 亿\x22,\x228.819 亿\x22,\x229.004 亿\x22,\x229.164 亿\x22,\x229.307 亿\x22,\x229.435 亿\x22,\x229.562 亿\x22,\x229.69 亿\x22,\x229.812 亿\x22,\x229.939 亿\x22,\x2210.09 亿\x22,\x2210.23 亿\x22,\x2210.37 亿\x22,\x2210.51 亿\x22,\x2210.67 亿\x22,\x2210.84 亿\x22,\x2211.02 亿\x22,\x2211.19 亿\x22,\x2211.35 亿\x22,\x2211.51 亿\x22,\x2211.65 亿\x22,\x2211.78 亿\x22,\x2211.92 亿\x22,\x2212.05 亿\x22,\x2212.18 亿\x22,\x2212.3 亿\x22,\x2212.42 亿\x22,\x2212.53 亿\x22,\x2212.63 亿\x22,\x2212.72 亿\x22,\x2212.8 亿\x22,\x2212.88 亿\x22,\x2212.96 亿\x22,\x2213.04 亿\x22,\x2213.11 亿\x22,\x2213.18 亿\x22,\x2213.25 亿\x22,\x2213.31 亿\x22,\x2213.38 亿\x22,\x2213.44 亿\x22,\x2213.51 亿\x22,\x2213.57 亿\x22],[\x224.496 亿\x22,\x224.586 亿\x22,\x224.68 亿\x22,\x224.776 亿\x22,\x224.876 亿\x22,\x224.98 亿\x22,\x225.087 亿\x22,\x225.197 亿\x22,\x225.312 亿\x22,\x225.43 亿\x22,\x225.552 亿\x22,\x225.678 亿\x22,\x225.808 亿\x22,\x225.942 亿\x22,\x226.08 亿\x22,\x226.222 亿\x22,\x226.369 亿\x22,\x226.519 亿\x22,\x226.673 亿\x22,\x226.83 亿\x22,\x226.99 亿\x22,\x227.151 亿\x22,\x227.314 亿\x22,\x227.48 亿\x22,\x227.647 亿\x22,\x227.817 亿\x22,\x227.989 亿\x22,\x228.163 亿\x22,\x228.338 亿\x22,\x228.514 亿\x22,\x228.689 亿\x22,\x228.863 亿\x22,\x229.037 亿\x22,\x229.211 亿\x22,\x229.385 亿\x22,\x229.558 亿\x22,\x229.731 亿\x22,\x229.905 亿\x22,\x2210.08 亿\x22,\x2210.25 亿\x22,\x2210.42 亿\x22,\x2210.6 亿\x22,\x2210.77 亿\x22,\x2210.94 亿\x22,\x2211.11 亿\x22,\x2211.27 亿\x22,\x2211.43 亿\x22,\x2211.59 亿\x22,\x2211.75 亿\x22,\x2211.9 亿\x22,\x2212.06 亿\x22,\x2212.21 亿\x22,\x2212.37 亿\x22,\x2212.52 亿\x22],[\x221.807 亿\x22,\x221.837 亿\x22,\x221.865 亿\x22,\x221.892 亿\x22,\x221.919 亿\x22,\x221.943 亿\x22,\x221.966 亿\x22,\x221.987 亿\x22,\x222.007 亿\x22,\x222.027 亿\x22,\x222.051 亿\x22,\x222.077 亿\x22,\x222.099 亿\x22,\x222.119 亿\x22,\x222.139 亿\x22,\x222.16 亿\x22,\x222.18 亿\x22,\x222.202 亿\x22,\x222.226 亿\x22,\x222.251 亿\x22,\x222.265 亿\x22,\x222.295 亿\x22,\x222.317 亿\x22,\x222.338 亿\x22,\x222.358 亿\x22,\x222.379 亿\x22,\x222.401 亿\x22,\x222.423 亿\x22,\x222.445 亿\x22,\x222.468 亿\x22,\x222.496 亿\x22,\x222.53 亿\x22,\x222.565 亿\x22,\x222.599 亿\x22,\x222.631 亿\x22,\x222.663 亿\x22,\x222.694 亿\x22,\x222.726 亿\x22,\x222.759 亿\x22,\x222.79 亿\x22,\x222.822 亿\x22,\x222.85 亿\x22,\x222.876 亿\x22,\x222.901 亿\x22,\x222.928 亿\x22,\x222.955 亿\x22,\x222.984 亿\x22,\x223.012 亿\x22,\x223.041 亿\x22,\x223.068 亿\x22,\x223.093 亿\x22,\x223.117 亿\x22,\x223.141 亿\x22,\x223.165 亿\x22]],\x22t\x22:[\x221960\x22,\x221961\x22,\x221962\x22,\x221963\x22,\x221964\x22,\x221965\x22,\x221966\x22,\x221967\x22,\x221968\x22,\x221969\x22,\x221970\x22,\x221971\x22,\x221972\x22,\x221973\x22,\x221974\x22,\x221975\x22,\x221976\x22,\x221977\x22,\x221978\x22,\x221979\x22,\x221980\x22,\x221981\x22,\x221982\x22,\x221983\x22,\x221984\x22,\x221985\x22,\x221986\x22,\x221987\x22,\x221988\x22,\x221989\x22,\x221990\x22,\x221991\x22,\x221992\x22,\x221993\x22,\x221994\x22,\x221995\x22,\x221996\x22,\x221997\x22,\x221998\x22,\x221999\x22,\x222000\x22,\x222001\x22,\x222002\x22,\x222003\x22,\x222004\x22,\x222005\x22,\x222006\x22,\x222007\x22,\x222008\x22,\x222009\x22,\x222010\x22,\x222011\x22,\x222012\x22,\x222013\x22],\x22n\x22:[\x22中华人民共和国\x22,\x22印度\x22,\x22美国\x22],\x22ft\x22:[\x221960 年\x22,\x221961 年\x22,\x221962 年\x22,\x221963 年\x22,\x221964 年\x22,\x221965 年\x22,\x221966 年\x22,\x221967 年\x22,\x221968 年\x22,\x221969 年\x22,\x221970 年\x22,\x221971 年\x22,\x221972 年\x22,\x221973 年\x22,\x221974 年\x22,\x221975 年\x22,\x221976 年\x22,\x221977 年\x22,\x221978 年\x22,\x221979 年\x22,\x221980 年\x22,\x221981 年\x22,\x221982 年\x22,\x221983 年\x22,\x221984 年\x22,\x221985 年\x22,\x221986 年\x22,\x221987 年\x22,\x221988 年\x22,\x221989 年\x22,\x221990 年\x22,\x221991 年\x22,\x221992 年\x22,\x221993 年\x22,\x221994 年\x22,\x221995 年\x22,\x221996 年\x22,\x221997 年\x22,\x221998 年\x22,\x221999 年\x22,\x222000 年\x22,\x222001 年\x22,\x222002 年\x22,\x222003 年\x22,\x222004 年\x22,\x222005 年\x22,\x222006 年\x22,\x222007 年\x22,\x222008 年\x22,\x222009 年\x22,\x222010 年\x22,\x222011 年\x22,\x222012 年\x22,\x222013 年\x22],\x22m\x22:{\x22fi\x22:53,\x22ci\x22:[0,1,2]}}';


    var data = JSON.parse(d);
    console.log(data);

    var left = 32 + 5 + 10,
        right = 10,
        top = 10,
        bottom = 32,
        width = 454,
        height = 220,
        xdata = data.t,
        ydata = data.v,
        line = [{
            width: 3,
            color: '#ff6949',
            opacity: 1
        },{
            width: 1,
            color: '#4b9bf9'
        },{
            width: 1,
            color: '#97d48c'
        }];


    var xaxisRange = (function() {
        var min = xdata[0], max = xdata[0];
        var xlabel = [];

        xdata.forEach(function(value, ky, index) {
            min = value < min ? value : min;
            max = value > max ? value : max;
        });
        return {
            min: min,
            max: max
        }
    })();

    var ylabel = (function() {
        var min = max = ydata[0][0];
        ydata.forEach(function(item) {
            item.forEach(function(value) {
                min = value < min ? value : min;
                max = value > max ? value : max;
            });
        });

        min = min / 100000000;
        max = max / 100000000;
    })();

    var ymax = Math.floor(max / 5) * 5 + (max % 5 == 0 ? 0 : 5),
        ymin = 0,
        xmin = xaxisRange.min,
        xmax = xaxisRange.max,
        xunit = (width - left - right)/ (xmax - xmin),
        yunit = (height - top - bottom) / (ymax - ymin);

    var lines = [],
        result = {};

    ydata.forEach(function(item, index) {
        var path = [];
        item.forEach(function(value, index) {
            var x = xunit * (xdata[index] - xmin) + left,
                y = height - (yunit * value / 100000000 + bottom),
                arr = [xdata[index], value / 100000000, x, y],
                _x = parseInt(x);

            if(_x in result) {
                result[_x].push(arr)
            }else {
                result[_x] = [arr];
            }

            path.push( x + ',' + y)
        });

        lines.push({
            d: 'M' + path.join(' '),
            color: line[index].color,
            width: line[index].width,
            opacity: line[index].opacity || 0.55
        });
    });

    // xtick
    var xlabel = [];
    xdata.forEach(function(value) {
        var x = (value - xmin) * xunit + left,
            y = height - bottom;
        if(value % 10 == 0) {
            xlabel.push('<line x1="'+ x +'" y1="'+ y +'" x2="' + x +'" y2="'+ (y + 5) +'" line-anchor="middle" stroke="#f2f2f2" stroke-width="1"></line>');
            xlabel.push('<text x="'+ x +'" y="'+ (y + 20 )+'" text-anchor="middle">'+ value +'年</text>');
        }
    });

    var ylabel = [];
    for(var i = 0; i <= ymax / 5; i ++) {
        var x = 0,
            x1 = left - 10,
            x2 = width,
            text = i * 5,
            text = text == 0 ? 0 : (text + '亿'),
            y = height - (yunit * i * 5 + bottom);

        ylabel.push('<line x1="'+ x1 +'" y1="'+ y +'" x2="' + x2 +'" y2="'+ y +'" line-anchor="middle" stroke="#f2f2f2" stroke-width="1"></line>');
        ylabel.push('<text x="'+ x +'" y="'+ (y + 8) +'">'+ text +'</text>');
    }

    var count = 0;
    var vm = new Vue({
        el: '#example',
        data: {
            lines: lines,
            xlabel: xlabel.join(''),
            ylabel: ylabel.join(''),
            circles: []
        },
        methods: {
            mousemove: function(event) {
                count ++

                if(count % 2 == 0) return;

                var me = this,
                    circles = [],
                    offsetX = event.offsetX,
                    d = result[offsetX],
                    translateX,
                    translateY;

                if(d) {
                    for(var i = 0; i < line.length; i ++) {
                        var item = line[i],
                            arr = d[i];
                            obj = {};

                        if(arr) {
                            obj.x = arr[2];
                            obj.y = arr[3];
                            obj.r = item.width + 2;
                            obj.color = item.color;
                            circles.push(obj);
                            console.log(arr[0], arr[1]);
                        }
                    }
                }

                if(!circles.length) return;
                me.circles = circles;
            },
            mouseout: function() {
                //this.circle = '';
            }
        }
    });

})(window, Vue);