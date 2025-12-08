export function setupScrollSpy(element) {
  const links = Array.from(element.querySelectorAll('a[href^="#"]'));
  const sections = Array.from(document.querySelectorAll('[data-section-id]'));

  let clickLock = false;
  
  const observer = new IntersectionObserver(onIntersection, {
    threshold: [0.5, 1]
  });

  sections.forEach((section) => {
    observer.observe(section);
  });

  function onIntersection(entries) {
     if (clickLock) return;

    entries.forEach((entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        const sectionId = `#${section.dataset.sectionId}`;
        const link = links.find((link) => link.getAttribute('href') === sectionId);

        highlightLink(link);
        history.pushState(null, null, sectionId);

      }
    }));
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