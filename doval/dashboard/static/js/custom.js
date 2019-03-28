var zobj = null
var xobj = null
var resulting = null
var canvasX

$( document ).ready(function() {
    var clicklist = []
    var type = 'Boxplot'

    $('.features li a, .samples li a').on('click', function(e){
        e.preventDefault();
        var clicked_element = $(this)
        if (!(clicked_element.hasClass('in'))){
            clicklist.push(clicked_element);
            clicked_element.addClass('in')
        }
        else{
            clicked_element.find('.inline-marker').html()
            clicked_element.find('.inline-marker').removeClass('visible')
            clicklist.pop(clicked_element)
            clicked_element.removeClass('in')
        }
        i = 0
        for (element in clicklist){
            element = clicklist[element];
            if (!(i == 0)){
                if (element.hasClass('in')){
                    element.find('.inline-marker').addClass('visible');
                    element.find('.inline-marker').html(i);
                }
            }
            i++;
        }
        if (clicked_element.hasClass('msr')){
            if ($('.active').length == 1){
                clicked_element.toggleClass('active')
            }
        }
        else{
            clicked_element.toggleClass('active')
        }
    });

    $('.btn-opt').on('click', function(){
        type = $(this).attr('type')
        if ($('.active').length > 0){
            multirequest(type)
        }
    });

    $('.update-vis').on('click', function(){
        multirequest(type, activeSelect($('.features')))
    })

    $('.funct').on('click', function(){
        selected = activeSelect($('.features'))
        if (selected.length > 0){
            $('.modal .save-anot').css({'display' : 'block'})
            $('.modal .annotate-fields').html('')
            for (i in selected){
                var input = `<div class='row'><label>${selected[i]}</label><input type=text description=${selected[i]}></input></div>`
                $('.modal .annotate-fields').append(input)
            }
            $('.save-anot').on('click', function(){
                valuelist = []
                parlist = $('.modal .annotate-fields').children()
                for (i=0;i<parlist.length;i++){
                    valuelist.push($(parlist[i]).find('input')[0].value)
                }
                zobj = {
                    annotation: valuelist
                }
                multirequest(type, activeSelect($('.features')))
            })
        }
        else{
            var input = "<div class='modal-txt'>No features selected.</div>"
            $('.modal .annotate-fields').html(input)
            $('.modal .save-anot').css({'display' : 'None'})
        }
    })

    $(window).on('resize', function(){
        sizeWindow()
    })

});

const arrayColumn = (arr, n) => arr.map(x => x[n]);

function boxplot(df, key, type, zobj=null){
    //'''Builds the components for a boxplot from a dataset and displays sends them to the builder function'''

    var key = key[0]
    var obj = JSON.parse(df);
    yobj = {}
    yobj['smps'] = obj.index
    yobj['data'] = [arrayColumn(obj.data, obj.columns.indexOf(key))]
    yobj['vars'] = [key]

    plotstyles = standartstyling()
    plotstyles['title']= `${type} of ${key}`,
    plotstyles['graphOrientation'] = "vertical"
    plotstyles['graphType'] = type
    plotstyles['groupingFactors']= [
        "No group"
    ]
    plotstyles['summaryType'] = "iqr"

    if (zobj){
        buildCanvasXpress(create_annotations(obj, [key]), yobj, plotstyles, zobj)
    }
    else{
        buildCanvasXpress(create_annotations(obj, [key]), yobj, plotstyles)
    }
}

function lineplot(df, keys, type){
    //'''Builds the components for a lineplot from a dataset and displays sends them to the builder function'''

    sizeWindow()
    var obj = JSON.parse(df)
    var dataset = []
    for (i in keys){
        dataset.push([])
    }
    for (i=0; i < obj.data.length; i++){
        for (key in keys){
            dataset[key].push(obj.data[i][obj.columns.indexOf(keys[key])])
        }
    }
    //console.log(keys)
    yobj = {
        smps: arrayColumn(obj.data, 0), //y2
        data: dataset, //y3
        vars: keys, //y1
    }
    plotstyles = standartstyling(obj.columns.length)
    plotstyles['title']= `${type} of ${keys}`,
    plotstyles['graphOrientation'] = "vertical"
    plotstyles['graphType'] = type
    plotstyles['summaryType'] = "raw"
    plotstyles['lineType'] = "spline"
    plotstyles.smpLabelRotate = 0

    if (zobj){
        buildCanvasXpress(create_annotations(obj, keys), yobj, plotstyles, zobj)
    }
    else{
        buildCanvasXpress(create_annotations(obj, keys), yobj, plotstyles)
    }
}

