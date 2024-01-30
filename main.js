var img_arr = new Array('yo_img/img_1.jpg','yo_img/img_2.jpg');
console.log(img_arr);
//document.getElementById("y").style.backgroundSize
var yo_page_2_box =document.querySelector(".yo_page_2")
yo_page_2_box.style.backgroundImage=`url(${img_arr[0]})`;
yo_page_2_box.style.backgroundSize=`cover`;




    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
    });
console.log(locoScroll)


