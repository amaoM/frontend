import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import IncidentList from '../../src/components/IncidentList';
import Incident from '../../src/components/Incident';

describe('component::IncidentList', () => {
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
    const wrapper = mount(<Provider store={store}><IncidentList incidents={incidents} /></Provider>);
    expect(wrapper.find(Incident)).to.have.length(3);
  });
});