function scatter(df, keys, type){
    //'''Builds the components for a scatterplot from a dataset and displays sends them to the builder function'''

    sizeWindow()
    var obj = JSON.parse(df)
    var dataset = []
    for (i=0; i < obj.data.length; i++){
        dataset.push([obj.data[i][obj.columns.indexOf(keys[0])], obj.data[i][obj.columns.indexOf(keys[1])], obj.data[i][obj.columns.indexOf(keys[2])]])
    }
    //console.log(dataset)
    yobj = {
        smps: keys, //y2
        data: dataset, //y3
        vars: arrayColumn(obj.data, 0), //y1
    }
    plotstyles = standartstyling(obj.columns.length)
    plotstyles['title']= `${type} of ${keys}`,
    plotstyles['graphOrientation'] = "vertical"
    plotstyles['graphType'] = 'Scatter2D'//type
    plotstyles['summaryType'] = "raw"
    plotstyles.smpLabelRotate = 0
    //plotstyles.scatterPlotMatrix = true

    if (xobj){
        buildCanvasXpress(xobj, yobj, plotstyles, createSingleAnnotations(obj, keys))
    }
    else{
        buildCanvasXpress([], yobj, plotstyles, createSingleAnnotations(obj, keys))
    }
}

function heatmap(df, keys, type){
    //'''Builds the components for a lineplot from a dataset and displays sends them to the builder function'''

    sizeWindow()
    var obj = JSON.parse(df)
    dataset = []
    for (key in keys){
        //console.log(arrayColumn(obj.data, obj.columns.indexOf(keys[key])))
        dataset = dataset.concat([arrayColumn(obj.data, obj.columns.indexOf(keys[key]))])
    }
    yobj = {
        smps: arrayColumn(obj.data, 0), //y2
        data: dataset, //y3
        vars: keys, //y1
    }
    plotstyles = standartstyling(obj.columns.length)
    plotstyles['title']= `${type} of ${keys}`,
    plotstyles['graphOrientation'] = "vertical"
    plotstyles['graphType'] = type
    plotstyles['summaryType'] = "raw"
    plotstyles['heatmapIndicatorHeight'] = 60
    plotstyles['heatmapIndicatorHistogram'] = true
    plotstyles['showHeatmapIndicator'] = true
    plotstyles.smpLabelRotate = 0
    if (zobj){
        buildCanvasXpress(create_annotations(obj, keys), yobj, plotstyles, zobj)
    }
    else{
        buildCanvasXpress(create_annotations(obj, keys), yobj, plotstyles)
    }
}

function createSingleAnnotations(obj, keys){
    zobj = {}
    for (i in obj.index){
        for (c in obj.columns){
            //if (!(keys.includes(obj.columns[c]))){
            zobj[obj.columns[c]] = arrayColumn(obj.data, c)
            //}
        }
    }
    return zobj
}

function create_annotations(obj, keys){
    //'''creates an object with all columns in the dataset in format variable: [value, value, ..]'''

    xobj = {}
    for (i in obj.columns){
        if (!keys.includes(obj.columns[i])){
            xobj[obj.columns[i]] = arrayColumn(obj.data, i)
        }
    }
    xobj["No group"] = Array(obj.data.length).fill("No group")
    return xobj
}

function standartstyling(len){
    //'''Returns an object containing standard functionality for plots'''

    obj = {
      axisAlgorithm: "rPretty",
      axisTickScaleFontFactor: 1.0,
      axisTitleFontStyle: "bold",
      axisTitleScaleFontFactor: 1.0,
      background: "white",
      backgroundType: "window",
      backgroundWindow: "#E5E5E5",
      barLollipopOpen: false,
      colorScheme: "cx",
      confidenceIntervalColor: "rgb(50,50,50)",
      fitLineStyle: "solid",
      guides: "solid",
      guidesColor: "white",
      "layoutConfig": [],
      saveFilename: true,
      showLegend: true,
      smpLabelRotate: 90,
      smpLabelScaleFontFactor: 1.8,
      smpTitleFontStyle: "bold",
      smpTitleScaleFontFactor: 1.8,
      standardDeviationType: "unbiased",
      swimHigh: false,
      xAxis2Show: false,
      xAxisMinorTicks: false,
      xAxisTickColor: "white",
      showDataTable: true,
      maxDOENumber: len-1,
      lineThickness: 1.5,
      maxCols: 5,
      maxRows: 20,
      showTransition: true
      }
    return obj
}

