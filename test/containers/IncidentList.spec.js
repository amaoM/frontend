import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import VisibleIncidentList from '../../src/containers/IncidentList';
import IncidentList from '../../src/components/IncidentList';

describe('containers::IncidentList', () => {
  describe('searchIncident', () => {
    describe('when search with keyword', () => {
      const incidentList = [
        {
          title: 'Blah blah blah',
          status: 'unsupported',
          level: 'critical',
          person: 'person',
        }
      ];

      const search = {
        keyword: 'bla',
        status: 'all',
        level: 'all',
      }

      const expected = [
        {
          title: 'Blah blah blah',
          status: 'unsupported',
          level: 'critical',
          person: 'person',
        }
      ];
      it('should render data that include keyword in title', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({ incidentList, search });
        const container = shallow(<VisibleIncidentList />, { context: { store } });
        expect(container.props().incidentList).to.deep.equal(expected);
      });
    });

    describe('when search with each status', () => {
      const incidentList = [
        {
          title: 'Blah blah blah',
          status: 'unsupported',
          level: 'critical',
          person: 'person',
        },
        {
          title: 'Blah blah blah',
          status: 'in_progress',
          level: 'critical',
          person: 'person',
        },
        {
          title: 'Blah blah blah',
          status: 'completed',
          level: 'critical',
          person: 'person',
        }
      ];

      it('should render data that include specified status', () => {
        const mockStore = configureMockStore([thunk]);
        const statusList = [
          'unsupported',
          'in_progress',
          'completed',
        ];
        statusList.forEach(status => {
          const search = {
            keyword: '',
            status: status,
            level: 'all',
          }
          const expected = [
            {
              title: 'Blah blah blah',
              status: status,
              level: 'critical',
              person: 'person',
            }
          ];
          const store = mockStore({ incidentList, search });
          const container = shallow(<VisibleIncidentList />, { context: { store } });
          expect(container.props().incidentList).to.deep.equal(expected);
        });
      });
    });

    describe('when search with each level', () => {
      const incidentList = [
        {
          title: 'Blah blah blah',
          status: 'unsupported',
          level: 'critical',
          person: 'person',
        },
        {
          title: 'Blah blah blah',
          status: 'unsupported',
          level: 'warning',
          person: 'person',
        },
      ];

      it('should render data that include specified level', () => {
        const mockStore = configureMockStore([thunk]);
        const levelList = [
          'critical',
          'warning',
        ];
        levelList.forEach(level => {
          const search = {
            keyword: '',
            status: 'unsupported',
            level: level,
          }
          const expected = [
            {
              title: 'Blah blah blah',
              status: 'unsupported',
              level: level,
              person: 'person',
            }
          ];
          const store = mockStore({ incidentList, search });
          const container = shallow(<VisibleIncidentList />, { context: { store } });
          expect(container.props().incidentList).to.deep.equal(expected);
        });
      });
    });

    describe('when search with multiple conditions', () => {
      const incidentList = [
        {
          title: 'Blah blah blah',
          status: 'unsupported',
          level: 'critical',
          person: 'person',
        },
        {
          title: 'Blah blah blahlah',
          status: 'in_progress',
          level: 'completed',
          person: 'person',
        },
      ];

      it('should render data that applies to all conditions', () => {
        const mockStore = configureMockStore([thunk]);
        const search = {
          keyword: 'hla',
          status: 'all',
          level: 'completed',
        }
        const expected = [
          {
            title: 'Blah blah blahlah',
            status: 'in_progress',
            level: 'completed',
            person: 'person',
          },
        ];
        const store = mockStore({ incidentList, search });
        const container = shallow(<VisibleIncidentList />, { context: { store } });
        expect(container.props().incidentList).to.deep.equal(expected);
      });
    });
  });
});
