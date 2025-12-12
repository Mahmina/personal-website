import {setupScrollSpy} from './scrollspy.js';
import { renderProjects } from './sections/projects.js';
import { renderJobExperiences } from './sections/experience.js';
import { renderEducation } from './sections/education.js';
import { renderSkills } from './sections/skills.js';
import { renderNavigation, renderSocialMedais } from './sidebar.js';

renderProjects();
renderJobExperiences();
renderEducation();
renderSkills();
renderNavigation();
renderSocialMedais();

setupScrollSpy(document.querySelector('.navigation'));

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.setProperty("--mouse-x", `${e.clientX}px`);
  glow.style.setProperty("--mouse-y", `${e.clientY}px`);
});
