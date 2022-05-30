$(document).ready(function(){

    $('.btnTocShow').on({
        "click": function(){
            $(this).hide().siblings('.btnTocHide').show();
            $(this).parent('.tocContArea').addClass('show').removeClass('hide');
        }
    })

    $('.btnTocHide').on({
        "click": function(){
            $(this).hide().siblings('.btnTocShow').show();
            $(this).parent('.tocContArea').addClass('hide').removeClass('show');
        }
    })

    $('.menuArea li').on({
        "click": function(){
            $(this).addClass('active').siblings().removeClass('active');
            var idx = $(this).index();
            $(this).closest('.tocHeader').siblings('.tocContArea').children('.tocCont').eq(idx-1).addClass('active').siblings('.tocCont').removeClass('active');
            $(this).closest('.tocHeader').siblings('.tocContArea').addClass('show').removeClass('hide').children('.btnTocShow').hide().siblings('.btnTocHide').show();
        }
    })

    $('.menuArea li:first-child').on({
        "click": function(){
            $(this).parents('.tocHeader').siblings('.tocContArea').removeClass('show');
        }
    })

    $('.btnClose').on({
        "click": function(){
            $('.popup').hide();
        }
    })
})
