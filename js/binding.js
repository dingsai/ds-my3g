define(["jquery","js/valid","js/tool"],function($,valid,tool){
    var phoneCode=$(".phoneCode");
    var picCode=$(".picCode");
    var get=$(".getCode");
    phoneCode.on("input propertychange",function(){

        var value=$.trim($(this).val());
        // console.log(reg.test(value))
        console.log(valid.phoneNumber(value));
        check();

    });
    picCode.on("input propertychange",function(){

        var value=$.trim($(this).val());
        // console.log(reg.test(value))
        console.log(valid.picCode(value));
        check();

    });
    get.on("input propertychange",function(){

        var value=$.trim($(this).val());
        // console.log(reg.test(value))
        console.log(valid.verifyCode(value));
        check();

    });
    //判断如果手机图片验证都正确则给"获取验证码"添加高亮样式
    function check(){
        if(valid.phoneNumber($.trim(phoneCode.val()))&&valid.picCode($.trim(picCode.val()))){
            get.addClass("active");
            $(".bind").addClass("bg");
        }
        else{
            get.removeClass("active");
        }
    }
    get.on("click",function(){
        if(!$(this).hasClass("active")) return;

        tool.cutTime($(this));
    })

});