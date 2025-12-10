export function setupScrollSpy(element) {
  const links = Array.from(element.querySelectorAll('a[href^="#"]'));
  const sections = Array.from(document.querySelectorAll('[data-section-id]'));

  let clickLock = false;
  
  const sectionRatios = new Map();
  
  const observer = new IntersectionObserver(onIntersection, {
    threshold: [0, 0.5, 1] 
  });

  sections.forEach((section) => {
    observer.observe(section);
    sectionRatios.set(section, 0);
  });

  function onIntersection(entries) {
     if (clickLock) return;

    entries.forEach((entry => {
      sectionRatios.set(entry.target, entry.intersectionRatio);
    }));

    let maxRatio = 0;
    let bestSection = null;

    sectionRatios.forEach((ratio, section) => {
      if (ratio > maxRatio) {
        maxRatio = ratio;
        bestSection = section;
      }
    });

    if (bestSection && maxRatio > 0) {
      const sectionId = `#${bestSection.dataset.sectionId}`;
      const link = links.find((link) => link.getAttribute('href') === sectionId);

      if (link) {
        highlightLink(link);
        history.pushState(null, null, sectionId);
      }
    }
  }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const sectionId = link.getAttribute('href');
      history.pushState(null, null, sectionId);

      const section = sections.find(section => `#${section.dataset.sectionId}` === sectionId);

      clickLock = true;
      highlightLink(link);
 
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });

      setTimeout(() => {
        clickLock = false;
      }, 600); 
    });
  });

  function highlightLink(targetLink) {
    links.forEach((link) => {
      if (link === targetLink) {
        link.classList.add('highlighted');
      } else {
        link.classList.remove('highlighted');
      }
    });
  }
}