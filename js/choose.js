define(["jquery","js/tool","js/slideSelect2"],function($,tool,slider){
    if(location.href.indexOf("number_one")==-1) return;

    alert("dsf")
    var param= location.search;
    console.log(decodeURI(param));

    $(".choice").on("click",function(){
        location.href="xuanhao.html";

    });
    var Num=tool.getUrlParam();

    $(".choice_num").html(Num.phone);

    $(".watch_ICCID").on("input propertychange",function(){
       var val=$(this).val();
        var reg=/\d{5}/;
        val=val.replace(reg,function(a){
            var len=a.length-1;
            return a.substr(0,4)+" "+a.substr(4);
        });
        $(this).val(val);
        test();

    });
    $(".price").on("click",function(){
        var price_html=$(this);
         $(this).html("30元");
        slider.show({
            title:"选择金额",
            data:["10元","20元","30元","50元","80元","100元"],
            done:function(data){
                $(price_html).html(data.value);
            }
        })
    });
    var watch=$(".watch").html();
    var choice=$(".choice_num").html();

    function test(){
        if(watch!=null&&choice!=null){
            $(".next button").addClass("active");
        }//如果都不为空  则下一步按钮高亮显示
        else{
            $(".next button").removeClass("active");
        }
    }

    $(".next button").on("click",function(){
        location.href="infor.html";
    })
});