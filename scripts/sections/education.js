import { educationDetails } from "../../data/educationDetails.js";

export function renderEducation() {
  let HTML = "";

  educationDetails.forEach((education) => {
    HTML += `
       <div class="education-grid">
        <div class="education-time">
          <p>${education.duration}</p>
        </div>
        <div class="education-details">
          <div>
            <p class="education-title">
              ${education.major}
            </p>
          </div>
          <div>
            <p class="education-place">
              <a href="${education.link}" target="_blank"
                >${education.university}</a
              >
            </p>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-education-grid').innerHTML = HTML;
}