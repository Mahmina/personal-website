import { projectDetails } from "../../data/projectDetails.js";

export function renderProjects() {
  let HTML = "";

  projectDetails.forEach((project) => {
    HTML += `
      <div class="project-grid">
        <div class="project-pic">
          <img
            src="${project.image.src}"
            alt="${project.image.alt}"
          />
        </div>
        <div class="project-details">
          <div>
            <p class="project-title">
              <a href="${project.gitHubLink}"
                >${project.name}</a
              >
            </p>
          </div>
          <div class="description">
            <p class="project-description">
              ${project.description}
            </p>
          </div>
          <div>
            <ul class="tech-stack">
              ${project.techStack
              .map(item => `<li>${item}</li>`)
              .join("")}
            </ul>
          </div>
        </div>
      </div> 
    `;
  });

  document.querySelector('.js-project-grid').innerHTML = HTML;
}