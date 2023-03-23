gsap.registerPlugin(ScrollTrigger);

// All variables

var navbar = document.getElementById("navbar");
var dropDown = document.querySelector(".dropdown");
var bar = document.querySelector("#navbar .bar");
var heading1 = document.querySelector(".heading_1");
var heading2 = document.querySelector(".heading_2");
var sticky_Nav = navbar.offsetTop;
var sticky_heading1 = heading1.offsetTop;
var sticky_heading2 = heading2.offsetTop;
var backgroundVideo = document.querySelector("video");

// Dropdown

bar.addEventListener("click", dropdown);

function dropdown() {
  navbar.classList.toggle("active");
  dropDown.classList.toggle("active");
  bar.classList.toggle("active");
}
window.onscroll = function () {
  stickyNav();
  stickyHeading1();
  stickyHeading2();
};

// Sticky Navbar and section

function stickyNav() {
  if (window.pageYOffset >= sticky_Nav) {
    navbar.classList.add("sticky");
    backgroundVideo.style.opacity = 0;
  } else {
    navbar.classList.remove("sticky");
    backgroundVideo.style.opacity = 1;
  }
}
function stickyHeading1() {
  if (window.pageYOffset >= sticky_heading1) {
    heading1.classList.add("sticky");
  } else {
    heading1.classList.remove("sticky");
  }
}
function stickyHeading2() {
  if (window.pageYOffset >= sticky_heading2) {
    heading2.classList.add("sticky");
  } else {
    heading2.classList.remove("sticky");
  }
}

// Gsap animation

gsap
  .timeline()
  .to(".letter1", { opacity: 1, delay: 0.5 })
  .to(".animated_line1", { opacity: 1, duration: 0 })
  .to(".animated_line1", { width: "100%" })
  .to(".letter2", { opacity: 1 })
  .to(".banner_title h2", { opacity: 1 })
  .fromTo(".banner_background", { opacity: 0 }, { opacity: 1 });

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#navbar",
    scrub: 2,
    start: "top 90%",
    end: "2800px",
    // markers: true,
    toggleActions: "restart none none none",
  },
});

ScrollTrigger.matchMedia({
  "(min-width: 992px)": function () {
    tl.to(".letter1, .letter2, .banner_title", { opacity: 0 })
      .to(".line_wrapper", { width: "25%" })
      .to(".animated_line1", { backgroundColor: "#8343D8", duration: 1 })
      .to(".animated_line1", {
        backgroundColor: "transparent",
        height: 0,
        border: "10px solid #8343D8",
        duration: 0,
      })
      .to(".letter1, .letter2, .banner_title", { display: "none", duration: 0 })
      .to(".line_wrapper", { width: "900px", duration: 1 })
      .to(".animated_line1", { height: 400, border: 20, duration: 2 }, "<")
      .to(".line_wrapper", {
        width: 400,
        backgroundImage:
          "linear-gradient(45deg, rgba(149,69,251,1) 0%, rgba(235,13,186,1) 100%)",
        duration: 2,
        delay: 2,
      })
      .to(".animated_line1", { borderWidth: 0, duration: 2 }, "<")
      .to(".line_wrapper", {
        width: 20,
        backgroundImage:
          "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
        duration: 2,
        delay: 2,
      })
      .to(".animated_line2", { opacity: 1, delay: 0.5 })
      .to(".animated_line2", { width: 400 })
      .to(".animated_line1", { height: 0, delay: 0.5 })
      .to(".animated_line1", { opacity: 0 }, ">")
      .to(".animated_line2", { width: 0, delay: 0.5 })
      .to(".animated_line2", { opacity: 0 }, ">");
  },
  "(min-width: 481px) and (max-width: 991px)": function () {
    tl.to(".letter1, .letter2, .banner_title", { opacity: 0 })
      .to(".line_wrapper", { width: "50%" })
      .to(".animated_line1", { backgroundColor: "#8343D8", duration: 1 })
      .to(".animated_line1", {
        backgroundColor: "transparent",
        height: 0,
        border: "10px solid #8343D8",
        duration: 0,
      })
      .to(".letter1, .letter2, .banner_title", { display: "none", duration: 0 })
      .to(".line_wrapper", { width: "100%", duration: 1 })
      .to(".animated_line1", { height: 250, border: 10, duration: 1 }, "<")
      .to(".line_wrapper", {
        width: 350,
        backgroundImage:
          "linear-gradient(45deg, rgba(149,69,251,1) 0%, rgba(235,13,186,1) 100%)",
        duration: 2,
        delay: 2,
      })
      .to(".animated_line1", { height: 350, borderWidth: 0, duration: 2 }, "<")
      .to(".line_wrapper", {
        width: 10,
        backgroundImage:
          "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
        duration: 2,
        delay: 1,
      })
      .to(".animated_line1", { height: 250, duration: 2 }, "<")
      .to(".animated_line2", { opacity: 1, delay: 0.5 })
      .to(".animated_line2", { width: 250 })
      .to(".animated_line1", { height: 0, delay: 0.5 })
      .to(".animated_line1", { opacity: 0 }, ">")
      .to(".animated_line2", { width: 0, delay: 0.5 })
      .to(".animated_line2", { opacity: 0 }, ">");
  },
  "(max-width: 480px)": function () {
    tl.to(".letter1, .letter2, .banner_title", { opacity: 0 })
      .to(".line_wrapper", { width: "50%" })
      .to(".animated_line1", { backgroundColor: "#8343D8", duration: 1 })
      .to(".animated_line1", {
        backgroundColor: "transparent",
        height: 0,
        border: "10px solid #8343D8",
        duration: 0,
      })
      .to(".letter1, .letter2, .banner_title", { display: "none", duration: 0 })
      .to(".line_wrapper", { width: "100%", duration: 1 })
      .to(".animated_line1", { height: 200, border: 10, duration: 1 }, "<")
      .to(".line_wrapper", {
        width: 200,
        backgroundImage:
          "linear-gradient(45deg, rgba(149,69,251,1) 0%, rgba(235,13,186,1) 100%)",
        duration: 2,
        delay: 2,
      })
      .to(".animated_line1", { borderWidth: 0, duration: 2 }, "<")
      .to(".line_wrapper", {
        width: 10,
        backgroundImage:
          "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
        duration: 2,
        delay: 1,
      })
      .to(".animated_line1", { height: 200, duration: 2 }, "<")
      .to(".animated_line2", { opacity: 1, delay: 0.5 })
      .to(".animated_line2", { width: 200 })
      .to(".animated_line1", { height: 0, delay: 0.5 })
      .to(".animated_line1", { opacity: 0 }, ">")
      .to(".animated_line2", { width: 0, delay: 0.5 })
      .to(".animated_line2", { opacity: 0 }, ">");
  },
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".section_5",
    scrub: 2,
    start: "top 0",
    end: "top 0",
    toggleActions: "restart none none none",
    onEnter: () => navbar.classList.add("navbar_light"),
    onEnterBack: () => navbar.classList.remove("navbar_light"),
  },
});