function buildCanvasXpress(xobj, yobj, styling, zobj=null){
    //'''Builds the canvasXpress plot'''
    sizewidth = sizeWindow()
    $('.canvascont').html("<canvas id='canvas' width='"+ (sizewidth[0]-90).toString() +"' height='"+ (sizewidth[0]-90).toString() +"' aspectRatio='1:1' responsive='true'></canvas>")
    canvasX = new DUVALCanvasXpress("canvas", {
      y: yobj,
      x: xobj,
      z: zobj
    }, styling, false);
    console.log(canvasX)
    $('#canvas-cX-DataTable').css({'left': sizewidth[0]-75, 'top' : 0-(sizewidth[0]-85)})
    //console.log(canvasX.geo)
    //console.log(canvasX.saveRemote('webService', '1', canvasX ))
    //customsave(canvasX)
    canvasX.triggerDataLoaded = function(n){
        console.log(canvasX.getSaveJson())
    //    console.log('I control this now')
    }


}


function typecheck(df, keys, type){
    //'''Checks what type of plot should be the standarddisplay'''

    switch (type){
        case "Boxplot":
            return boxplot(df ,keys, type)
        break;
        case "Line":
            return lineplot(df ,keys, type)
        break;
        case "Heatmap":
            return heatmap(df, keys, type)
        break;
        case "Scatter":
            return scatter(df, keys, type)
        break;
    }

}

function request(type, attr=null){
    //'''Sends and recieves AJAX requests'''

    if (!(attr==null)){
        var clicked_element = attr
        $.ajax({url: attr.attr('value'), success: function(result){
            resulting = result
            typecheck(result.df ,result.keys, type)
        }});
        attr.toggleClass('active')
    }
    else{
        if (resulting){
            typecheck(resulting.df, resulting.keys, type)
        }
        else{
            throw 'error in request function. resulting var does not exist or is null.'
        }
    }
}

function multirequest(type, list=null){
    if (!(list == null)){
        list = JSON.stringify(list)
        $.ajax({
        url: '/annotate/update',
        data: {'values': list},
        traditional: true,
        success: function(result){
            resulting = result
            typecheck(result.df ,result.keys, type)
        }});
    }
    else{
        if (resulting){
            typecheck(resulting.df, resulting.keys, type)
        }
        else{
            throw 'error in request function. resulting var does not exist or is null.'
        }
    }
}

function tableUpdater(vars, samps){
    if (!(vars == null) || !(samps == null)){
        vars = JSON.stringify(vars)
        samps = JSON.stringify(samps)
        $.ajax({
            url: '/annotate/ddddddd',
            data: {'values': vars},
            traditional: true,
            success: function(result){
                console.log('dddasdsadasdasdaddasdasdads')
            }
        });
    }
    else{
        throw 'error in tableupdate function. vars or samps does not exist or is null.'
    }
}

function export(json){
    if (!(vars == null) || !(samps == null)){
        vars = JSON.stringify(json)
        $.ajax({
            url: '/annotate/export',
            data: {'expJSON': vars},
            traditional: true,
            success: function(result){
                console.log('data send, response: ' + result.result)
            }
        });
    }
    else{
        throw 'error in tableupdate function. vars or samps does not exist or is null.'
    }
}

function sizeWindow(){
    //'''Resizes graph amd container of graph'''

    optsHeight = $('.plot_opts').outerHeight()
    docHeight = $(document).height()
    btnHeight = $('.btn-upload').outerHeight()
    $('.visual-graph').height(docHeight-optsHeight-btnHeight-90)
    graphwidth = $('.visual-graph').width()
    return [docHeight-optsHeight-btnHeight, graphwidth]
}

function activeSelect(container){
    elements = container.find('.active')
    selectlist = []
    for (i=0; i < elements.length; i++){
        selectlist.push($(elements[i]).attr('value'))
    }
    return selectlist
}

function findAttr(container, attr){
    elements = container.children()
    selectlist = []
    for (i=0; i < elements.length; i++){
        selectlist.push($(elements[i]).attr(attr))
    }
    console.log(elements)
    return selectlist
}

class DUVALCanvasXpress extends CanvasXpress{
  getSaveJson = function(t) {
        return function(e, f, p) {
            t.removeMenus();
            t.resetConfigurator(e);
            var flnm = f ? f + ".json" : t.saveFilename ? t.saveFilename + ".json" : "cX-" + t.target + ".json";
            flnm = flnm.replace(/.json.json$/, ".json");
            CanvasXpress.stack[t.target].client = CanvasXpress.factory.client;
            CanvasXpress.stack[t.target].clientIP = CanvasXpress.geo;
            var obj;
            if (p) {
                obj = t.prettyJSON({
                    config: CanvasXpress.stack[t.target].config,
                    afterRender: CanvasXpress.stack[t.target].afterRender || []
                })
            } else {
                obj = t.prettyJSON(CanvasXpress.stack[t.target])
            }
            return obj
        }
    }(this);
}