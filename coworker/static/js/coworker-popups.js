(function ( $ ) {
  var modalContainer = $('<div>', {class: 'col-sm-12 col-md-12 col-xs-12 pade_none world_join_out'});
  var loadModal = $('<div>', {class: 'col-sm-6 col-md-6 col-xs-6 loading-modal-content'});

  var logingModal = $('<div>', {class: 'col-sm-6 col-md-6 col-xs-6 login-modal-content'});

  var signupModal = $('<div>', {class: 'col-sm-6 col-md-6 col-xs-6 email-modal-content'});

  $.fn.initLoading = function( options ) {
    var settings = $.extend({pathLoading:"/"}, options );
    var awsUrl = 'https://coworker-media.s3.amazonaws.com/';
    loadModal.prepend($('<img>',{src:awsUrl+'template/img/log_loading.gif'}))
    modalContainer.append($('<div>', {class: 'col-sm-3 col-md-3 col-xs-3'}));
    this.append(loadModal);
    this.append(modalContainer);
    return this;
  };

  $.fn.initLogin = function( options ) {
    var settings = $.extend({pathLoading:"/"}, options );
    var awsUrl = 'https://coworker-media.s3.amazonaws.com/';
    logingModal.append($('<div>', {class: 'col-sm-12 col-md-12 col-xs-12 pade_none modal-header'})
               .append('<h2 class="signup_face"><a href="javascript:void(0)" onclick="redirectNavFB();"> <img src="'+awsUrl+'template/img/login_with_facebook.png" alt="" style="width: 325px;"></a></h2>'));
    logingModal.append('<div class="col-sm-12 col-md-12 col-xs-12 pade_none"><span class="signup_or">or</span></div>');
    logingModal.append('<div class="col-sm-12 col-md-12 col-xs-12 pade_none"><p class="signup_f"><img src="'+awsUrl+'template/img/email.png" alt="" style="margin-top: -5px;"><input id="nvl_email" placeholder="Email address"></p><p class="signup_f"><img src="'+awsUrl+'template/img/pass.png" alt="" style="margin-top: -4px;"><input id="nvl_password" type="password" placeholder="Password"></p></div>');
    logingModal.append('<div class="col-sm-12 col-md-12 col-xs-12"><div class="promise_timing_con02" style="padding-left: 30px;"><ul style="text-align:left"><li><input id="c3l" type="checkbox" value="2" name="ccc"><label for="c3l"><span>Remember Me</span>'
                       +'</label><span style="float:right;margin-right: -25%;"><a href = "#" onclick="ResetPasswordModal();" style="color:#666666 !important;">Forgot Password</a></span></li></ul></div></div>');
    logingModal.append('<div class="col-sm-12 col-md-12 col-xs-12 pade_none"><div class="pade_none signup_save_btn"><a href="javascript:void(0)" onclick="validateNavLogin();"  style="padding-left: 130px; padding-right: 130px;">Log In</a></div></div>');
    logingModal.append('<div class="col-sm-12 col-md-12 col-xs-12 pade_none"><div class="signup_member" style="text-align: left;"><span class="already_member" style="margin-left: 55px;">Don\'t have an account?&nbsp;&nbsp;</span><a href="javascript:void(0);" onclick="navLoginSignup();"><span class="login_member">Sign up</span></a></div></div>');
    modalContainer.append($('<div>', {class: 'col-sm-3 col-md-3 col-xs-3'}));
    this.append(logingModal);
    this.append(modalContainer);
    return this;
  };

  $.fn.initSignup = function( options ) {
    var settings = $.extend({pathLoading:"/"}, options );
    var awsUrl = 'https://coworker-media.s3.amazonaws.com/';
    this.append('<div class="container">'+
                '<div class="row">'+
                '<div class="col-xs-12 pade_none popup_inner">'+
                '<div class="popup" id="n_popup">'+
                  '<form  class="sign_up_form shadow">'+
                      '<h2>Join the Coworker Community</h2>'+
                      '<div class="col-xs-12 pade_none coworker_popup_inner">'+
                        '<p class="signup_f"><img style="margin-top: -5px;" alt="" src="'+awsUrl+'template/img/f_name.png"><input placeholder="First name" id="nvfirst_name"></p>'+
                        '<p class="signup_f"><img style="margin-top: -4px;" alt="" src="'+awsUrl+'template/img/f_name.png"><input placeholder="Last name" id="nvlast_name"></p>'+
                        '<p class="signup_f"><img style="margin-top: -5px;" alt="" src="'+awsUrl+'template/img/email.png"><input placeholder="Email address" id="nvemail"></p>'+
                        '<p class="signup_f"><img style="margin-top: -4px;" alt="" src="'+awsUrl+'template/img/pass.png"><input type="password" placeholder="Password" id="nvpassword"></p>'+
                        '<p class="signup_f"><input type="button" value="Sign Up"  onclick="validateNavSignup();" /></p>'+
                        '<p class="agree">By signing up I agree to Coworker\'s <a href="'+settings.pathLoading+'terms" target="_blank">Terms of Service</a> and <a href="'+settings.pathLoading+'privacy-policy" target="_blank">Privacy Policy</a></p>'+
                      '</div>'+
                      '<div class="col-xs-12 pade_none popup_bottom">'+
                        '<span>Already a member?</span> <a  href="javascript:void(0);" onclick="openNavSignupLogin();" class="login">Log In</a>'+
                      '</div>'+
                  '</form>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>');
  };

  $.fn.initNewSignup = function( options ) {
    var settings = $.extend({pathLoading:"/"}, options );
    var awsUrl = 'https://coworker-media.s3.amazonaws.com/';
    this.append('<div id="fo_target" class="col-xs-12 form_outer">'+
                  '<div class="main-white">'+
                    '<h2 id="signup_title">Join the Coworker Community</h2>'+
                    '<div class="col-xs-12 fcb_con"><a id="signup_href" onclick="redirectNavFB();" href="javascript:void(0)" ><img src="'+awsUrl+'template/img/continue_fb.png"  alt=""></a></div>'+
                    '<h3>or</h3>'+
                    '<div class="col-xs-12 msg_con"><a href="javascript:void(0)" onclick="openNavSignupForm();" ><img src="'+awsUrl+'template/img/img-msg.png"  alt=""></a></div>'+
                    '<p>By signing up I agree to Coworker\'s <a href="'+settings.pathLoading+'terms" target="_blank">Terms of Service</a> and <a href="'+settings.pathLoading+'privacy-policy" target="_blank">Privacy Policy</a></p>'+
                    '<h4>Already a member? <a onclick="navSignupLogin();" href="javascript:void(0);">Log in</a></h4>'+
                  '</div>'+
                '</div>');
    return this;
  };
  $.fn.msgSignupTitle = function() {
    this.find('#signup_title').html('You must be logged in to send a message');
    this.find('#signup_href').attr("onclick","redLogFbMsg();");
  };
  $.fn.normalSignupTitle = function() {
    this.find('#signup_title').html('Join the Coworker Community');
    this.find('#signup_href').attr("onclick","redirectNavFB();");
  };
  $.fn.validateIsEmpty = function() {
    return this.val().replace(/^\s+/g, '').length==0;
  };
  $.fn.validateUserEmail = function() {
    var re = /\S+@\S+\.\S+/;
    return !re.test(this.val());
  };
}( jQuery ));