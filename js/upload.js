define([],function(){
    if(location.href.indexOf("index")==-1) return;
    var input1=document.querySelector(".input1");
    var input2=document.querySelector(".input2");
    var input3=document.querySelector(".input3");
    var img1=document.querySelector(".imgs1");
    var img2=document.querySelector(".imgs2");
    var img3=document.querySelector(".imgs3");
    var canvas=document.querySelector("canvas");
    var cvs=canvas.getContext("2d");

    input1.addEventListener("change",function(){
        console.log(this.files[0].type);//是个对象 下边有type属性  即toDataURL(image/png,0-1之间的数)
        var type=this.files[0].type;

        //转换成DataURL  用fileReader的readAsDataURL()方法
        var reader=new FileReader();
        var image=new Image();
        reader.readAsDataURL(this.files[0]);

        reader.onload=function(){
            //  console.log(this.result); 图片的编码
            img1.src = this.result;//编码可作为图片的src属性
            image.src=this.result;
            canvas.width=image.width;
            canvas.height=image.height;
            cvs.drawImage(image,0,0,image.width,image.height);

            //压缩图片  canvas的toDataURL()方法  压缩后的作为img的src
            // console.log(canvas.toDataURL(type,0.5));

            img1.src=canvas.toDataURL(type,0.5);

        };
    });
    input2.addEventListener("change",function(){
        console.log(this.files[0].type);//是个对象 下边有type属性  即toDataURL(image/png,0-1之间的数)
        var type=this.files[0].type;

        //转换成DataURL  用fileReader的readAsDataURL()方法
        var reader=new FileReader();
        var image=new Image();
        reader.readAsDataURL(this.files[0]);

        reader.onload=function(){
            //  console.log(this.result); 图片的编码
            img2.src = this.result;//编码可作为图片的src属性
            image.src=this.result;
            canvas.width=image.width;
            canvas.height=image.height;
            cvs.drawImage(image,0,0,image.width,image.height);

            //压缩图片  canvas的toDataURL()方法  压缩后的作为img的src
            // console.log(canvas.toDataURL(type,0.5));

            img2.src=canvas.toDataURL(type,0.5);

        };
    });
    input3.addEventListener("change",function(){
        console.log(this.files[0].type);//是个对象 下边有type属性  即toDataURL(image/png,0-1之间的数)
        var type=this.files[0].type;

        //转换成DataURL  用fileReader的readAsDataURL()方法
        var reader=new FileReader();
        var image=new Image();
        reader.readAsDataURL(this.files[0]);

        reader.onload=function(){
            //  console.log(this.result); 图片的编码
            img3.src = this.result;//编码可作为图片的src属性
            image.src=this.result;
            canvas.width=image.width;
            canvas.height=image.height;
            cvs.drawImage(image,0,0,image.width,image.height);

            //压缩图片  canvas的toDataURL()方法  压缩后的作为img的src
            // console.log(canvas.toDataURL(type,0.5));

            img3.src=canvas.toDataURL(type,0.5);

        };
    });
});