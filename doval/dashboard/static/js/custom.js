var zobj = null
var xobj = null
var resulting = null
var canvasX
var extraOptions = {}
var subset = []
var checkedsubset = {}

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

    $('.subst-btn').on('click', function(){
        //let selected = []
        if (!(isEmpty(resulting))){

            df = JSON.parse(resulting.df)
            visdatasize(df.index.length)
            $('#select-result').empty()
            for (i=0; i<df.index.length; i++){
                $('#select-result').append("<div class='smp-idx'>"+df.data[i][0]+"<span class='remove' value='"+i+"'>x</span></div>")
            }
            $('.resultlen').html(df.index.length)
            subset = []

            $('.smp-idx .remove').off('click')
            $('.smp-idx .remove').on('click', function(){
                subset = df.index
                var idx = $(this).attr('value')
                subset.splice(binarySearch(subset, 0, subset.length -1, parseInt(idx)), 1)

                $(this).parent().remove()
                $('.bar[value='+idx+']').toggleClass('ui-selected')
                $('.resultlen').html(subset.length)
            })

            $('.samp-n').html(df.index.length)
            $( ".selectionvis" ).selectable({
              stop: function() {
                    subset = [];
                    $('#select-result').empty()
                    $( ".ui-selected", this ).each(function() {
                      var index = $(this ).attr( 'value' );
                      subset.push(index);
                      $('.resultlen').html(subset.length)
                    });
                    for (i=0; i<subset.length; i++){
                        $('#select-result').append("<div class='smp-idx'>"+df.data[subset[i]][0]+"<span class='remove' value='"+subset[i]+"'>x</span></div>")
                    }
                    $('.smp-idx .remove').off('click')
                    $('.smp-idx .remove').on('click', function(){
                        var idx = $(this).attr('value')
                        subset.splice(binarySearch(subset, 0, subset.length -1, parseInt(idx)), 1)
                        $(this).parent().remove()
                        $('.bar[value='+idx+']').toggleClass('ui-selected')
                        $('.resultlen').html(subset.length)
                        console.log(subset)
                    })
                  }
            });
            if (objectArrayValNotEmpty(extraOptions, 'groupingFactors')){
                var outhtml = ''
                $('.p-subst').html('')
                for (i in extraOptions['groupingFactors']){
                    reqkey(extraOptions['groupingFactors'][i])
                }
            }
        }
    })

    $('.rnd-input').change(function(){
            subset = doSelect()
    })

    $('.rnd-input').keypress(function(e){
        var keycode = (e.keyCode ? e.keyCode : e.which)
        if (keycode == '13') {
            subset = doSelect();
        }
    })

    $('.update-subset').on('click', function(){
        if ($('.p-subst').length > 0){
            var constraints = {}
            $.each($(".p-subst-group"), function() {
                var constr = $(this).find('input:checked')
                var list = []
                $.each(constr, function(){
                    list.push($(this).val())
                })
                var name = $(this).find('input').attr('name')
                constraints[name] = list
            })
        }
        if (subset || (constraints.length > 0)){
            updateSubset(matchRelativeID(subset), constraints, type)
        }
    })

    $('.btn.save-subset').click(function(){
        $('.save-subset .btn-context').toggle();
    })

    $('.save-subset .btn-context').mouseleave(function(){
        $('.save-subset .btn-context').hide()
    })

    $('.reset-sbst').on('click', function(){
        resetDF(type)
        $('.checkpair input').checked = true
    })

    $('.context').click(function(){
        var savetype = $(this).attr('value')
        if ($('.p-subst').length > 0){
            var constraints = {}
            $.each($(".p-subst-group"), function() {
                var constr = $(this).find('input:checked')
                var list = []
                $.each(constr, function(){
                    list.push($(this).val())
                })
                var name = $(this).find('input').attr('name')
                constraints[name] = list
            })
        }
        if (subset || (constraints.length > 0)){
            saveSubset(matchRelativeID(subset), constraints, savetype)
        }
    })



    $('.pivot-apply').on('click', function(){
        var datalist = []
        $.each($(".label-select"), function(){
            datalist.push($(this).find(':selected').val())
        })
        pivotTable(datalist, type)
    });

    function doSelect(){
        $('.selectionvis').find('.bar').removeClass('ui-selected')
        var n = parseInt($('.rnd-input').val())
        if (n > df.data.length){
            n = df.data.length
            $('.rnd-input').val(n)
        }
        $('.resultlen').html(n)
        selected = []
        $('#select-result').empty()
        for (i=0; i<n; i++){
            index = getRndInteger(0, df.data.length)
            while (selected.includes(index)){
                index = getRndInteger(0, df.data.length)
            }
            selected.push(index)
        }
        selected = selected.sort()
        for (i=0; i<selected.length; i++){
            $('#select-result').append("<div class='smp-idx'>"+df.data[selected[i]][0]+"<span class='remove' value='"+selected[i]+"'>x</span></div>")
            $('.selectionvis').find('.bar[value='+selected[i]+']').addClass('ui-selected')
        }
        $('.smp-idx .remove').off('click')
        $('.smp-idx .remove').on('click', function(){
            var idx = $(this).attr('value')
            console.log(selected)
            selected.splice(binarySearch(selected, 0, selected.length -1, parseInt(idx)), 1)
            $(this).parent().remove()
            $('.bar[value='+idx+']').toggleClass('ui-selected')
            $('.resultlen').html(selected.length)
        })
        return selected
    }



    $(window).on('resize', function(){
        sizeWindow()
    })

});

