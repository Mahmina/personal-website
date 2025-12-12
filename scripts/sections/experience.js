import { jobDetails } from "../../data/experienceDetails.js";

export function renderJobExperiences() {
  let HTML = "";

  jobDetails.forEach((job) => {
    HTML += `
       <div class="experience-grid">
        <div class="experience-time">
          <p>${job.duration}</p>
        </div>
        <div class="experience-details">
          <div>
            <p class="job-title">
              <a href="${job.link}" target="_blank"
                >${job.title}</a
              >
            </p>
          </div>
          <div>
            <p class="job-description">
              ${job.description}
            </p>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-experience-grid').innerHTML = HTML;
}