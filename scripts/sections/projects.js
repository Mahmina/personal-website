import { projectDetails } from "../../data/projectDetails.js";

export function renderProjects() {
  let HTML = "";

  projectDetails.forEach((project, index) => {
    if (index < 3) {
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
                <a href="${project.gitHubLink}" target="_blank"
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
    }    
  });
  document.querySelector('.js-project-grid').innerHTML = HTML;
}