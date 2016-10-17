/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-17 23:11:11
 * @version $Id$
 */

function doSvgGraph() {
        $(function() {
            var x_Min, x_Max, gwidth, gheight, loaded = false, g_Width;
            // If set as class in HTML, complains that jQuery DNE
            $("#outputResizer").addClass("ui-widget-content");
            drawGraphs = function() {
                var xGrid, yGrid;
                contentWidth = content.getBoundingClientRect().width;
                if (!loaded) {
                    gwidth_orig = Number($("#gwidth").val());
                    gwidth = Math.min(contentWidth, Number($("#gwidth").val()));
                    $("#outputResizer").css("width", (gwidth - 15) + "px");
                    if (gwidth < gwidth_orig) {
                        $("#gwidth").attr("value", $("#outputResizer").width());
                        $("#gheight").attr("value", $("#outputResizer").height());
                    }
                    loaded = true;
                } else if (Number($("#gwidth").val()) && (Number($("#gheight").val()))) {
                    gwidth = Number($("#gwidth").val());
                    $("#asvg1").attr("width", gwidth);
                }
                $("#asvg1").attr("width", (gwidth - 30));
                gheight = Number($("#gheight").val());
                $("#asvg1").attr("height", gheight);
                if ($('#equalScaling').is(':checked')) {
                    $("#yMax").attr("value", "");
                    $("#yMax").attr("disabled", "disabled");
                    yMax = null ;
                } else {
                    $("#yMax").removeAttr("disabled");
                    $('#equalScaling').prop('checked', false);
                    if (!Number($("#yMax").val())) {
                        yMax = Math.round(Number($("#yMin").val()) + 12) + 0.3;
                    } else {
                        yMax = Number($("#yMax").val());
                    }
                }
                $("#yMax").val(yMax);
                boardID = "asvg1";
                if (Number($("#xMin").val())) {
                    xMin = Number($("#xMin").val());
                } else {
                    xMin = -5;
                    $("#xMin").val(xMin);
                }
                if (Number($("#xMax").val())) {
                    xMax = Number($("#xMax").val());
                } else {
                    xMax = 5;
                    $("#xMax").val(xMax);
                }
                if (Number($("#yMin").val())) {
                    yMin = Number($("#yMin").val());
                } else {
                    yMin = -5;
                    $("#yMin").val(yMin);
                }
                if ($("#yMax").val() !== "") {
                    yMax = Number($("#yMax").val());
                }
                padding = 17;
                initBoard(boardID, xMin, xMax, yMin, yMax);
                // For equally scaled, only define xMin, xMax, yMin
                if (Number($("#xGrid").val())) {
                    xGrid = Number($("#xGrid").val());
                } else {
                    xGrid = 1;
                    $("#xGrid").val(xGrid);
                }
                if (Number($("#yGrid").val())) {
                    yGrid = Number($("#yGrid").val());
                } else {
                    yGrid = 1;
                    $("#yGrid").val(yGrid);
                }
                axes(xGrid, yGrid, "labels", xGrid, yGrid);
                fill = "none";
                strokewidth = 1.5;
                stroke = "#165a71";
                fn1 = $("#function1").val();
                if (fn1 !== '') {
                    plot(fn1, xMin, xMax);
                    // fun,x_min,x_max,points,id
                }
                stroke = "#cc00cc";
                fn2 = $("#function2").val();
                if (fn2 !== '') {
                    plot(fn2, xMin, xMax);
                }
            }
            drawGraphs();
            $('#equalScaling').change(function() {
                queryStr = $("form[name=\"makeGraph\"]").serialize();
                $("#url").html(" <a href=\"" + window.location.pathname + "?" + queryStr + "\">Permanent link to your graph</a>");
                $("#button").css("marginRight", 0);
                drawGraphs();
            });
            $("#button").click(function(event) {
                event.preventDefault();
                drawGraphs();
                $("#outputResizer").css("width", gwidth);
                $("#outputResizer").css("height", gheight);
                queryStr = $("form[name=\"makeGraph\"]").serialize();
                $("#url").html(" <a href=\"" + window.location.pathname + "?" + queryStr + "\">Permanent link to your graph</a>");
                $("#button").css("marginRight", 0);
            });
            $("#outputResizer").resizable({
                resize: function(event, ui) {
                    // resizing = true;
                    drawGraphs();
                    //resizing = false;
                    if ($("#outputResizer").width() > 700) {
                        $("#outputResizer").css("width", "700");
                    }
                    if ($("#outputResizer").height() > 600) {
                        $("#outputResizer").css("height", "600");
                    }
                    $("#gwidth").attr("value", $("#outputResizer").width());
                    $("#gheight").attr("value", $("#outputResizer").height());
                    queryStr = $("form[name=\"makeGraph\"]").serialize();
                    $("#url").html(" <a href=\"" + window.location.pathname + "?" + queryStr + "\">Permanent link to your graph</a>");
                    $("#button").css("marginRight", 0);
                }
            });
        });
    }