const arrayColumn = (arr, n) => arr.map(x => x[n]);

function download(dataurl, filename) {
  var a = document.createElement("a");
  a.href = dataurl;
  a.setAttribute("download", filename);
  a.click();
  return false;
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function objectIndexExists(obj, index){
     if (key in obj){
        return true
     }
     return false
}

function objectArrayValExists(obj, key, arrval){
    if (key in obj){
        if (obj[key].indexOf(arrval) > -1){
            return true
        }
     }
     return false
}

function objectArrayValNotEmpty(obj, key){
    if (key in obj){
        try{
            if (obj[key].length > 0){
                return true
            }
        }
        catch{
            return false
        }
     }
     return false
}

function binarySearch(arr, l, r, x){
    /**
        Searches for x in an array using the binary search algorithm.
        Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the
        whole array. If the value of the search key is less than the item in the middle of the interval,
        narrow the interval to the lower half. Otherwise narrow it to the upper half.
        Repeatedly check until the value is found or the interval is empty.
    **/
    if (r >= l){
        mid = Math.round(l + (r - l)/2)
        if (arr[mid] == x){
            return mid
        }
        else if(arr[mid] > x){
            return binarySearch(arr, l, mid-1, x)
        }
        else{
            return binarySearch(arr, mid + 1, r, x)
        }
    }
    else{
        return -1
    }
}

function matchRelativeID(arr){
    matches = []
    df = JSON.parse(resulting.df)
    try{
        for (i=0;i<arr.length;i++){
            matches.push(df.data[arr[i]][0])
        }
    }
    catch{
        return
    }
    return matches
}

function boxplot(df, keys, type){
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
    plotstyles['summaryType'] = "iqr"
    plotstyles['groupingFactors']= [
        'No group'
    ]
    plotstyles.smpLabelRotate = 0

    for (i in extraOptions){
        plotstyles[i] = extraOptions[i]
    }

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

    for (i in extraOptions){
        plotstyles[i] = extraOptions[i]
    }

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

    for (i in extraOptions){
        plotstyles[i] = extraOptions[i]
    }

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
      showDataTable: false,
      maxDOENumber: len-1,
      lineThickness: 1.5,
      maxCols: 5,
      maxRows: 20,
      //showTransition: true
      }
    return obj
}

function buildCanvasXpress(xobj, yobj, styling, zobj=null){
    //'''Builds the canvasXpress plot'''
    sizewidth = sizeWindow()
    $('.canvascont').html("<canvas id='canvas' width='"+ ((sizewidth[1]/100)*60).toString() +"' height='"+ (sizewidth[0]-90).toString() +"' aspectRatio='1:1' responsive='true'></canvas>")
    if (canvasX){
        delete canvasX
    }
    canvasX = new DUVALCanvasXpress("canvas", {
      y: yobj,
      x: xobj,
      z: zobj
    }, styling, false);
    $('#canvas-cX-DataTable').css({'left': sizewidth[0]-75, 'top' : 0-(sizewidth[0]-85)})
    canvasX.triggerDataLoaded = function(n){
    }


}


function typecheck(df, keys, type){
    //'''Checks what type of plot should be the standarddisplay'''
    switch (type){
        case "Boxplot":
            return boxplot(df ,keys, type)
        break;
        case "Heatmap":
            return heatmap(df, keys, type)
        break;
        case "Scatter":
            return scatter(df, keys, type)
        break;
    }

}

