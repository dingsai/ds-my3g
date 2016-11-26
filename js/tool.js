define(["jquery"],function($){
    return {
        cutTime:function(target){
            var span_time=target;//触发目标事件 <span>元素-》时间倒计时
            //倒计时
            var time=60;
            if(span_time.indexOf("重发")>-1) return false;
            var timer=setInterval(function(){
                if(time<=0){
                    span_time.html("获取验证码");
                    span_time.addClass("getCode").removeClass("code");
                    clearInterval(timer);
                }
                else{
                    span_time.addClass("code").removeClass("getCode");
                    time--;
                    span_time.html(time+"s后重发");
                }

            },1000)
        },
        getUrlParam:function(target){
           var paramString=decodeURI(location.search.substr(1));// ?phone=.....
             // console.log(paramString); //phone=...
            var arr=paramString.split("&");//["phone","....."]
            //console.log(arr);
            //如果phone=....& abc=....  这时的分隔符就是 &
            var obj={};
            for(var i=0;i<arr.length;i++){
                var k=arr[i].split("=")[0];
                var v=arr[i].split("=")[1];
                obj[k]=v;

            }
            console.log(obj);
            return obj;
        }
    }
});