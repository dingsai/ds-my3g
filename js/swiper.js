define(["jquery","lib/swiper.min","js/valid"],function($,swiper,valid){
    var i;
    $(".x_yue ul li").each(function(){
        $(this).on("click",function(){
            i=$(this).index();
            $(this).addClass("active").siblings().removeClass();
            $(".swiper-slide").eq(i).css({"position":"absolute","left":0}).siblings().css({"position":"absolute","left":100+"%"})
        });

    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        onSlideChangeEnd:function(swiper){
            var index = swiper.activeIndex;
            $(".x_yue ul li").eq(index).addClass("active").siblings().removeClass();
            i=index;
        }
    });

    //当点击充值时
    $(".inp").on("input propertychange",function(){
        var value=$(this).val();
        console.log(valid.phoneNumber(value));
        check();
    });

    $(".x_chongzhi ol li").each(function(){
        $(this).on("click",function(){
            $(this).addClass("active").siblings().removeClass();
            check();
        })
    });

    //判断充值金额高亮 和号码已填写
    function check(){
        if(valid.phoneNumber( $(".inp").val())&&$(".x_chongzhi ol").addClass("active")){
            $(".x_chongzhi button").addClass("btn_active");
            $(".x_chongzhi button").click(function(){
                window.location.href="../html/ruwang.html";
            })
        }
        else{
            $(".x_chongzhi button").removeClass("btn_active");
        }
    }


    $(".x_geren button").addClass("btn_active");
});