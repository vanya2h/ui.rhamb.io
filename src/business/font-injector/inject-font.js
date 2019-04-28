export const injectFont = (fonts) => {
  return Promise.all(fonts.map((font) => font.load())).then(() => {
    fonts.forEach((font) => {
      document.fonts.add(font);
    });
    document.body.classList.add('font-loaded');
  });
};
