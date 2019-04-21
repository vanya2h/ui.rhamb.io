import React from 'react';

import { storiesOf } from '@storybook/react';
import { Code } from '~/components/code';
import { Paragraph } from '~/components/paragraph';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const headingStories = storiesOf('Code', module);

  headingStories.add('Basic code', () => (
    <Paragraph>
      Hello, this is my code <Code>const PI = 3.14</Code>
      <br />
      Lorem ipsum dolor sit amet, consectetur
    </Paragraph>
  ));
});
