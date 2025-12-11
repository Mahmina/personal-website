import {projectDetails} from '../data/projectDetails.js';

export function renderAllProjects() {
  let HTML = "";

  projectDetails.forEach((project) => {
    HTML += `
      <tr>
        <td>${project.name}</td>
        <td class="tech-stack-column">
          <ul class="tech-stack">
            ${project.techStack
            .map(item => `<li>${item}</li>`)
            .join("")}
          </ul>
        </td>
        <td>
          <a class="project-link" href="${project.gitHubLink}" target="_blank">
            ${project.gitHubLink}
          </a>
        </td>
      </tr>
    `;
  });

  document.querySelector('.table-row').innerHTML = HTML;
}

renderAllProjects();