$( document ).ready(function() {
    $('.features li a, .samples li a').on('click', function(e){
        e.preventDefault();
        $.ajax({url: $(this).attr("value"), success: function(result){
            console.log(result.div)
            if (result.keys.length == 0){
                $('.visual_holder').html("<h2 class='text-center mtop'>Please select features to visualise by clicking on them.</h2>");
                console.log('test')
            }
            var min = (1+(result.keys.length/4))*300
            console.log(min)
            $('.visual_holder').css({'min-height': min});
            $('.scripttags').html(result.script);
            $('.visual_holder').html(result.div);
        }});
        $(this).toggleClass('active')
    });
});