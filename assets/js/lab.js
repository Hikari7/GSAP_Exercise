window.addEventListener("load", revealAnimation);

function revealAnimation() {
  const Timeline = gsap.timeline();

  Timeline.from(".nav", { autoAlpha: 0, x: -50 })
    .from(".title", { autoAlpha: 0, y: 50 })
    .from(".sub", { autoAlpha: 0, y: 50 })
    .from(".beer", { autoAlpha: 0, y: -500 });
}

//autoAlpha: opacity 0 to opacity1