function reqkey(key, callBackFn){
    /*'''
    Requests the nominal values of a key from the dataset.
    '''*/
    $.ajax({
    url: '/annotate/nominalkey',
    data: {'key': JSON.stringify(key)},
    success: function(result){
        outhtml = ""
        outhtml += "<div class='p-subst-group'><div class='p-subst-title'>"+key+"</div><div class='checkgroup'>"
        keys = JSON.parse(result.keys)
        for (subkey in keys){
            var checked = ''
            if (isEmpty(checkedsubset)){
                checked = 'checked'
            }
            else{
                if (key in checkedsubset){
                    if (checkedsubset[key].indexOf(keys[subkey]) == -1){
                        checked = 'checked'
                    }
                }
                else{
                    checked = 'checked'
                }
            }
            outhtml += "<div class='checkpair'><input type='checkbox' value='"+keys[subkey]+"' name='"+ key +"' "+checked+">"+keys[subkey]+'</div>'
        }
        outhtml += "</div></div>"
        $('.p-subst').append(outhtml)
        $('.p-subst-group').find("input[type='checkbox']").off('change')
        $('.p-subst-group').find("input[type='checkbox']").on('change', function(){
            if (!(checkedsubset[$(this).attr('name')])){
                checkedsubset[$(this).attr('name')] = []
            }
            if ($(this).is(':checked')){
                var popindex = checkedsubset[$(this).attr('name')].indexOf($(this).val());
                if (popindex > -1) {
                   checkedsubset[$(this).attr('name')].splice(popindex, 1);
                }
            }
            else{
                checkedsubset[$(this).attr('name')].push($(this).val())
            }

            console.log(checkedsubset)
        })
    }
    });
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
            if (result.datatable){
                $('.d-table').html(result.datatable)
            }
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

function updateSubset(samps, constraints, type){
    samps = JSON.stringify(samps)
    constraints = JSON.stringify(constraints)
    var token = $('.token')[0].innerHTML
    $.ajax({
        method: 'POST',
        url: '/annotate/subset',
        data: {
            'subset': samps,
            'subvar': constraints,
            csrfmiddlewaretoken: token
        },
        traditional: true,
        success: function(result){
            $('.d-table').html(result.datatable)
            resulting = result
            typecheck(result.df ,result.keys, type)
            $('.p-table').html('')
            $('.p-table').html(result.pivottable)
            $('.group-item').on('click', function(){
                if ($(this).next().hasClass('cat-group')){
                    $(this).next().toggle();
                }
            });
        }
    });
}

function saveSubset(samps, constraints, type){
    samps = JSON.stringify(samps)
    constraints = JSON.stringify(constraints)
    subsettype = JSON.stringify(type)
    var token = $('.token')[0].innerHTML

    $.ajax({
        method: 'POST',
        url: '/annotate/browsersave',
        data: {
            'subset': samps,
            'subvar': constraints,
            'subsettype': subsettype,
            csrfmiddlewaretoken: token
        },
        traditional: true,
        success: function(result){
            download('data:text/'+type+','+result.filecontent, result.filename)
        }
    });
}

function resetDF(type){
    $.ajax({
        url: '/annotate/resetdataset',
        traditional: true,
        success: function(result){
            $('.d-table').html(result.datatable)
            resulting = result
            typecheck(result.df ,result.keys, type)
            $('.p-table').html('')
            $('.p-table').html(result.pivottable)
            $('.group-item').on('click', function(){
                if ($(this).next().hasClass('cat-group')){
                    $(this).next().toggle();
                }
            });
            console.log(result)
    }});
}

function pivotTable(data, type){
    $.ajax({
        url: '/annotate/pivot',
        data: {'data': JSON.stringify(data)},
        success: function(result){
            $('.p-table').html('')
            $('.p-table').html(result.pivottable)
            canvasX.groupingFactors = []
            for (i=0; i<result.pivotkey.length;i++){
                canvasX.modifySampleGroups(result.pivotkey[i])
            }
            if (result.pivotkey.length > 0){
                extraOptions['groupingFactors'] = result.pivotkey
            }
            else{
                delete extraOptions.groupingFactors
                typecheck(resulting.df ,resulting.keys, type)
            }

            $('.group-item').on('click', function(){
                if ($(this).next().hasClass('cat-group')){
                    $(this).next().toggle();
                }
            });
            $('.d-table').html(result.datatable);
        }
    });
}

function exportJSON(json){
    if (!(json == null)){
        vars = JSON.stringify(json)
        var token = $('.token')[0].innerHTML
        $.ajax({
            method: 'POST',
            url: '/annotate/export',
            data: {
                'expJSON': vars,
                csrfmiddlewaretoken: token
            },
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

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function visdatasize(size){
    $('#ex2').modal().ready(function(){
        var selectionwidth = ($('.selectionvis').width()/size)
        $('.selectionvis').html('')
        for (i=0; i<size; i++){
            $('.selectionvis').append(`<div class='bar' value=${i}></div>`)
        }
        $('.bar').css({'width':selectionwidth+'px', 'height':'50px'})
        $('.bar').toggleClass('ui-selected')
    })

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

  consolelogthis = function (){
        console.log(console.log(this.groupingFactors))
        //this.groupingFactors = ['Class']
        //this.groupSamples(this.groupingFactors, false, false, false, true)
        //this.toggleAttribute('xAxisShow')
  }
}