(function( $ ) {
  $.fn.addNewPrivateOffice = function() {
    var nro_office  = String.fromCharCode("a".charCodeAt(0) + ($("div[id^='priv_office']").length));
    var c_currency  = '  ' ;
    var options_qty = '<option value="1"> 1 Office</option>';
    for (var ioff = 2; ioff < 301; ioff++) {
      options_qty = options_qty+'<option value="'+ioff+'"> '+ioff+' Offices</option>';
    }
    var options_people = '<option value="1"> 1 Person</option>';
    for (var ipe = 2; ipe < 101; ipe++) {
        options_people = options_people+'<option value="'+ipe+'"> '+ipe+' People</option>';
	}
    var option_prices='';
    for (var ipr = 1; ipr  < 7; ipr ++) {
      option_prices = option_prices + 
       '<div class="oprice_p" id="office_p'+ipr+'_'+nro_office+'" '+(ipr>3?'style="display:none;"':'')+'>'+
         '<div class="col-sm-4 col-md-4 col-xs-12 pade_none room_lft form-group">'+
           '<div class="missing-text-out">Missing</div>'+
           '<select id="office_d'+ipr+'_'+nro_office+'" name="priv_off'+nro_office+'['+ipr+'][dur]">'+
             '<option value="0" >-</option>'+
             '<option value="1m" '+(ipr==1?'selected="selected"':'')+'>1 month</option>'+
             '<option value="3m" '+(ipr==2?'selected="selected"':'')+'>3 months</option>'+
             '<option value="6m" '+(ipr==3?'selected="selected"':'')+'>6 months</option>'+
             '<option value="1y" >1 year</option>'+
             '<option value="18m">18 months</option>'+
             '<option value="2y" >2 year</option>'+
           '</select>'+
         '</div>'+
         '<div class="col-sm-4 col-md-4 col-xs-12 pade_none room_lft form-group">'+
           '<div class="missing-text-out">Missing</div>'+
           '<div class="col-xs-12 dv_prices">'+
             '<samp class="cu_iso">'+c_currency+'</samp><input class="plans_price" name="priv_off'+nro_office+'['+ipr+'][price]" type="text" placeholder="eg.12">'+
           '</div>'+
         '</div>'+
         '<div class="col-sm-4 col-md-4 col-xs-12 pade_none room_lft form-group dedication_membership_del_cont'+ipr+'">'+
           '<div class="missing-text-out">Missing</div>'+
           '<select name="priv_off'+nro_office+'['+ipr+'][time]">'+
             '<option value="0" >-</option>'+
             '<option value="24H">24 hours</option>'+
             '<option value="OH">Reception Hours</option>'+
           '</select>'+
           '<div class="price-cross-position" data-target="dedication_membership_del_cont'+ipr+'" onClick="removeOfficePrice(\'office_p'+ipr+'_'+nro_office+'\',\'office_plans'+nro_office+'\');">x</div>'+
         '</div>'+
       '</div>';
    }
    var temp_office ='<div id="priv_office'+nro_office+'" class="col-xs-12 pade_none coworker_event_bottom_panel03">'+
                     '  <div class="col-xs-12 pade_none co_form_con rooms_con03">'+
                     '    <div class="col-sm-6 col-md-6 col-xs-12 pade_none room_lft">'+
                     '      <label for="priv_off_name'+nro_office+'">Name of private office<div class="missing-text-out">Missing</div></label>'+
                     '      <input name="priv_off_name'+nro_office+'" placeholder="e.g Small Office" type="text">'+
                     '    </div>'+
                     
                     '    <div class="col-sm-6 col-md-6 col-xs-12 pade_none room_lft">'+
                     '      <label>Number of people</label>'+
                     '      <select name="priv_off_number'+nro_office+'" class="meet_icon">'+
                     options_people+
                     '      </select>'+
                     '    </div>'+
                     '  </div>'+
                     '  <h4>Price</h4>'+
                     '  <div class="col-xs-12 pade_none co_form_con">'+
                     '    <div id="office_plans'+nro_office+'" class="col-xs-12 pade_none">'+
                     option_prices+
                     '    </div>'+
                     '    <label id="add_office_plans'+nro_office+'" class="lbl-add-price add_duration_btn" onclick="enableOfficePrice(this,\''+nro_office+'\');">+ Add another duration</label>'+
                     '  </div>'+
                     '  <h4>Does the office have a whiteboard</h4>'+
                     '  <div class="col-xs-12 pade_none co_form_con whiteboard_listspace_con test">'+
                     '    <div class="col-sm-3 col-md-3 col-xs-12 pade_none room_lft form-group">'+
                     '      <input name="priv_off_wboard'+nro_office+'" type="radio" id="yes'+nro_office+'" class="lbl-radio-vopt" value="yes">'+
                     '      <label class="lbl-credit-card" for="yes'+nro_office+'">Yes</label>'+
                     '    </div>'+
                     '    <div class="col-sm-3 col-md-3 col-xs-12 pade_none room_lft form-group">'+
                     '      <input name="priv_off_wboard'+nro_office+'" type="radio" id="no'+nro_office+'" class="lbl-radio-vopt" checked="checked" value="no">'+
                     '      <label class="lbl-credit-card" for="no'+nro_office+'">No</label>'+
                     '    </div>'+
                     '  </div>'+
					 '    <div class="col-xs-12 col-sm-4 col-md-3 pade_none co_form_con quantity_listspace_text">'+
                     '      <label>Quantity of this office type</label>'+
                     '        <select name="priv_off_qty'+nro_office+'" class="meet_icon">'+
                     options_qty+
                     '        </select>'+
                     '    </div>'+
					 
                     '</div>';
    $( temp_office ).insertBefore( '#dv-add-office' );
  }
  $.fn.addNotificationEmail = function() {
    var number_of_text_boxes= $('#contact_emails input').length;
    number_of_text_boxes++;
    var add_email_textbox = '<input type="email" class="submission_form_inner input" id="notification-email-0' + number_of_text_boxes + '" placeholder="Another email">';
    $('#contact_emails').append(add_email_textbox);
  }
  $.fn.checkWarningSteps = function() {
    // Description
    if($('#cs_description').val().length<600){
        $('#ht_cs_description').show();
        $('#1').addClass("text-field-tab-left");
        $('#1').parent().addClass("s_warning");
    } else {
        $('#ht_cs_description').hide();
        $('#1').removeClass("text-field-tab-left");
        $('#1').parent().removeClass("s_warning");
    }
    // Contact Details
    var count_cd = 0;
    $('#answer2 input').each(function() {
        if($(this).val().trim().length==0){
            $(this).parent().find('.missing-text-out').show();
            count_cd++;
        } else {
            $(this).parent().find('.missing-text-out').hide();
        }
    });
    if(count_cd>0){
        $('#2').addClass("text-field-tab-left");
        $('#2').parent().addClass("s_warning");
    } else {
        $('#2').removeClass("text-field-tab-left");
        $('#2').parent().removeClass("s_warning");
    }
    // Amenities
    if($('#answer3 input:checked').length<5){
        $('#3').addClass("text-field-tab-left");
        $('#3').parent().addClass("s_warning");
    } else {
        $('#3').removeClass("text-field-tab-left");
        $('#3').parent().removeClass("s_warning");
    }
    // Meeting Room
    var count_mr = 0;
    if(typeof $('input:radio[name=rent_nm]:checked').val() == 'undefined'){
        $("label[for='rent_nm']").find('.missing-text-out').show();
        count_mr++;
    } else {
        $("label[for='rent_nm']").find('.missing-text-out').hide();
    } 
    if($('#meeting_room_number').val()==0){
        $("label[for='meeting_room_number']").find('.missing-text-out').show();
        $('#meeting_room_number').addClass('text-field-n');
        count_mr++;
    } else {
        $("label[for='meeting_room_number']").find('.missing-text-out').hide();
        $('#meeting_room_number').removeClass('text-field-n');
    } 
    if(count_mr>0){
        $('#5').addClass("text-field-tab-left");
        $('#5').parent().addClass("s_warning");
    } else {
        $('#5').removeClass("text-field-tab-left");
        $('#5').parent().removeClass("s_warning");
    }
    // Meeting Room
    var count_mr = 0;
    if(typeof $('input:radio[name=rent_nm]:checked').val() == 'undefined'){
        $("label[for='rent_nm']").find('.missing-text-out').show();
        count_mr++;
    } else {
        $("label[for='rent_nm']").find('.missing-text-out').hide();
    } 
    if($('#meeting_room_number').val()==0){
        $("label[for='meeting_room_number']").find('.missing-text-out').show();
        $('#meeting_room_number').addClass('text-field-n');
        count_mr++;
    } else {
        $("label[for='meeting_room_number']").find('.missing-text-out').hide();
        $('#meeting_room_number').removeClass('text-field-n');
    } 
    if(count_mr>0){
        $('#5').addClass("text-field-tab-left");
        $('#5').parent().addClass("s_warning");
    } else {
        $('#5').removeClass("text-field-tab-left");
        $('#5').parent().removeClass("s_warning");
    }
    // Opening Hours
    var count_oh = 0;
    if(typeof $('input:radio[name=member_accs]:checked').val() == 'undefined'){
        $("label[for='member_accs']").find('.missing-text-out').show();
        count_oh++;
    } else {
        $("label[for='member_accs']").find('.missing-text-out').hide();
    } 
    if(count_oh>0){
        $('#6').addClass("text-field-tab-left");
        $('#6').parent().addClass("s_warning");
    } else {
        $('#6').removeClass("text-field-tab-left");
        $('#6').parent().removeClass("s_warning");
    }
    // Size
    var count_size = 0;
    $('#answer7 select').each(function() {
        if($(this).val()==0){
            $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').show();
            $(this).addClass('text-field-n');
            count_size++;
        } else {
            $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').hide();
            $(this).removeClass('text-field-n');
        }
    });
    if(count_size>0){
        $('#7').addClass("text-field-tab-left");
        $('#7').parent().addClass("s_warning");
    } else {
        $('#7').removeClass("text-field-tab-left");
        $('#7').parent().removeClass("s_warning");
    }
    // Payment Methods
    if($('#answer9 input[name=deposit]').val().trim().length==0){
        $('#9').addClass("text-field-tab-left");
        $('#9').parent().addClass("s_warning");
        $("label[for='deposit']").find('.missing-text-out').show();
    } else {
        $('#9').removeClass("text-field-tab-left");
        $('#9').parent().removeClass("s_warning");
        $("label[for='deposit']").find('.missing-text-out').show();
    }
    // Prices Desks
    var count_pd = 0;
    //console.log($('#open_plans').find('.odesk_p').show().length);
    $('#open_plans').find('.odesk_p').each(function() {
        if($(this).css('display')=='block'){
            $(this).find('select').each(function() {
                if($(this).val()==0) {
                    $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').show();
                    count_pd++;
                } else
                    $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').hide();
            });
            $(this).find('.plans_price').each(function() {
                if(($(this).val()==0)&&($(this).val()==0.00)){
                    $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').show();
                    count_pd++;
                } else
                    $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').hide();
            });
        }
    });
    $('#dedic_plans').find('.ddesk_p').each(function() {
        if($(this).css('display')=='block'){
            $(this).find('select').each(function() {
                if($(this).val()==0) {
                    $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').show();
                    count_pd++;
                } else
                    $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').hide();
            });
            $(this).find('.plans_price').each(function() {
                if(($(this).val()==0)&&($(this).val()==0.00)) {
                    $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').show();
                    count_pd++;
                } else
                    $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').hide();
            });
        }
    });
    if(count_pd>0){
        $('#10').addClass("text-field-tab-left");
        $('#10').parent().addClass("s_warning");
    } else {
        $('#10').removeClass("text-field-tab-left");
        $('#10').parent().removeClass("s_warning");
    }
    // Private Offices
    var count_po = 0;
    $( "div[id^='priv_office']" ).each(function() {
        var tmp_po_id = $(this).attr("id").replace("priv_office","");
        if($(this).find("input[name=priv_off_name"+tmp_po_id+"]").val()==''){
            $("label[for='priv_off_name"+tmp_po_id+"']").find('.missing-text-out').show();
            count_po++;
        } else
            $("label[for='priv_off_name"+tmp_po_id+"']").find('.missing-text-out').hide();
        $(this).find('.oprice_p').each(function() {
            if($(this).css('display')=='block'){
                $(this).find('select').each(function() {
                    if($(this).val()==0) {
                        $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').show();
                        count_po++;
                    } else
                        $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').hide();
                });
                $(this).find('.plans_price').each(function() {
                    if(($(this).val()==0)&&($(this).val()==0.00)){
                        $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').show();
                        count_po++;
                    } else
                        $("label[for='"+$(this).attr('name')+"']").find('.missing-text-out').hide();
                });
            }
        });
    });
    if(count_po>0){
        $('#11').addClass("text-field-tab-left");
        $('#11').parent().addClass("s_warning");
    } else {
        $('#11').removeClass("text-field-tab-left");
        $('#11').parent().removeClass("s_warning");
    }
  }
}( jQuery ));