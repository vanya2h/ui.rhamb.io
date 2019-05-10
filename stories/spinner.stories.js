import React from 'react';

import { storiesOf } from '@storybook/react';
import { Spinner } from '../src/components/spinner';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const spinnerStories = storiesOf('Spinner', module);

  spinnerStories.add('Basic spinner', () => <Spinner />);
});
