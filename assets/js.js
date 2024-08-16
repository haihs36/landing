jQuery(document).ready(function ($) {
    $('.menu_mb').on('click', '.icon', function () {
        // if ($(".menu_modal_mb").css('display') === 'block') {
        //     $(".menu_modal_mb").css({'background': '#fff', 'display': 'none'})
        // } else {
        //     $(".menu_modal_mb").css({'background': '#0000004d', 'display': 'block'})
        // }
        $(".menu_modal_mb").animate({width: 'toggle'}, 100);

        // setTimeout(() => {
        //     if ($(".menu_modal_mb").css('display') === 'block') {
        //         $(".menu_modal_mb").css({display: 'none'});
        //         $("body").removeClass('overflow-hidden');
        //     }else{
        //         $(".menu_modal_mb").css({display: 'block'});
        //         $("body").addClass('overflow-hidden');
        //     }
        // }, 300)
    })

})