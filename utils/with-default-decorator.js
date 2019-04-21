import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '~/providers/theme-provider';
import { injectHelvetica } from '~/business/helvetica-injector';
import { App } from '~/fixtures/app';
import { defaultTheme } from '~/themes/default';

export const withDefaultDecorator = (createStory) => {
  addDecorator((createStories) => (
    <ThemeProvider
      defaultTheme="default"
      onMount={() => {
        injectHelvetica();
      }}
      themes={{
        default: defaultTheme,
      }}
    >
      <App>{createStories()}</App>
    </ThemeProvider>
  ));

  createStory();
};
