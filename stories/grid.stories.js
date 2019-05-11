import React from 'react';

import { storiesOf } from '@storybook/react';
import { Grid } from '../src/components/grid';
import { Container } from '../src/components/container';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const gridStories = storiesOf('Grid', module);

  gridStories.add('Basic grid', () => (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column
            options={{
              mobile: 2,
              tablet: 3,
              desktop: 2,
              tv: 1,
            }}
          >
            <div style={{ background: 'blue' }}>Hello world</div>
          </Grid.Column>
          <Grid.Column
            options={{
              mobile: 8,
              tablet: 6,
              desktop: 8,
              tv: 10,
            }}
            offset={{
              tv: 5,
              mobile: 1,
            }}
          >
            <div style={{ background: 'blue' }}>Hello world</div>
          </Grid.Column>
          <Grid.Column
            options={{
              mobile: 2,
              tablet: 3,
              desktop: 2,
              tv: 1,
            }}
          >
            <div style={{ background: 'blue' }}>Hello world</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  ));
});
