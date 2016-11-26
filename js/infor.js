define(["jquery","js/valid","js/tool"],function($,valid,tool){
    /*var obj=window.localStorage.obj;
    console.log(obj)*/
    $(".name").on("input propertychange",function(){
        var value=$(this).val();
        console.log(valid.name(value));
        change()
    });
    $(".idCard").on("input propertychange",function(){
        var value=$(this).val();
        console.log(valid.idCard(value));
        change()
    });
    $(".address").on("input propertychange",function(){
        var value=$(this).val();
        console.log(valid.address(value));
        change()
    });
    $(".phone").on("input propertychange",function(){
        var value=$(this).val();
        console.log(valid.phoneNumber(value));
        change()
    });


    $(".upload").on("click",function(){
        location.href="index.html";
    });



    //本地存储  input的值
    var obj = {};
    $(".info").each(function(){
        $(this).on("blur",function(){//当input失去焦点时
            var vl = $(this).val(),//每个input的值
                k = $(this).attr("class").split(" ")[1];//input 的class--->name idCard address phone
            obj[k] = vl;//对象键值对
            window.localStorage.obj = JSON.stringify(obj);//以字符串的形式保存
        })
    });
    //上传图片结束返回information页面，那么上传照片 有高亮边框
    var url = location.search;
    if(url){
        $(".upload").addClass("upload_active");
        var obj=JSON.parse(window.localStorage.obj);//返回infor页面后取出保存的值转化成对象键值对形式
        for(var i in obj){//遍历对象   键值
            $("."+i).val(obj[i]);
        }
        change();
    }

    $("#ck").on("click",function(){
        change();
    });
    function change(){

        //判断 当所有的input的值都有的话  那么提交按钮添加高亮显示
        if(valid.name($(".name").val()) && valid.idCard($(".idCard").val()) && valid.address($(".address").val())&& valid.phoneNumber($(".phone").val())&&$(".upload").hasClass("upload_active")&&$("#ck").is(":checked")){
            $(".done").addClass("active");
        }else{
            $(".done").removeClass("active");
        }
    }

    //如果匹配成功跳转页面
    $(".done").on("click",function(){
        if($(this).hasClass("active")){
            //点击提交
                location.href="y_dingdan.html";

        }else{
            return false;
        }
    })




});