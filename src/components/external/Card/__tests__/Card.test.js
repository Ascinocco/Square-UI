import React from 'react';
// import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Card from '../index';

const getDefaultCard = (
  <Card />
);

const getRaisedCard = (
  <Card raised />
);

const getLinkCard = (
  <Card
    href={'https://google.com/'}
  />
);

const getButtonCard = (
  <Card
    onClick={() => {}}
  />
);

describe('SettingsSidebarAvailabilitiesList', () => {
  it('it renders a default card without crashing', () => {
    const component = mount(getDefaultCard);
    expect(component);
  });

  it('it renders a raised card without crashing', () => {
    const component = mount(getRaisedCard);
    expect(component);
  });

  it('it renders a link card without crashing', () => {
    const component = mount(getLinkCard);
    expect(component);
  });

  it('it renders a button card without crashing', () => {
    const component = mount(getButtonCard);
    expect(component);
  });
});
