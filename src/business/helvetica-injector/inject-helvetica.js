import helveticaNeueLight from './assets/HelveticaNeueLight.woff';
import helveticaNeueBold from './assets/HelveticaNeueBold.woff';

export const injectHelvetica = () => {
  const helveticaFonts = [
    new FontFace('Helvetica Neue', `url(${helveticaNeueLight})`, {
      style: 'normal',
      weight: '400',
    }),
    new FontFace('Helvetica Neue', `url(${helveticaNeueBold})`, {
      style: 'normal',
      weight: '800',
    }),
  ];

  return Promise.all(helveticaFonts.map((font) => font.load())).then(() => {
    helveticaFonts.forEach((font) => {
      document.fonts.add(font);
    });
    document.body.classList.add('helvetica-loaded');
  });
};
