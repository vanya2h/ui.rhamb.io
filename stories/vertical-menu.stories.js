import React from 'react';

import { storiesOf } from '@storybook/react';
import { VerticalMenu } from '~/components/vertical-menu';
import { Link } from '~/components/link';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const verticalMenuStories = storiesOf('Vertical menu', module);

  verticalMenuStories.add('Basic vertical menu', () => (
    <VerticalMenu>
      <Link href="#666">
        <VerticalMenu.Item>Home page</VerticalMenu.Item>
      </Link>
      <Link href="#">
        <VerticalMenu.Item>About company</VerticalMenu.Item>
      </Link>
      <Link href="#">
        <VerticalMenu.Item>Contact us</VerticalMenu.Item>
      </Link>
    </VerticalMenu>
  ));
});
