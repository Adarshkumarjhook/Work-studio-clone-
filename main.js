var img_arr = new Array('yo_img/img_1.jpg', 'yo_img/img_2.jpg');
//document.getElementById("y").style.backgroundSize
var yo_page_2_box = document.querySelector(".yo_page_2")
yo_page_2_box.style.backgroundImage = `url(${img_arr[0]})`;
yo_page_2_box.style.backgroundSize = `cover`;


/* ___________ */

var tl = gsap.timeline();
tl.to(".yellow_box_2", {
  top: '-100%',
  duration: 0.5,
}).from(".yellow_box_1", {
  top: '100%',
  duration: 0.5,
  delay: 1,
},"s").to('.loader', {
  display: "none",
  delay: "6s",

})
tl.from('.loader',{
    color: 'white',
},"s")










// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});