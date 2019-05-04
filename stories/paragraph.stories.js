import React from 'react';

import { storiesOf } from '@storybook/react';
import { Paragraph } from '../src/components/paragraph';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const paragraphStories = storiesOf('Paragraph', module);

  paragraphStories.add('Basic paragraph', () => (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Paragraph>
  ));

  paragraphStories.add('Primary paragraph', () => (
    <Paragraph primary>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Paragraph>
  ));

  paragraphStories.add('Light paragraph', () => (
    <Paragraph light>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Paragraph>
  ));
});
