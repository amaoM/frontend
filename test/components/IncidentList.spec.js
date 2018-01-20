import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import IncidentList from '../../src/components/IncidentList';
import Incident from '../../src/components/Incident';

describe('component::IncidentList', () => {
  describe('when IncidentList is renderd', () => {
    it('should be rendered for the number of incidentList', () => {
      const incidentList = [
        {
          id: '1',
          level: 'critical',
          status: 'unsupported',
          title: 'Blah blah blah',
          description: 'Blah blah blah',
          person: 'person',
        },
        {
          id: '2',
          level: 'critical',
          status: 'unsupported',
          title: 'Blah blah blah',
          description: 'Blah blah blah',
          person: 'person',
        },
        {
          id: '3',
          level: 'critical',
          status: 'unsupported',
          title: 'Blah blah blah',
          description: 'Blah blah blah',
          person: 'person',
        },
      ];
      const mockStore = configureMockStore([thunk]);
      const store = mockStore({ incidentList });
      const wrapper = mount(
        <Provider store={store}>
          <IncidentList incidentList={incidentList} />
        </Provider>
      );
      expect(wrapper.find(Incident)).to.have.length(3);
    });
  });
});
