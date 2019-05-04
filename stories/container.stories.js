import React from 'react';

import { storiesOf } from '@storybook/react';
import { Container } from '../src/components/container';
import { Paragraph } from '../src/components/paragraph';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const containerStories = storiesOf('Container', module);

  containerStories.add('Basic container', () => (
    <Container>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        excepturi veritatis cupiditate adipisci maxime autem reiciendis corporis
        eveniet cum eum voluptas pariatur libero, veniam natus voluptatum eaque,
        possimus eligendi dignissimos?
      </Paragraph>
    </Container>
  ));
});
