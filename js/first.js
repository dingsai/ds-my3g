
define(["jquery","js/valid","js/tool","js/valid"],function($,checkId,tool,valid){
        var idCard=$(".idCard");
        var verifyCode=$(".verifyCode");
        var verifyCodebtn=$(".getCode");

    // console.log(checkId);指的是valid对象
    //判断输入框的值(身份证件号码)是否正确  正确 可获取验证码
    idCard.on("input propertychange",function(){
        // console.log( $(this).val() )输入框输入的值
        var value=$.trim($(this).val());
        console.log(checkId.idCard(value));//valid对象下idCard函数  输入的值匹配得到返回true否则返回false
        if(checkId.idCard(value)){//如果身份证是对的 那么获取验证码可点击
            verifyCodebtn.addClass("active");
        }else{
            verifyCodebtn.removeClass("active")
        }
    });
    verifyCode.on("input propertychange",function(){

        var value=$.trim($(this).val());
        // console.log(reg.test(value))
        console.log(checkId.verifyCode(value));
        if(checkId.verifyCode(value) && value=="1111"){
            $("#load").addClass("on");
        }
        else{
            $("#load").removeClass("on");
        }
    });

    //获取验证码按钮点击事件
    verifyCodebtn.on("click",function(){
        /*if($(this).hasClass("active")){//如果有active证明身份号idCard已经通过
            $.post()//请求
        }
        return;//没意义  所以取反*/
        if(!$(this).hasClass("active")){//如果没有active
            return;
        }
        //$.post();//请求后台获取验证码
        tool.cutTime($(this));

    });

    $(".btn1").click(function(){
        if($(this).hasClass("on")){
            //获取地址栏参数
            var id=$.trim(idCard.val());
            // var id=id;前者字符串  后者变量
            var str='?id='+id+'你好';//如果拼接后还有汉字  汉字会有乱码 所以有编码
            // encodeURI()对地址栏进行编码，不含路径
            //encodeURIComonent()对地址栏进行编码。全路径

            window.location.href="number_one.html"+encodeURI(str);


        }

    });
    $(".btn2").click(function(){
        window.location.href="binding.html";
    })
});







