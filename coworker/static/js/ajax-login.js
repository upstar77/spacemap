function isEmpty(str){
  return str.replace(/^\s+/g, '').length==0;
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validateLabLogin() {
  var xemail = jQuery('#nvl_email').val();
  var pass   = jQuery('#nvl_password').val();
  if (isEmpty(xemail)){
      alert('Email is required!');
  } else if (!validateEmail(xemail)){
      alert('Invalid email!');
  } else if (isEmpty(pass)){
      alert('Password is required!');
  } else {
    jQuery.ajax({
        type: "POST",
        url : labAjax.url,
        data: { 'nonce' : labAjax.lg_ce, 'action':'lab_wp_login','log':xemail,'pwd':pass,'redirect_to':labAjax.rx_to},
        dataType : "json",
        success: function(msg){
          if(msg.lg=='FAIL'){
            alert(msg.message);
          } else {
            if(msg.cwLogin){
              jQuery.ajax({
                'url'  : labAjax.coworker+"lab_login/"+msg.l_key,
                'type' : "GET", 
                'data' : {},
                'success' : function(data){
                  window.location.href = msg.r_to;
                }
              });
            } else {
              window.location.href = msg.r_to;
            }
          }
        },
    });
  }
}
function validateNavSignup() {
  var f_name = jQuery('#nvfirst_name').val();
  var l_name = jQuery('#nvlast_name').val();
  var xemail = jQuery('#nvemail').val();
  var pass   = jQuery('#nvpassword').val();
  var promotions = 0;
  if (isEmpty(f_name)){
      alert('First Name is required!');
  } else if (isEmpty(l_name)){
      alert('Last Name is required!');
  } else if (isEmpty(xemail)){
      alert('Email is required!');
  } else if (!validateEmail(xemail)){
      alert('Invalid email!');
  } else if (isEmpty(pass)){
      alert('Password is required!');
  } else {
    jQuery.ajax({
      'url' : labAjax.coworker+'lab-validate-signup',
      'type' : 'POST',
      'dataType': 'json',
      'data' : {'form_signup':1, 'fname' : f_name, 'lname' : l_name, 'semail' : xemail, 'spass' : pass,'day':0, 'month':0, 'year':0, 'promo':promotions},
      'success' : function(rsp){
        if(rsp.msg=='scs') {
          jQuery('#cw_lab_search').removeClass("col-md-4 col-sm-4 col-xs-12 pade_none search mobSearchWrapper");
          jQuery('#cw_lab_search').addClass('col-md-5 col-sm-5 col-xs-12 pade_none search mobSearchWrapper');
          jQuery('#cw_user_opts').removeClass('col-md-5 col-sm-5 col-xs-12 pade_none login_blk mobButtonsWrapper');
          jQuery('#cw_user_opts').addClass('col-md-4 col-sm-4 col-xs-4 pade_none mobHelpWrapper');
          jQuery('#cw_user_opts').html(rsp.lg);
          jQuery('#cw_mobile_menu').html(rsp.mb);
          jQuery('#flex-overlay').click();
        } else if(rsp.msg=='failed') {
          alert(rsp.error);
        }
      }
    });
  }
}
function validateNavLogin() {
  var xemail = jQuery('#nvl_email').val();
  var pass   = jQuery('#nvl_password').val();
  if (isEmpty(xemail)){
      alert('Email is required!');
  } else if (!validateEmail(xemail)){
      alert('Invalid email!');
  } else if (isEmpty(pass)){
      alert('Password is required!');
  } else {
    jQuery.ajax({
      'url' : labAjax.coworker+'lab-validate-login',
      'type' : 'POST',
      'data' : {'form_login':1, 'semail' : xemail, 'spass' : pass},
      'dataType': "json",
      'success' : function(rsp){
        if(rsp.msg=='scs') {
          jQuery('#cw_lab_search').removeClass("col-md-4 col-sm-4 col-xs-12 pade_none search mobSearchWrapper");
          jQuery('#cw_lab_search').addClass('col-md-5 col-sm-5 col-xs-12 pade_none search mobSearchWrapper');
          jQuery('#cw_user_opts').removeClass('col-md-5 col-sm-5 col-xs-12 pade_none login_blk mobButtonsWrapper');
          jQuery('#cw_user_opts').addClass('col-md-4 col-sm-4 col-xs-4 pade_none mobHelpWrapper');
          jQuery('#cw_user_opts').html(rsp.lg);
          jQuery('#cw_mobile_menu').html(rsp.mb);
          jQuery('#nvloginModal').modal('toggle');
        } else if(rsp.msg=='failed') {
          alert(rsp.error);
        }
      }
    });
  }
}
function redirectNavFB(){
  window.location = labAjax.coworker+"lab-redirect-fb";
}

jQuery(document).ready(function(){
  jQuery.ajax({
    type: "POST",
    url : labAjax.coworker+"lab-validate-user",
    data: { 'nonce' : labAjax.lgf_ce },
    dataType : "json",
    success: function(rsp){
      
      if(rsp.msg=='no'){
        jQuery('body').append(jQuery('<div>', {id:'nvmyLoading',class: 'modal'}));
        jQuery('#nvmyLoading').initLoading({pathLoading:labAjax.coworker});
        jQuery('body').append(jQuery('<div>', {id:'nvloginModal',class: 'modal'}));
        jQuery('#nvloginModal').initLogin({pathLoading:labAjax.coworker});
        jQuery('body').append(jQuery('<div>', {id:'nvmy_Modal',class: 'popup_outer'}));
        jQuery('#nvmy_Modal').initSignup({pathLoading:labAjax.coworker});
        jQuery('body').append(jQuery('<div>', {id:'nvmy_Signup',class: 'container modal'}));
        jQuery('#nvmy_Signup').initNewSignup({pathLoading:labAjax.coworker});
        jQuery('.form_outer').click(function(event) {
          if(event.target.id=='fo_target'){
            jQuery('#nvmy_Signup').modal('hide');
          } else{
            event.stopPropagation();
          }
        });
        jQuery('#top').click(function(){
          jQuery('#n_popup').flexModal({align: "top", y_offset: 10});
        });
        jQuery('#right').click(function(){
          jQuery('#n_popup').flexModal({align: "right", x_offset: 30});
        });
        jQuery('#bottom').click(function(){
          jQuery('#n_popup').flexModal({align: "bottom"});
        });
        jQuery('#left').click(function(){
          jQuery('#n_popup').flexModal({align: "left"});
        });
        jQuery('#cw_user_opts').html(rsp.lg);
        jQuery('#cw_mobile_menu').html(rsp.mb);
      } else if(rsp.msg=='scs') {
        jQuery('#cw_lab_search').removeClass("col-md-4 col-sm-4 col-xs-12 pade_none search mobSearchWrapper");
        jQuery('#cw_lab_search').addClass('col-md-5 col-sm-5 col-xs-12 pade_none search mobSearchWrapper');
        jQuery('#cw_user_opts').removeClass('col-md-5 col-sm-5 col-xs-12 pade_none login_blk mobButtonsWrapper');
        jQuery('#cw_user_opts').addClass('col-md-4 col-sm-4 col-xs-4 pade_none mobHelpWrapper');
        jQuery('#cw_user_opts').html(rsp.lg);
        jQuery('#cw_mobile_menu').html(rsp.mb);
      } else {
      }
    },
  });
});
jQuery(function() {
  jQuery( "#h_location" ).autocomplete({
    source:function(request, response) {
      jQuery("#h_place_id").val(0);
      jQuery("#h_search_place").val(0);
      jQuery.ajax({
        url: labAjax.coworker+'getAutocomplete',
        dataType: "json",
        type: "POST",
        data: {
          term : request.term
        },
        success: function(data) {
          response(data);
        }
      });
    },minLength:1,
    messages: {
        noResults: '',
        results: function() {}
    },appendTo: "#h_aucomplete",
    select: function (event, ui) {
      jQuery("#h_place_id").val(ui.item.idx);
      jQuery("#h_search_place").val(ui.item.loc);
      jQuery("#xh_location").val(ui.item.value);
      jQuery('#h_location').val(ui.item.value);
      if(ui.item.loc==3){
        if(ui.item.coworkspace_url!='')
          window.location = labAjax.coworker+ui.item.coworkspace_url;
      } else
        submitSearchH();
    },
    open: function(){
      jQuery('.ui-autocomplete').css('width', jQuery('#h_location').width());
    }
  }).autocomplete( "instance" )._renderItem = function( ul, item ) {
    var loc_icon = '<i class="fa fa-building"></i>';
    var view_all = '';
    if(item.loc==1)
      loc_icon = '<i class="fa fa-globeui"></i>';
    if((item.loc==2) || (item.loc==2.5))
      loc_icon = '<i class="fa fa-map-markerui"></i>';
    if(item.loc==5)
      loc_icon = '<i class="fa fa-map-markerui"></i>';
    if(item.loc==10)
      loc_icon = '<i class="fa fa-map-markerui"></i>';
    if(item.loc==0){
      loc_icon = "";
      view_all = 'class="search_view_results_div pade_none"';
    }
      return jQuery( "<li "+view_all+">" ).append( loc_icon + item.label ).appendTo( ul );
  };
});
function submitSearchH() {
  if(jQuery("#xh_location").val()!=jQuery("#h_location").val()) {
    jQuery("#h_place_id").val(0);
    jQuery("#h_search_place").val(0);
  }
  jQuery.ajax({
    url: labAjax.coworker+'search/start',
    dataType: "json",
    type: "POST",
    data: {
      h_place_id     : jQuery("#h_place_id").val(),
      h_search_place : jQuery("#h_search_place").val(),
      h_location     : jQuery("#h_location").val(),
      form_search    : 2
    },
    success: function(data) {
      window.location = labAjax.coworker+'search/'+data.s_url;
    }
  });
}
jQuery("#h_location").keypress(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    submitSearchH();
  }
});
var msg_login = 0;
function openNavLoging(){
  msg_login=0;
  jQuery('#nvmy_Signup').normalSignupTitle();
  jQuery('#nvloginModal').modal('toggle');
}
function openNavSignup(){
  msg_login=0;
  jQuery('#nvmy_Signup').normalSignupTitle();
  jQuery('#nvmy_Signup').modal('toggle');
}
function openNavSignupForm(){
  /*if(msg_login){
    jQuery('#nvmy_Signup').msgSignupTitle();
  } else {
    jQuery('#nvmy_Signup').normalSignupTitle();
  }*/
  jQuery('#nvmy_Signup').modal('toggle');
  jQuery('#n_popup').flexModal();
  console.log('11');
}
function navSignupLogin(){
  if(msg_login){
    jQuery('#nvmy_Signup').msgSignupTitle();
  } else {
    jQuery('#nvmy_Signup').normalSignupTitle();
  }
  jQuery('#nvmy_Signup').modal('toggle');
  jQuery('#nvloginModal').modal('toggle');
}
function navLoginSignup(){
  if(msg_login){
    jQuery('#nvmy_Signup').msgSignupTitle();
  } else {
    jQuery('#nvmy_Signup').normalSignupTitle();
  }
  jQuery('#nvloginModal').modal('toggle');
  jQuery('#nvmy_Signup').modal('toggle');
}
function openNavSignupLogin(){
  jQuery('#flex-overlay').click();
  jQuery('#nvloginModal').modal('toggle');
}
function isEmpty(str){
  return str.replace(/^\s+/g, '').length==0;
}