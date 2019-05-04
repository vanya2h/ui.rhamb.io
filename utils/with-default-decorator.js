import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { addDecorator } from '@storybook/react';
import { theme } from '../src/providers/theme-provider';
import { defaultTheme } from '../src/themes/default';
import helveticaNeueLight from '../src/assets/fonts/HelveticaNeueLight.woff';
import helveticaNeueBold from '../src/assets/fonts/HelveticaNeueBold.woff';
import { fontInjector } from '../src/business/font-injector';

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

const ComponentWithTheme = ({ createStories }) => {
  useEffect(() => {
    fontInjector.inject(helveticaFonts);
  }, [0]);

  return (
    <theme.ThemeProvider
      defaultTheme="default"
      themes={{
        default: defaultTheme,
      }}
    >
      {createStories()}
    </theme.ThemeProvider>
  );
};

ComponentWithTheme.propTypes = {
  createStories: PropTypes.func.isRequired,
};

export const withDefaultDecorator = (createStory) => {
  addDecorator((createStories) => (
    <ComponentWithTheme createStories={createStories} />
  ));

  createStory();
};
