document.addEventListener(
  "DOMContentLoaded",
  function () {
    particlesJS("particles-js", {
      particles: {
        number: { value: 130, density: { enable: 1, value_area: 800 } },
        color: { value: "#CCCCCC" },
        shape: {
          type: "polygon",
          stroke: { width: 0, color: "#CCCCCC" },
          polygon: { nb_sides: 6 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: 1,
          anim: { enable: 0, speed: 1, opacity_min: 0.1, sync: 1 },
        },
        size: {
          value: 3,
          random: 1,
          anim: {
            enable: 1,
            speed: 1,
            size_min: 2,
            sync: 0,
          },
        },
        line_linked: {
          enable: 1,
          distance: 150,
          color: "#CCCCCC",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: 1,
          speed: 1.5,
          direction: "none",
          random: 1,
          straight: 0,
          out_mode: "bounce",
          bounce: 0,
          attract: { enable: 0, rotateX: 600, rotateY: 1200 },
        },
        nb: 80,
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: 0 },
          onclick: { enable: 0 },
          resize: 1,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: 1,
    });
  },
  !1
);
