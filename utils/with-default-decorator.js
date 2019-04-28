import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '~/providers/theme-provider';
import { defaultTheme } from '~/themes/default';
import helveticaNeueLight from '~/assets/fonts/HelveticaNeueLight.woff';
import helveticaNeueBold from '~/assets/fonts/HelveticaNeueBold.woff';
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
    <ThemeProvider
      defaultTheme="default"
      themes={{
        default: defaultTheme,
      }}
    >
      {createStories()}
    </ThemeProvider>
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
