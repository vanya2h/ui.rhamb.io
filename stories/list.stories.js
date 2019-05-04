import React from 'react';

import { storiesOf } from '@storybook/react';
import { List } from '../src/components/list';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const listStories = storiesOf('List', module);

  listStories.add('Basic list', () => (
    <List>
      <List.Item>Lorem ipsum dolor sit amet</List.Item>
      <List.Item>Consectetur adipiscing elit</List.Item>
    </List>
  ));

  listStories.add('Numbered list', () => (
    <List numbered>
      <List.Item>Lorem ipsum dolor sit amet</List.Item>
      <List.Item>Consectetur adipiscing elit</List.Item>
    </List>
  ));
});
