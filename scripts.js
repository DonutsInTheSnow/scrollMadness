window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const fixedBackground = document.querySelector('.fixed-background');
  const scrollOverContent = document.querySelector('.scroll-over-content');
  const scrollOverHeight = scrollOverContent.offsetHeight;

  // When the scroll position reaches the fixed-background, fix it to the top
  if (scrollPosition >= 1500 && scrollPosition < (1500 + scrollOverHeight)) {
    fixedBackground.style.position = 'fixed';
    fixedBackground.style.top = '0';
  } else {
    // Reset the position when not in the range
    if (scrollPosition < 1500) {
      fixedBackground.style.position = 'absolute';
      fixedBackground.style.top = '1500px';
    } else {
      // Hide the background after scrolling past the scroll-over content
      fixedBackground.style.position = 'absolute';
      fixedBackground.style.top = `${1500 + scrollOverHeight}px`;
    }
  }
});







