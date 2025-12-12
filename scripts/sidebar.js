import { navigation, socialMedia } from "../data/sidebarInfo.js";

export function renderNavigation() {
  let HTML = `
    <ul class="nav-list">
      ${navigation.map(item => `<li>
                                  <a href="#${item}">
                                    ${item.toUpperCase()}
                                    <span></span>
                                  </a>
                                </li>`).join("")  
      }
    </ul>
  `;

  document.querySelector('.js-navigation').innerHTML = HTML;
}

export function renderSocialMedais() {
  let HTML = "";
  
  socialMedia.forEach((item) => {
    HTML += `
      <li class="social-icon">
        <a href="${item.link}" target="_blank">
          ${item.icon}
        </a>
        <div class="tooltip">${item.name}</div>
      </li>
    `;
  });

  document.querySelector('.js-icons-flex').innerHTML = HTML;
}