	function showMulti(num){
		var next= num+1;
		$('.rem_flight'+num).hide();
		$('.add_flight'+num).hide();
		$('.air_flight_'+next).show();
	}
	function hideMulti(num){
		var prev= num-1;
		$('.air_flight_'+num).hide();
		$('.rem_flight'+prev).show();
		$('.add_flight'+prev).show();
	}
	$(document).ready(function() {	
		$('#rs_search_multi').searchbox({
			refid:8569,
			environment: "prod",
			hotel:{
				elements:{
					form:".rs_hotel_form",
					chk_in:".rs_chk_in, .rs_chk_in_icon, .rs_date_chk_in",
					chk_out:".rs_chk_out, .rs_chk_out_icon, .rs_date_chk_out",
					chk_in_display:".rs_date_chk_in",
					chk_out_display:".rs_date_chk_out"
				},
				calendar:{
					output_format:"<div class='rs_mobi_chk_day'>[d]</div><div class='rs_mobi_chk_month'>[F]</div>",
				},
				select_name:true
			},
			car:{
				elements:{
					form:".rs_car_form",
					chk_in:".rs_chk_in, .rs_chk_in_icon, .rs_date_chk_in",
					chk_out:".rs_chk_out, .rs_chk_out_icon, .rs_date_chk_out",
					chk_in_display:".rs_date_chk_in",
					chk_out_display:".rs_date_chk_out",			
				},
				calendar:{
					output_format:"<div class='rs_mobi_chk_day'>[d]</div><div class='rs_mobi_chk_month'>[F]</div>",
				}		
			},
			air: {
				elements: {
					form: ".rs_air_form",			
					chk_in:".rs_chk_in, .rs_chk_in_icon, .rs_date_chk_in",
					chk_out:".rs_chk_out, .rs_chk_out_icon, .rs_date_chk_out",
					chk_in_display: '.rs_mobiin',
					chk_in1_display: '.rs_mobi1',
					chk_in2_display: '.rs_mobi2',
					chk_in3_display: '.rs_mobi3',
					chk_in4_display: '.rs_mobi4',
					chk_in5_display: '.rs_mobi5',
					chk_out_display: '.rs_mobiout',
				},
				calendar: {
					output_format: '<div class="rs_mobi_chk_day">[d]</div><div class="rs_mobi_chk_month">[F]</div>'
				},
				select_name:true
			},
			vp:{
				elements: { 
					form:".rs_vp_form",
					chk_in:".rs_chk_in, .rs_chk_in_icon, .rs_date_chk_in",
					chk_out:".rs_chk_out, .rs_chk_out_icon, .rs_date_chk_out",
					chk_in_display:".rs_date_chk_in",
					chk_out_display:".rs_date_chk_out",	
				},
				calendar: { 
					output_format: '<div class="rs_mobi_chk_day">[d]</div><div class="rs_mobi_chk_month">[F]</div>',
				},
				select_name:true
			}
		});
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$("<link/>", {
			   rel: "stylesheet",
			   type: "text/css",
			   href: "https://cdn.jsdelivr.net/gh/pakgem/priceline-search/mobile_search.css"
			}).appendTo("head");	
		}
		$('.same-location').click(function(){
			 $(".rs_droppff_div").hide();
			 $('.rs_pickup_div').removeClass('rs_half_width');
			 $('#different_return').attr('checked', false);
		});
		$('.diff-location').click(function(){
			 $(".rs_droppff_div").show();
			 $('.rs_pickup_div').addClass('rs_half_width');
			 $('#different_return').attr('checked', true);
		});
		$('.round-trip').click(function(){
			$('#air_round_trip').show();
			$('#air_one_way').hide();
			$('#air_multi_dest').hide();
		});
		$('.one-way').click(function(){
			$('#air_round_trip').hide();
			$('#air_one_way').show();
			$('#air_multi_dest').hide();
		});
		$('.multi-city').click(function(){
			$('#air_round_trip').hide();
			$('#air_one_way').hide();
			$('#air_multi_dest').show();
		});	
		var $icons = $('.rs_tabs');
	    	$icons.click(function(){
	       $icons.removeClass('highlight_tab');
	       $(this).addClass('highlight_tab');
	    });
    	var $air_options = $('.rs_air_option');
	    	$air_options.click(function(){
	       $air_options.removeClass('air_highlight');
	       $(this).addClass('air_highlight');
	    });
	    var $car_options = $('.rs_car_option');
	    	$car_options.click(function(){
	       $car_options.removeClass('car_highlight');
	       $(this).addClass('car_highlight');
	    });
		$(".rs_tabs").on("click", function(){
			var futureTab = $(this).data("tab"),
				$selectedForm = $("."+futureTab);
			if ($selectedForm.hasClass("rs_searchbox_hide")) {
				$selectedForm.removeClass('rs_searchbox_hide').siblings(".rs_search_form").addClass("rs_searchbox_hide");
			}
		});
		$('.rs_product_select').on('change',function(){
   			var $option = $('.rs_product_select').val();
   			$('.rs_search_form').addClass('rs_searchbox_hide');
   			$('.rs_'+$option+'_form').removeClass('rs_searchbox_hide');
   			$('.rs_tabs').removeClass('highlight_tab');
   			$('#rs_'+$option+'_tab').addClass('highlight_tab');
		});
	});
