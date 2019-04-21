import React from 'react';

import { storiesOf } from '@storybook/react';
import { HorizontalMenu } from '~/components/horizontal-menu';
import { Link } from '~/components/link';
import logoExample from './assets/logo-example.png';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const horizontalMenuStories = storiesOf('Horizontal menu', module);

  horizontalMenuStories.add('Basic horizontal menu', () => (
    <HorizontalMenu>
      <Link href="#">
        <HorizontalMenu.Item>
          <img src={logoExample} width="20px" />
        </HorizontalMenu.Item>
      </Link>
      <Link href="#">
        <HorizontalMenu.Item>Home page</HorizontalMenu.Item>
      </Link>
      <Link href="#">
        <HorizontalMenu.Item>About company</HorizontalMenu.Item>
      </Link>
      <Link href="#">
        <HorizontalMenu.Item>Contact us</HorizontalMenu.Item>
      </Link>
    </HorizontalMenu>
  ));
});
