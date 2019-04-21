import React from 'react';

import { storiesOf } from '@storybook/react';
import { Input } from '~/components/input';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const inputStories = storiesOf('Input', module);

  inputStories.add('Input simple', () => (
    <Input type="text" placeholder="Enter some text" />
  ));

  inputStories.add('Input fluid', () => (
    <Input type="text" placeholder="Enter some text" fluid />
  ));
});
