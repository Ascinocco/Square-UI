import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Icon from '../index';

const getIcon = () => (
  <Icon
    name={'linkedin'}
  />
);

describe('Icon', () => {
  it('renders without crashing', () => {
    mount(getIcon());
  });

  it('matches the snapshot', () => {
    const rendered = renderer.create(getIcon());
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
