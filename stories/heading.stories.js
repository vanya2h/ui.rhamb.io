import React from 'react';

import { storiesOf } from '@storybook/react';
import { Heading } from '~/components/heading';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const headingStories = storiesOf('Heading', module);

  headingStories.add('Basic heading', () => (
    <React.Fragment>
      <Heading size="h1" as="h1">
        This is a sample heading. Hello world
      </Heading>
      <Heading size="h2" as="h2">
        This is a sample heading. Hello world
      </Heading>
      <Heading size="h3" as="h3">
        This is a sample heading. Hello world
      </Heading>
      <Heading size="h4" as="h4">
        This is a sample heading. Hello world
      </Heading>
      <Heading size="h5" as="h5">
        This is a sample heading. Hello world
      </Heading>
      <Heading size="h6" as="h6">
        This is a sample heading. Hello world
      </Heading>
    </React.Fragment>
  ));

  headingStories.add('With `mega` prop', () => (
    <React.Fragment>
      <Heading mega size="h1" as="h1">
        This is a sample heading. Hello world
      </Heading>
      <Heading mega size="h2" as="h2">
        This is a sample heading. Hello world
      </Heading>
      <Heading mega size="h3" as="h3">
        This is a sample heading. Hello world
      </Heading>
      <Heading mega size="h4" as="h4">
        This is a sample heading. Hello world
      </Heading>
      <Heading mega size="h5" as="h5">
        This is a sample heading. Hello world
      </Heading>
      <Heading mega size="h6" as="h6">
        This is a sample heading. Hello world
      </Heading>
    </React.Fragment>
  ));
});
