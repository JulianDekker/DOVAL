$( document ).ready(function() {
    $('.features li a, .samples li a').on('click', function(e){
        e.preventDefault();
        $.ajax({url: $(this).attr("value"), success: function(result){
            console.log(result)
            if (result.keys.length == 0){
                $('.visual_graph').html("<h2 class='text-center mtop'>Please select features to visualise by clicking on them.</h2>");
            }
            var min = (1+(result.keys.length/4))*300
            console.log(min)
            $('.visual-graph').css({'min-height': min});
            $('.scripttags').html(result.script);
            $('.visual-graph').html(result.div);
            $('.visual-table').html(result.table);
        }});
        $(this).toggleClass('active')
    });
});