define(["jquery","js/valid"],function($,valid){
    // 手表ICCID自动匹配号码归属地
    var watch=$(".watch_ICCID");
    var chooseNum=$(".chooseNum");
    chooseNum.on("click",function(){
        window.location.href="../html/xuanhao.html";

    });
    //存储ICCID号码
    /*var obj={};
    window.localStorage.obj=JSON.stringify(obj);
    $(".watch_ICCID").on("blur",function(){
        var val=$(this).val();
        var key=$(this).attr("class");
        obj[key] = val;//对象键值对
        window.localStorage.obj = JSON.stringify(obj);//以字符串的形式保存
    });
*/


    $(".monthly").on("click",function(){
        $(this).addClass("light");
        $(".setmeal").removeClass("light");
    });
    $(".setmeal").on("click",function(){
        $(this).addClass("light");
        $(".monthly").removeClass("light");
    });
    $(".open span").on("click",function(){
        $(this).addClass("blue").siblings().removeClass("blue");
    })


});