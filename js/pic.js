define(["jquery","js/upload"],function($,upload){


            var val = $(".inputs").attr("value"),
                num = 0;

            $(".inputs").each(function(){
                $(this).on("change",function(){
                    num++;
                    if(num==3){
                        $(".new3 main button").addClass("active");
                    }
                    else{
                        $(".new3 main button").removeClass("active");
                    }
                })
            });

    $(".complete").on("click",function(){
        if($(this).hasClass("active")){
            location.href="infor.html?a=1";
        }
        else{
            return false;
        }
    })

});