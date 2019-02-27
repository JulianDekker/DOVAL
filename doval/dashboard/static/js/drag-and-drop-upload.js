$(function () {

  $(".js-upload-files").click(function () {
    $("#fileupload").click();
  });

  $("#fileupload").fileupload({
    dataType: 'json',
    done: function (e, data) {
      if (data.result.is_valid) {
        $('.uploadzone').toggle();

        $(".plot_opts").prepend(
          "<a href='" + data.result.url + "'>" + data.result.name + "</a>"
        )
      }
    }
  });

});
