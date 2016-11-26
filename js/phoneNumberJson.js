define(["jquery","js/tool"],function($,tool){
    $.ajax("../data/data.json")
        .done(function(data){
            var res=data.result;
            str="";
            for(var i=0;i<res.length;i++){
                str+='<li>'+res[i].Number+'</li>'
            }
            $(".y_xh_main ul").html(str);
        });
    $(".y_xh_main ul").on("click","li",function(){
        var num=$(this).html();
        var tmp="number_one.html?phone="+num+"&id="+123+"&city="+"南京";
        location.href=encodeURI(tmp);
    });

});