function homepageAnimation(){
    gsap.set(".slidesm",{scale:5})

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom top",
        pin:true,
        scrub:2
    }
})
tl
.to(".vdodiv",{
    '--clip':"0%",
    ease: Power2, 
    
},'a')
.to(".slidesm",{
    scale:1,
    ease: Power2, 
    
},'a')
.to(".lft",{
    xPercent: -30,
    stagger:.03,
    ease: Power4, 
    
},'b')
.to(".rgt",{
    xPercent: 30,
    stagger:.03,
    ease: Power4, 
    
},'b')
}
function realpageAnimation(){
    gsap.to(".slide", {
        xPercent: -300, 
        ease: "none",
        scrollTrigger: {
            trigger: ".real",
            pin: true,          
            scrub: 1,           
            start: "top top",
            end: "+=3000",       
        }
    })
}

function teamAnimation(){
    document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
        gsap.to(this.querySelector(".picture"),{opacity:1,x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),ease:Power4,duration:.5})
    })
    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".picture"),{opacity:0,ease:Power4,duration:.5})
    })
})
}
function paraAnimation() {
  var clutter = "";
document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e) {
  if (e === " ") clutter += `<span>&nbsp;</span>`;
  else clutter += `<span>${e}</span>`;
});

document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", { opacity: 0.1 });

gsap.to(".textpara span", {
  scrollTrigger: {
    trigger: ".para",
    start: "top 60%",
    end: "bottom 90%",
    scrub: 1
  },
  opacity: 1,
  stagger: 0.03,
  ease: "power4.out"
});

}
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            markers:true,
            scrub:1
        },
        y:0,
        ease: "power4.out"
    })
}
document.querySelectorAll(".section").forEach(function(e) {
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    markers: true,
    onEnter: function() {
      document.body.setAttribute("theme", e.dataset.color);
    },
    onEnterBack: function() {
      document.body.setAttribute("theme", e.dataset.color);
    }
  });
});


/*function capsulesAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".right.capsule:nth-child(2)", { 
    scrollTrigger: {
      trigger: ".right",  
      start: "top 70%",
      end: "bottom bottom",
      markers: true,
      scrub: 1
    },
    y: 0,
    ease: "power4.out"
  });
}*/



homepageAnimation();
realpageAnimation();
teamAnimation();
paraAnimation();
loco();
capsulesAnimation();
