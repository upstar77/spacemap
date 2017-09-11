//segment tracking
var st = function(){
	var debug = true;

	log('tracking start|||');


















	// search button click on home page 
	$(document).on('click','#form_search button',function(){

		analytics.track('Search', {
		  category: 'CoworkingSearch',
		  label: $('#f_location').val(),
		  SearchString: $('#f_location').val()
		});
		return false;

	});



	// press Enter key in search field on home page
	$(document).on('keyup','#form_search #f_location',function(e){

		 var code = e.keyCode || e.which;
		 if(code == 13 && $(this).val() != '') { 
		  	analytics.track('Search', {
			  category: 'CoworkingSearch',
			  label: $(this).val(),
			  SearchString: $(this).val()
			});
		 }
		return false;

	});

	// click on autocomplete item on home page
	$(document).on('click', '#form_search ul.ui-autocomplete li', function(){

		analytics.track('Search', {
			  category: 'CoworkingSearch',
			  label: $(this).text(),
			  SearchString: $(this).text()
		});
		log($(this).text());
		return false;

	});



	// press Enter key in search field on inner pages
	$(document).on('keyup','#form_search_h #h_location',function(e){

		 var code = e.keyCode || e.which;
		 if(code == 13 && $(this).val() != '') { 
		  	analytics.track('Search', {
			  category: 'CoworkingSearch',
			  label: $(this).val(),
			  SearchString: $(this).val()
			});
		 	log($(this).val());
		 }
		return false;

	});






	// click on autocomplete item on inner pages
	$(document).on('click', '.inner_srch_blk ul.ui-autocomplete li', function(){
		log($(this).text());
		analytics.track('Search', {
			  category: 'CoworkingSearch',
			  label: $(this).text(),
			  SearchString: $(this).text()
		});
		
		return false;

	});





	//show all filters

	$(document).on('click', '.view_show', function(){
		analytics.track('Click_view_all_filters', {
		  category: 'CoworkingSearch'
		});
		return false;
	});










	$(document).on('click', '.new_add_spaces_button a, .footer_about_list01 li:eq(0) a', function(){
		analytics.track('Click_AddSpace', {
		  category: 'Account'
		});

		analytics.page('AddSpace_click',
		{ title: 'AddSpace_click',
		  url: 'https://www.coworker.com/click_add_space'}
		);
	});










	// create new coworking space tracking

	$(document).on('click','#user_space_form button[type="button"]', function(){

		var params = {
			category:"Account",
			label:$('#user_space_form #space_name').val(),
			AddSpace_Name:$('#user_space_form #space_name').val(),
			AddSpace_Country:$('#user_space_form #country').val(),
			AddSpace_City:$('#user_space_form #city').val(),
			AddSpace_MemberType:$('#user_space_form .user_type_circle.circle_red').text()
		};
		var error = false;

		if(params.label == '') {
			error = true;
		}
		if(params.CountryAddSpace == '') {
			error = true;
		}
		if(params.CityAddSpace == '') {
			error = true;
		}

		if(!error) {
			analytics.track('AddSpace_0_step', params);
			analytics.page('AddSpace_0_step',
			{ title: 'AddSpace_0_step',
			  url: 'https://www.coworker.com/add_space_0_step'}
			);
		}


		log(params);

		return;


	});







	// create new coworking space tracking step 2,3,4

	$(document).on('click','#space_next_btn', function(){

			

		var error = false;
		if($('#answer2').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val(),
				AddSpaceDescr_Name: $('#space_name').val(),
				AddSpaceDescr_LocalDescription: $('#cs_extra_description').val() == '' ? 'No' : 'Yes'
			};
			


			if($('#cs_description').val() == '') {
				error = true;
			}


			if(error) return false;
			
			analytics.track('AddSpace_1_description', params);
			analytics.page('AddSpace_1_description',
			{ title: 'AddSpace_1_description',
			  url: 'https://www.coworker.com/add_space_1_description'}
			);
		}



		if($('#answer3').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val(),
				AddSpace_Email: $('#ls_email').val(),
				AddSpace_Tel: $('input[name=tel]').val(),
				AddSpace_Website: $('#website_url').val(),
				AddSpace_Facebook: $('input[name=facebook]').val(),
				AddSpace_Twitter: $('input[name=twitter]').val(),
				AddSpace_Instagram: $('input[name=instagram]').val()
			};


			if(params.EmailOfAddingCowor == "") {
				error = true;
			}

			if(error) return false;
			
			analytics.track('AddSpace_2_contacts', params);
			analytics.page('AddSpace_2_contacts',
			{ title: 'AddSpace_2_contacts',
			  url: 'https://www.coworker.com/add_space_2_contacts'}
			);
		}



		if($('#answer4').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val()
			};


			$('#answer3 input[type=checkbox]').each(function(){
				var param_key = 'AddSpace_' + $(this).next().text().toString().replace(/\s+/g, '');
				var param_value = 'No';
				if($(this).is(':checked')) {
					param_value = 'Yes';
				}

				params[param_key] = param_value;

			});
			
			analytics.track('AddSpace_3_amenities', params);
			analytics.page('AddSpace_3_amenities',
				{ title: 'AddSpace_3_amenities',
				  url: 'https://www.coworker.com/add_space_3_amenities'}
			);
		}


		if($('#answer5').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val(),
				AddSpace_LocationName: $('#location_name').val(),
				AddSpace_UnitOrFloorNumber: $('input[name=unit]').val(),
				AddSpace_AddressLine1: $('input[name=address]').val(),
				AddSpace_AddressLine2: $('input[name=address_sec]').val(),
				AddSpace_Neighbourhood: $('input[name=area]').val(),
				AddSpace_ZipPostalCode: $('input[name=postal_code]').val(),
				AddSpace_City: $('input[name=city]').val(),
				AddSpace_Country: $('input[name=country]').val()
			};
			
			if(params.CoworLocationName == '') {
				error = true;
			}
			if(params.CoworAddressLine1 == '') {
				error = true;
			}
			if(params.CityAddSpace == '') {
				error = true;
			}


			if(error) return false;
			
			analytics.track('AddSpace_4_location', params);
			analytics.page('AddSpace_4_location',
			{ title: 'AddSpace_4_location',
			  url: 'https://www.coworker.com/add_space_4_location'}
			);
		}


		if($('#answer6').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val(),
				AddSpace_MeetRoomNumber: $('#meeting_room_number').val(),
				AddSpace_AllowRentMeetRooms:$('input[name=rent_nm]:checked').val(),
				AddSpace_HireSpaceBiggerEvent:$('input[name=hire_nm]:checked').val(),
				AddSpace_MeetRoomMaxCapacity:$('#meeting_room_number option:last').val()
			};

			analytics.track('AddSpace_5_Meet_Rooms', params);
			analytics.page('AddSpace_5_Meet_Rooms',
			{ title: 'AddSpace_5_Meet_Rooms',
			  url: 'https://www.coworker.com/add_space_5_meet_rooms'}
			);
		}



		if($('#answer7').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val(),
				AddSpace_DifferentOpenHrs: $('input#ccc1').is(':checked') ? 'Yes' : 'No',
				AddSpace_SatOpen:$('input#ccc3').is(':checked') ? 'Yes' : 'No',
				AddSpace_SunOpen:$('input#ccc4').is(':checked') ? 'Yes' : 'No',
				AddSpace_MemberAccessHrs:$('input[name=member_accs]:checked').next().text()
			};

			analytics.track('AddSpace_6_opening_hrs', params);
			analytics.page('AddSpace_6_opening_hrs',
			{ title: 'AddSpace_6_opening_hrs',
			  url: 'https://www.coworker.com/add_space_6_opening_hrs'}
			);
		}


		if($('#answer8').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val(),
				AddSpace_Desks: $('select[name=desks]').val(),
				AddSpace_PrivateOffices:$('select[name=private_office]').val(),
				AddSpace_TotalCapacity:$('select[name=total_capacity]').val(),
				AddSpace_Size:$('select[name=size]').val()
			};

			analytics.track('AddSpace_7_size', params);
			analytics.page('AddSpace_7_size',
			{ title: 'AddSpace_7_size',
			  url: 'https://www.coworker.com/add_space_7_size'}
			);
		}


		if($('#answer9').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val()
			};

			analytics.track('AddSpace_8_photos', params);
			analytics.page('AddSpace_8_photos',
			{ title: 'AddSpace_8_photos',
			  url: 'https://www.coworker.com/add_space_8_photos'}
			);
		}

		if($('#answer10').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val(),
				AddSpace_Currency: $('select[name=currency_id]').val(),
				AddSpace_CanPayOnline: $('input[name=opay]:checked').val(),
				AddSpace_AcceptCreditCards: $('input[name=accs]:checked').val(),
				AddSpace_CanPayPal: $('input[name=apps]:checked').val(),
				AddSpace_Deposit : $('input[name=deposit]').val()
			};

			analytics.track('AddSpace_9_pay_method', params);
			analytics.page('AddSpace_9_pay_method',
			{ title: 'AddSpace_9_pay_method',
			  url: 'https://www.coworker.com/add_space_9_pay_method'}
			);
		}


		if($('#answer10').css('display') == 'block') {
			var params = {
				category: "Account",
				label: $('#space_name').val(),
				AddSpace_Currency: $('select[name=currency_id]').val(),
				AddSpace_CanPayOnline: $('input[name=opay]:checked').val(),
				AddSpace_AcceptCreditCards: $('input[name=accs]:checked').val(),
				AddSpace_CanPayPal: $('input[name=apps]:checked').val(),
				AddSpace_Deposit : $('input[name=deposit]').val()
			};

			analytics.track('AddSpace_9_pay_method', params);
			analytics.page('AddSpace_9_pay_method',
			{ title: 'AddSpace_9_pay_method',
			  url: 'https://www.coworker.com/add_space_9_pay_method'}
			);
		}


		if($('#answer11').css('display') == 'block') {
			var props = {
				category: "Account",
				label: $('#space_name').val()
			},
			hot_desks = [],
			dedicate_desks = [],
			hot_times = {
				"1h" : "AddSpace_HotDesk_1hour_",
				"1d" : "AddSpace_HotDesk_1day_",
				"1w" : "AddSpace_HotDesk_1week_",
				"1m" : "AddSpace_HotDesk_1month_",
				"3m" : "AddSpace_HotDesk_3months_",
				"6m" : "AddSpace_HotDesk_6months_",
				"1y" : "AddSpace_HotDesk_1year_"
			},
			dedic_times = {
				"1h" : "AddSpace_DedicatDesk_1hour_",
				"1d" : "AddSpace_DedicatDesk_1day_",
				"1w" : "AddSpace_DedicatDesk_1week_",
				"1m" : "AddSpace_DedicatDesk_1month_",
				"3m" : "AddSpace_DedicatDesk_3months_",
				"6m" : "AddSpace_DedicatDesk_6months_",
				"1y" : "AddSpace_DedicatDesk_1year_"
			};




			$('#open_plans  .odesk_p').each(function(){
				var value = $(this).find('.form-group:eq(0) select').val(),
					price = $(this).find('.form-group:eq(1) input.plans_price').val(),
					access_hours = $(this).find('.form-group:eq(2) select').val();
				if(dedic_times[value]) {
					
					hot_desks[dedic_times[value]+'Price'] = price;
					if(access_hours != 0) {
						hot_desks[dedic_times[value]+'AccessHrs'] = access_hours == 'OH' ? "Reception Hours" : "24 hours";
					}	
				}
			});

			$('#dedic_plans  .ddesk_p').each(function(){
				var value = $(this).find('.form-group:eq(0) select').val(),
					price = $(this).find('.form-group:eq(1) input.plans_price').val(),
					access_hours = $(this).find('.form-group:eq(2) select').val();
				if(times[value]) {
					
					hot_desks[times[value]+'Price'] = price;
					if(access_hours != 0) {
						hot_desks[times[value]+'AccessHrs'] = access_hours == 'OH' ? "Reception Hours" : "24 hours";
					}	
				}
			});


  

			analytics.track('AddSpace_10_desks_prices',	 props);
			analytics.page('AddSpace_10_desks_prices',
			{ title: 'AddSpace_10_desks_prices',
			  url: 'https://www.coworker.com/add_space_10_desks_prices'}
			);
		}



		if($('#answer12').css('display') == 'block') {
			var props = {
				category: "Account",
				label: $('#space_name').val()
			},
			names = $('input[name^="priv_off_name"]'),
			quantities = $('select[name^="priv_off_qty"]'),
			peoples = $('select[name^="priv_off_number"]');
			withe_board = $('input[name^=priv_off_wboard]:checked');

			$('div[id^="priv_office"]').each(function(index){
				var idx = index+1;
				props['AddSpace_PrivOffice_'+idx+'_Name'] = names.eq(index).val();
				props['AddSpace_PrivOffice_'+idx+'_Quantity'] = quantities.eq(index).val();
				props['AddSpace_PrivOffice_'+idx+'_Peoples'] = peoples.eq(index).val();
				props['AddSpace_PrivOffice_'+idx+'_WhiteBoard'] = withe_board.eq(index).val();
				
			});

			analytics.track('AddSpace_11_private_office_price',	 props);
			analytics.page('AddSpace_11_private_office_price',
				{ 
				  title: 'AddSpace_11_private_office_price',
			  	  url: 'https://www.coworker.com/add_space_11_private_office_price'
			  	}
			);

		}




		return;


	});



	$(document).on('click','.space_submit_btn', function(){
		var props = {
			category: 'Account',
  			label: $('#space_name').val(),
			AddSpace_MarketingAvailable : $('#mrkt_leadgen').val() == 1 ? 'Yes' : 'No'
		}


		if(props.AddSpace_MarketingAvailable == 'Yes') {
			
			if($('#tour_hours').css('display') == 'block') {
				var tour_days = [];
				$('#tourHoursContainer .dayContainer').each(function(){
					if($(this).find('.WorkingDayState').length > 0) {
						tour_days.push($(this).find('.weekday').text());
					}
				});	
				props['AddSpace_BookTour_Days'] = tour_days.join(',');
			}
			

			if($('#daypass_hours').css('display') == 'block') {
				var free_days = [];
				$('#daypassHoursContainer .dayContainer').each(function(){
					if($(this).find('.WorkingDayState').length > 0) {
						free_days.push($(this).find('.weekday').text());
					}
				});	
				props['AddSpace_FreeDayPass_Days'] = free_days.join(',');

			}

			props['AddSpace_EnableReservation'] = $('input[name=arsv]:checked').val();

			


		}

		analytics.track('AddSpace_12_marketing',props);

		analytics.track('AddSpace_Completed', {
			category: 'Account',
			label:$('#space_name').val() 
		});


		analytics.page('AddSpace_12_marketing',
		{ 
			title: 'AddSpace_12_marketing',
		  	url: 'https://www.coworker.com/add_space_12_marketing'
		}
		);
	});




	/* search page tracking + */


	$(document).on('click','.look_for .box_check_txt input',function(){

		var searchParams = getSearchParams();
		analytics.track('Search',searchParams);
		
	});
	$(document).on('click','#membership ul li', function(){
		var searchParams = getSearchParams();
		analytics.track('Search',searchParams);
	});
	$(document).on('change','#capacity', function(){
		var searchParams = getSearchParams();
		analytics.track('Search',searchParams);
	});
	$(document).on('click','.filters_main_outer_con .pade_none ul li a', function(){
		var searchParams = getSearchParams();
		analytics.track('Search',searchParams);
	});











	function getSearchParams() {

		var MemberShip = '';
		var CoworkingType = '';

		if( $('#membership ul li.active').length > 0) {
			MemberShip = $('#membership ul li.active').text();
		}

		if($('.look_for ul .pln_active').length > 0) {
			CoworkingType = $('.look_for ul .pln_active ul').find('li:eq(1) span').text();
		}

		var params = {
			category: 'CoworkingSearch',
			label: $('#h_location').val(),
			SearchString: $('#h_location').val(),
			CoworkingType: CoworkingType,
			MemberShip: MemberShip,

		}

		$('.filters_main_outer_con .filters_hide_panel ul li').each(function(){
			
			if($(this).find('a').length > 0) {

				var param_name = $(this).find('a').text().toString().replace(/\s+/g, '');
				var param_value = 'No';
				if($(this).hasClass('active')) {
					param_value = 'Yes';
				} 

				params[param_name] = param_value;
			}

		});	

		params.NumberOfPeople = $('#capacity').val();	

		return params;
		
	}




	

	


    /* search page tracking - */

    // Contact us button click
    $(document).on('click', '.lk_contact_us', function(){
    	analytics.page('Pop_Up_Contact_Us_Now',
		{ title: 'Pop_Up_Contact_Us_Now',
		  url: location.href}
		);
    });



    $(document).on('click','.coworker_read_reviews_outer a', function(){
    	analytics.track('Click_Read_all_Reviews', {
		  category: 'MainPage'
		});
    });

    $(document).on('click','.coworker_million_inn_con div.owl-prev', function(){
    	analytics.track('Click_Scroll_reviews_buttons', {
		  category: 'MainPage',
		  label: 'Prev'
		});
    });

    $(document).on('click','.million_people_around_main .million_back_con h5', function(){
     	var coworking_name = $(this).text();
    	analytics.track('Click_cowork_from_reviews_list', {
		  category: 'MainPage',
		  label: coworking_name
		});
    });

    $(document).on('click','.coworking_hot_destination_panel a', function(){
    	analytics.track('Click_Find_space_near_you', {
		  category: 'MainPage'
		});
    });

    $(document).on('click','.hot_pic_main_outer', function(){
    	var city_name = $(this).find('.hot_coworker_hover_panel > p').text();
    	analytics.track('Click_on_City_Coworkings', {
		  category: 'MainPage',
		  label: city_name
		});
    });


    $(document).on('click','.coworker_lab_slider_main .coworker_lab_right a', function(){
    	var article_name = $(this).closest('.coworker_lab_right').find('> h3').text();
    	analytics.track('Click_on_Article_Read_more', {
		  category: 'MainPage',
		  label: article_name
		});
    });

    $(document).on('click','.coworker_lab_slider_main .owl-prev', function(){
    	analytics.track('Click_Scroll_articles_buttons', {
		  category: 'MainPage',
		  label: 'Prev'
		});
    });

    $(document).on('click','.coworker_lab_slider_main .owl-next', function(){
    	analytics.track('Click_Scroll_articles_buttons', {
		  category: 'MainPage',
		  label: 'Next'
		});
    });

    $(document).on('click','.footer_new_social_links_top li a', function(){
    		
    	var idx = $(this).closest('li').index(".footer_new_social_links_top li");
    	var network_names = [
    		'Facebook',
    		'Twitter',
    		'Pinterest', 
    		'Instagram',
    		'Youtube'
    	];
    	analytics.track('Click_Social_Network', {
		  category: 'MainPage',
		  label: network_names[idx]
		});
    
    });

    $(document).on('click','.gallery_reviewd_inner a', function(){
    	var coworking_name = $(this).find('.coworker_reviewed_pic_outer h4 strong').text();
	    analytics.track('Click_Coworking_from_Most_Reviewed', {
		  category: 'MainPage',
		  label: coworking_name
		});
    });

    $(document).on('click','.footer_tab_main li a', function(){

    	var page_type = 'Coworking page';
    	var country_name = $(this).text();
    	if(location.path == '/') {
    		page_type = 'MainPage';
    	}

    	analytics.track('Click_on_Country_Tab', {
		  category: page_type,
		  label: country_name
		});
    });

    $(document).on('click', '.coworker_spacefinder_inner ul li a', function(){
    	var category = 'Search Suggestion page';
    	var suggestion_name = $(this).find('span').text();
    	if(location.path == '/') {
    		category = 'MainPage';
    	}
    	analytics.track('Click_on_Search_Suggestion', {
		  category: category,
		  label: suggestion_name
		});
    });


    $(document).on('click','.coworker_message_button a', function(){
    	analytics.track('Click_Message_Us', {
		  category: 'CoworkingPage'
		});

		analytics.page('Pop_Up_Message_Us',
		{ title: 'Pop_Up_Message_Us',
		  url: 'https://www.coworker.com/Pop_up_message_us_coworking_page'}
		);		
    });

    $(document).on('click','.coworker_enquiry_button a', function(){
    	analytics.track('Click_Membership_Enquire', {
		  category: 'CoworkingPage'
		});

    	analytics.page('Pop_Up_Membership_Enquire',
		{ title: 'Pop_Up_Membership_Enquire',
		  url: 'https://www.coworker.com/Pop_up_Membership_Enquire'}
		);

    });

    $(document).on('click','.spaces_contact_top_panel .coworker_freedaypass_button:eq(0) a', function(){
    	analytics.track('Click_Get_Day_Pass', {
		  category: 'CoworkingPage'
		});

    	analytics.page('Pop_Up_Get_Day_Pass',
		{ title: 'Pop_Up_Get_Day_Pass',
		  url: 'https://www.coworker.com/Pop_up_Get_Day_Pass'}
		);

    });

    $(document).on('click','.spaces_contact_top_panel .coworker_freedaypass_button:eq(1) a', function(){
    	analytics.track('Click_Book_Tour', {
		  category: 'CoworkingPage'
		});

    	analytics.page('Pop_Up_Book_Tour',
		{ title: 'Pop_Up_Book_Tour',
		  url: 'https://www.coworker.com/Pop_up_Book_Tour'}
		);


    });

    $(document).on('click','.Open_Plan_table .request_btn', function() {
    	var price = $(this).closest('tr').find('td:eq(2)').text();
    	var duration = $(this).closest('tr').find('td:eq(1)').text();
    	var access_hours = $(this).closest('tr').find('td:eq(3)').text();
    	analytics.track('Click_on_Enquire_Open_plan', {
		  category: 'CoworkingPage',
		  EnquireOpenPlan_SuggestedDuration : duration,
		  EnquireOpenPlan_Price : price,
		  EnquireOpenPlan_AccessHrs: access_hours
		});

		analytics.page('pop_up_Enquire_Open_plan',
		{ title: 'pop_up_Enquire_Open_plan',
		  url: 'https://www.coworker.com/pop_up_Enquire_Open_plan'}
		);
    });

    $(document).on('click','#form_review a', function(){
    	analytics.track('Click_on_Post_Review', {
		  category: 'CoworkingPage'
		});
		analytics.page('popup_Post_Review',
		{ title: 'Popup_Post_Review',
		  url: 'https://www.coworker.com/popup_Post_Review'}
		);
    })

    $(document).on('click', '.tab_answers li a' ,function(){
    	var label = $(this).text();

    	analytics.track('Click_coworking_info_tabs', {
		  category: 'CoworkingPage',
		  label: label
		});
    });


    $(document).on('click', '.morecontent a.more_content', function(){
    	analytics.track('Click_on_Read_More_description', {
		  category: 'CoworkingPage'
		});
    });

    $(document).on('click', '.membership_fees_tabs ul li a', function(){
    	var tab_name = $(this).text();
    	analytics.track('Click_on_CoworkType_tabs', {
		  category: 'CoworkingPage',
		  label: tab_name
		});
    });

    $(document).on('click', '.social_space_outer a', function(){
    	var idx = $(this).index('.social_space_outer a'),
    		socials = [
	    		'Facebook',
	    		'Twitter',
	    		'LinkedIn'
    		];
    	analytics.track('Click_Share_to_Social_Network', {
		  category: 'CoworkingPage',
		  label: socials[idx]
		});

    });

    $(document).on('click', '.see_all_photos_text', function(){
    	analytics.track('Click_on_See_All_Photos', {
		  category: 'CoworkingPage'
		});
    });


    $(document).on('click', '.coworker_latest_slider_inner', function(){
    	var space_name = $(this).find('h4').text();
    	analytics.track('Click_cowork_from_latest_connections', {
		  category: 'MainPage',
		  label: space_name
		});
    });
     $(document).on('click', '.lang_other_new img', function(){
    	var idx = $(this).index('.lang_other_new img');
    	if(idx != 0) {
    		analytics.track('Click_on_Local_cowork_description', {
			  category: 'CoworkingPage'
			});
    	}
    	
    });
































	function log(data){
		
			console.log(data);
		
	}


};

$(document).ready(function(){
	st();
});