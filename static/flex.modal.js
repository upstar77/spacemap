/*
 * module: flexModal
 * version: 0.1
 * author: dzung nguyen
 * email: bluesky.1289@gmail.com
 *
 * License: WTFGL
 */

(function($) {
  var defaultOptions = {
    top: "50%", // top postion of modal dialog. this is position of center of dialog
    left: "50%", // left postion of modal dialog. this is position of center of dialog
    overlay: 0.5, // transparent value for overlay layer
    events: {}, // events map for binding within dialog content
    modal: false, // show as a modal dialog ( does not close when click outside of dialog)
  };

  function ensureInit() {
    if ($('#flex-overlay').length == 0) {
      // create overlay element
      var overlay = $("<div id='flex-overlay'></div>");
      $("body").append(overlay);
    }
  }

  /*
    Hide the modal dialog
   */
  function hideModal(modal) {
    $("#flex-overlay").css({
      'display': 'none',
      opacity: 0
    });

    if (typeof modal == 'string')
      modal = $(modal);

    modal.css({
      "display": "none"
    })
  }

  function showModal(options) {
    var modal = this;
    // bind click even on overlay
    $('#flex-overlay').off();
    if (!options.modal) {
      $('#flex-overlay').on('click', function(e) {
        hideModal(modal);
      });
    }

    // calculate position of dialog
    var modal_height = this.outerHeight();
    var modal_width = this.outerWidth();

    // show overlay with animation
    $("#flex-overlay").css({
      "display": "block",
      opacity: 0
    });
    $("#flex-overlay").fadeTo(200, options.overlay);

    this.css({
      "display": "block",
      "position": "fixed",
      "opacity": 0,
      "z-index": 1000,
      "left": options.left,
      "margin-left": -(modal_width / 2) + "px",
      "top": options.top,
      "margin-top": -(modal_height / 2) + "px"
    });
    this.fadeTo(200, 1);
  }

  /*
    Show an HTML node as a dialog
    Ex: $('#popup').flexModal();
      this code will show up a modal using html content in #popup element
   */
  $.fn.flexModal = function(options) {
    ensureInit();
    options = $.extend(defaultOptions, options);

    // map events
    // click .ok : handleOK
    // handle function will be invoked when button with class .ok is clicked
    $.map(options.events, function(handler, action) {
      var els = action.split(" ");
      $(els[1]).off();
      $(els[1]).on(els[0], function(e) {
        if (handler != undefined) {
          hideModal(self);
          handler(e);
        }
      });
    });

    showModal.call(this, options);
  };

  $.fn.flexBindModal = function(options) {
    ensureInit();
    options = $.extend(defaultOptions, options);

    return this.each(function() {
      $(this).click(function(e) {

        var modalId = $(this).attr("data-toggle");
        var modal = $(modalId);

        // bind click even on overlay
        $('#flex-overlay').off();
        $('#flex-overlay').on('click', function(e) {
          hideModal(modalId);
        });

        // find all element in dialog which has attribute data-event
        // data-trigger="click"
        // data-event="onClickFunction"
        // onClickFunction function will be invoked when element is clicked
        modal.find('[data-event]').off();
        modal.find('[data-event]').each(function() {
          var evtName = $(this).attr('data-trigger');

          $(this).on(evtName, function(e) {
            var eventHandler = $(this).attr('data-event');
            if (eventHandler != "" && typeof window[eventHandler] == 'function') {
              hideModal(modal);
              window[eventHandler](e);
            }
          })
        });

        showModal.call(modal, options);
        e.preventDefault();
      });
    });
  }
})(jQuery);
