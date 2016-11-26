
require.config({
    baseUrl:"./",
    paths:{
        "jquery":"lib/jquery-2.1.1"
    }

});
document.documentElement.style.fontSize=document.documentElement.clientWidth/7.23+"px";
require(["js/first","js/binding","js/swiper","lib/swiper.min","js/upload","js/pic","js/infor","js/number_one","js/choose","js/phoneNumberJson","js/order"]);
