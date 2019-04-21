import React from 'react';

import { storiesOf } from '@storybook/react';
import { Text } from '~/components/text';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const paragraphStories = storiesOf('Text', module);

  paragraphStories.add('Basic text', () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
  ));

  paragraphStories.add('Light text', () => (
    <Text light>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
  ));
});
