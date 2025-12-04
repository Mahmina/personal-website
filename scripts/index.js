import {setupScrollSpy} from './scrollspy.js';

setupScrollSpy(document.querySelector('.navigation'));



const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.setProperty("--mouse-x", `${e.clientX}px`);
  glow.style.setProperty("--mouse-y", `${e.clientY}px`);
});