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
              mobile: {
                width: 6,
              },
              tv: {
                width: 3,
              },
            }}
          >
            <div style={{ color: 'white', background: 'blue' }}>
              This should be 1 on Desktop
            </div>
          </Grid.Column>
          <Grid.Column
            options={{
              mobile: {
                width: 6,
              },
              tv: {
                width: 3,
              },
            }}
          >
            <div style={{ color: 'white', background: 'blue' }}>
              This should be 1 on Mobile!
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  ));
});
