document.addEventListener("DOMContentLoaded", function() {
    CustomEase.create("inOut", "M0,0 C0.7,0 0.198,1 1,1 ");
    CustomEase.create("outSmooth", "M0,0 C0.139,0.336 0.202,1 1,1 ");
    gsap.timeline()
      .to(".preloader-text-1", {duration: 2, opacity: 1, y: -50, ease: "inOut",})
      .to(".preloader-text-2", {duration: 2.3, opacity: 1, y: -50, ease: "inOut",}, "-=1.5")
      .from(".background", {duration: 3,  opacity: 1, y: -1000, ease: "outSmooth"})
      .from(".logo-main", {duration: 3,  opacity: 1, y: -1000, ease: "outSmooth"},"-=3")
      .from(".header-title", {duration: 2.5,  opacity: 1, x: -2000, ease: "outSmooth"}, "-=3")
      .from(".header-title-2", {duration: 2.5,  opacity: 1, x: 2000, ease: "outSmooth"}, "-=3")
      .from(".disclaimer", {duration: 2.5,  opacity: 0, y: -200, ease: "outSmooth"}, "-=1.5")
    //   Bottom Header
      .from(".bottom-header-text", {duration: 2.5,  opacity: 1, y: 1000, ease: "outSmooth"}, "-=3.7")
      .from(".bottom-header-img", {duration: 2.5,  opacity: 1, y: 1000, ease: "outSmooth"}, "-=3.6")
      .from(".bottom-header-desc", {duration: 2.5,  opacity: 1, y: 1000, ease: "outSmooth"}, "-=3.5")

      // drawer

      .from(".drawer", {duration: 2.5,  opacity: 1, y: 1000, ease: "outSmooth"}, "-=3.5")
      .from(".splide", {duration: 2,  opacity: 0, ease: "outSmooth"},"-=1")
  });
