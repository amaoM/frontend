import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import IncidentTimeLine from '../../src/components/IncidentTimeLine';
import IncidentTimeLineEvent from '../../src/components/IncidentTimeLineEvent';

describe('component::IncidentTimeLine', () => {
  describe('when IncidentTimeLine is renderd', () => {
    it('should be rendered for the number of incidentTimeLine', () => {
      const incidentTimeLine = [
        { id: 1, timelineDate: '00:00:00', offsetMessage: 'Title: A -> B' },
        {
          id: 2,
          timelineDate: '00:00:00',
          offsetMessage: 'Level: critical -> warning',
        },
        {
          id: 3,
          timelineDate: '00:00:00',
          offsetMessage: 'Status: in_progress -> completed',
        },
      ];
      const mockStore = configureMockStore([thunk]);
      const store = mockStore({ incidentTimeLine });
      const wrapper = mount(
        <Provider store={store}>
          <IncidentTimeLine incidentTimeLine={incidentTimeLine} />
        </Provider>
      );
      expect(wrapper.find(IncidentTimeLineEvent)).to.have.length(3);
    });
  });
});
