import React from 'react';
import Rnd from 'react-test-renderer/shallow';
import Home from 'components/tc-communities/communities/wipro/Home';

const rnd = new Rnd();

test('Snapshot match', () => {
  rnd.render((
    <Home />
  ));
  expect(rnd.getRenderOutput()).toMatchSnapshot();
});
