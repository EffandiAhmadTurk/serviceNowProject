const initCalendly = () => {
  // Javascript
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  document.head.appendChild(script);
  // Styling
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://assets.calendly.com/assets/external/widget.css';
  document.head.appendChild(link);
};

document.addEventListener('DOMContentLoaded', () => {
  /** init gtm after 3500 seconds - this could be adjusted */
  setTimeout(() => {
    initCalendly();
  }, 3500);
});
