import React from 'react';

import { storiesOf } from '@storybook/react';
import { ProgressiveRender } from '../src/components/progressive-render';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const progressiveRenderStories = storiesOf('Progressive render', module);

  progressiveRenderStories.add('Basic progressive-render', () => (
    <ProgressiveRender
      options={{
        mobile: {
          render: () => 'Mobile',
        },
        desktop: {
          render: () => 'Desktop',
        },
      }}
    />
  ));
});
