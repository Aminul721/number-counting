jQuery( document ).ready(function(){
    marQFun();
    function marQFun() {
        let widthResize = jQuery(window).width();
        let appendMarQ = jQuery('.marquee_style_area');

        if (widthResize <= 991) {
            jQuery('.header_area').after(appendMarQ);
        }else {
            jQuery('.right_headerInner').prepend(appendMarQ);
        }


        let banner_list = jQuery('.banner_list_wrap');
        let request_numcount_bx = jQuery('.request_numcount_bx');
        let left_rebonbatch = jQuery('.left_rebonbatch');
        if (widthResize <= 1250) {
            jQuery('.form_area').append(banner_list);
            jQuery('.banner_form_bgMx').append(request_numcount_bx);
            // jQuery('.header_container').append(left_rebonbatch);
            jQuery('.header_area').append(left_rebonbatch);
            if (widthResize <= 767) {
                jQuery('.banner_form_wrap').prepend(left_rebonbatch);
            }
        }else {
            jQuery('.banner_leftMx .banner_title').after(banner_list);
            jQuery('.banner_form_wrap').append(left_rebonbatch);
        }
    }
    jQuery(window).resize(function() {
        marQFun();
    });

    // marquee js
    if(matchMedia('only screen and (max-width: 767px)').matches) {
        var $mwo = $('.marquee-with-options');
        jQuery('.marquee').marquee();
        jQuery('.marquee-with-options').marquee({
            speed: 40,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true
        });
        //pause and resume links
        jQuery('.pause').click(function(e){
            e.preventDefault();
            $mwo.trigger('pause');
        });
        jQuery('.resume').click(function(e){
            e.preventDefault();
            $mwo.trigger('resume');
        });
        //toggle
        jQuery('.toggle').hover(function(e){
            $mwo.trigger('pause');
            },function(){
            $mwo.trigger('resume');
        })
        .click(function(e){
            e.preventDefault();
        })



        // flating btn js
        var visible_itme1 = jQuery('.visible_itme1');
        var visible_itme2 = jQuery('.visible_itme2');
        var visible_itme3 = jQuery('.visible_itme3');
        var visible_itme4 = jQuery('.visible_itme4');

        if(visible_itme1 && visible_itme2 && visible_itme3 && visible_itme4 > 0) {
            jQuery(window).scroll(function(){
                var First_offH = jQuery('.visible_itme1').offset().top - 72;
                var Second_offH = jQuery('.visible_itme2').offset().top - 72;
                var third_offH = jQuery('.visible_itme3').offset().top - 72;
                var four_offH = jQuery('.visible_itme4').offset().top - 72;

                var First_innerH = jQuery('.visible_itme1').height();
                var Second_innerH = jQuery('.visible_itme2').height();
                var third_innerH = jQuery('.visible_itme3').height();
                var four_innerH = jQuery('.visible_itme3').height();


                var scree_vh = jQuery(window).height();
                var scrollTop = jQuery(this).scrollTop();

                // offset top form scree height positiive
                var total_FoffstH_innH = First_offH + First_innerH;
                var total_SoffstH_innH = Second_offH + Second_innerH;
                var total_TRDoffstH_innH = third_offH + third_innerH;
                var total_FRoffstH_innH = four_offH + four_innerH;

                // offset top form scree height nagetive
                var total_FoffH_SCNH = First_offH - scree_vh;
                var total_SoffH_SCNH = Second_offH - scree_vh;
                var total_TRDoffH_SCNH = third_offH - scree_vh;
                var total_FRoffH_SCNH = four_offH - scree_vh;

                if (( scrollTop > total_FoffH_SCNH && scrollTop < total_FoffstH_innH )  || ( scrollTop > total_SoffH_SCNH && scrollTop < total_SoffstH_innH ) || ( scrollTop > total_TRDoffH_SCNH && scrollTop < total_TRDoffstH_innH ) || ( scrollTop > total_FRoffH_SCNH && scrollTop < total_FRoffstH_innH )) {
                    jQuery('.flating_btn_wrap').removeClass('flating_fixedbtn');
                }else {
                    jQuery('.flating_btn_wrap').addClass('flating_fixedbtn');
                }
            });
        }
    }

    // FAQ tgl js
    jQuery( ".toggle_view_bg" ).click(function(e) {
        if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
        } else {
            $( ".toggle_view_bg" ).each(function() {
                if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                    jQuery(this).parent('.toggle_view_item').toggleClass('active');
                    jQuery(this).next('.show_details').slideToggle('hide');
                }
            });
        }
        jQuery(this).parent('.toggle_view_item').toggleClass('active');
        jQuery(this).next('.show_details').slideToggle('slow');
        e.preventDefault();
    });
});


    