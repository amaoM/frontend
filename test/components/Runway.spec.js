import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Runway from '../../src/components/Runway';
import IncidentList from '../../src/components/IncidentList';

describe('component::Runway', () => {
  it('test', () => {
    const incidents = [
      {
        id: 1,
        status: 'up',
        title: 'title1',
        person: 'person1',
        toggleStatus: 'down',
        onChangeStatus: spy(),
      },
      {
        id: 2,
        status: 'up',
        title: 'title2',
        person: 'person1',
        toggleStatus: 'down',
        onChangeStatus: spy(),
      },
      {
        id: 3,
        status: 'up',
        title: 'title3',
        person: 'person1',
        toggleStatus: 'down',
        onChangeStatus: spy(),
      },
    ];
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({ incidents });
    const wrapper = mount(<Provider store={store}><Runway /></Provider>);
    expect(wrapper.find(IncidentList)).to.have.length(1);
  });
});
