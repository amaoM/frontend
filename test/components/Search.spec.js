import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import Search from '../../src/components/Search';

describe('component::Search', () => {
  it('Create a search component', () => {
    const search = {
      keyword: 'test',
      level: 'critical',
      status: 'in_progress',
    };
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({ search });
    const wrapper = mount(<Provider store={store}><Search search={search} /></Provider>);
    expect(wrapper.find('select[name="level"]')).to.have.length(1);
    expect(wrapper.find('select[name="status"]')).to.have.length(1);
  });
});
