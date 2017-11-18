$(function () {
    $.urlParam = function(name, url){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url || window.location.href);
        if (results==null){
           return null;
        }
        else{
           return decodeURI(results[1]) || 0;
        }
    };

  $.ajaxSetup({
    beforeSend: function (xhr, settings) {
      function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }
        return cookieValue;
      }

      if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
        // Only send the token to relative URLs i.e. locally.
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
      }
    }
  });


   $(".auth-forms").submit(function(e) {
      e.preventDefault();
      var $form = $(this);
      $.ajax({
        'url' : $form.attr("action"),
        'type' : 'POST',
        'data' : $form.serialize(),
        'success' : function(result){
          if (result.errors) {
            var value = result.errors
            var blkstr = [];
            $.each(value, function(idx2,val2) {
              var str = idx2 + ":" + val2;
              blkstr.push(str);
            });
            alert(blkstr.join(", "));
          } else {
            window.location.href = result.location;
          }
        }
      }).error(function(jqXHR, textStatus, errorThrown) {
      });
    });

});


