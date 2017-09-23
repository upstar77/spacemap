$(function () {
  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
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
//
//   $("[name=tags]").select2({
//     width: 'resolve',
//     tags: true,
//     multiple: true,
//     allowClear: true,
//     ajax: {
//         url: URL,
//         dataType: 'json',
//         type: "GET",
//         quietMillis: 50,
//         data: function (term) {
//           return {
//             term: term
//           };
//         },
//         results: function (data) {
//           return {
//             results: $.map(data, function (item) {
//               return {
//                 text: item.completeName,
//                 slug: item.slug,
//                 id: item.id
//               }
//             })
//           };
//         }
//       }
//     },
//     createTag: function (params) {
//       var term = $.trim(params.term);
//
//       if (term === '') {
//         return null;
//       }
//
//       return {
//         id: term,
//         text: term,
//         newTag: true
//       }
//     }
//   });
//
//   $("[name=industries]").select2({
//     width: 'resolve',
//     tags: true,
//     multiple: true,
//     createTag: function(params) {
//       return undefined;
//     }
//   });
//
});
