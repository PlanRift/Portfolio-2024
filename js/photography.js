document.addEventListener("DOMContentLoaded", function () {
  CustomEase.create("inOut", "M0,0 C0.7,0 0.198,1 1,1 ");
  CustomEase.create("outSmooth", "M0,0 C0.139,0.336 0.202,1 1,1 ");
  gsap.timeline()
    .to(".overlay", { duration: 2, opacity: 0, ease: "outSmooth", },"+=0.5")
});