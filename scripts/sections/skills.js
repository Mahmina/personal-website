import { skills } from "../../data/skillDetails.js";

export function renderSkills() {
  let HTML = `
    <div class="skill-flex-wrapper">
      <div class="dev-wrapper">
        <h2>DEVELOPMENT</h2>
        <ul class="dev-list">
          ${skills.development
            .map(skill => `<li class="dev-item">${skill}</li>`)
            .join("")  
          }
        </ul>
      </div>
      <div class="tools-wrapper">
        <h2>TOOLS</h2>
        <ul class="tools-list">
          ${skills.tools
            .map(tool => `<li class="tools-item">
                            <span>&check;</span>
                            <span>${tool}</span>
                          </li>`)
            .join("")  
          }
        </ul>
      </div>
    </div>
  `;

  document.querySelector('.js-skill-flex-wrapper').innerHTML = HTML;
}