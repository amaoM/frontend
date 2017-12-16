import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import IncidentList from '../../src/components/IncidentContainer';

describe('components::List', () => {
  it('test', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});
    const wrapper = mount(<Provider store={store}><IncidentTop /></Provider>);
    expect(wrapper.find(IncidentList)).to.have.length(1);
  });
})

