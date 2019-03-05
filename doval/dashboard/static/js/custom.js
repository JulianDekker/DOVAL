$( document ).ready(function() {
    $('.samples li a, .features li a').on('click', function(e){
        e.preventDefault();
        $.ajax({url: $(this).attr("href"), success: function(result){
            console.log(result)
        }});
        $(this).toggleClass('active')
    });
});