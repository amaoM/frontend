import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import VisibleIncidentList from '../../src/containers/IncidentList';

describe('containers::IncidentList', () => {
  describe('when search with keyword', () => {
    const incidentList = [
      {
        id: '1',
        title: 'Blah blah blah',
        status: 'unsupported',
        level: 'critical',
        description: 'Blah blah blah',
        person: 'person',
      },
    ];

    const incidentSearchForm = {
      keyword: 'bla',
      status: 'all',
      level: 'all',
    };

    const expected = [
      {
        id: '1',
        title: 'Blah blah blah',
        status: 'unsupported',
        level: 'critical',
        description: 'Blah blah blah',
        person: 'person',
      },
    ];
    it('should render data that include keyword in title', () => {
      const mockStore = configureMockStore([thunk]);
      const store = mockStore({ incidentList, incidentSearchForm });
      const container = shallow(<VisibleIncidentList />, {
        context: { store },
      });
      expect(container.props().incidentList).to.deep.equal(expected);
    });
  });

  describe('when search with each status', () => {
    const incidentList = [
      {
        id: '1',
        title: 'Blah blah blah',
        status: 'unsupported',
        level: 'critical',
        description: 'Blah blah blah',
        person: 'person',
      },
      {
        id: '2',
        title: 'Blah blah blah',
        status: 'in_progress',
        level: 'critical',
        description: 'Blah blah blah',
        person: 'person',
      },
      {
        id: '3',
        title: 'Blah blah blah',
        status: 'completed',
        level: 'critical',
        description: 'Blah blah blah',
        person: 'person',
      },
    ];

    it('should render data that include specified status', () => {
      const mockStore = configureMockStore([thunk]);
      const statusList = [
        ['1', 'unsupported'],
        ['2', 'in_progress'],
        ['3', 'completed'],
      ];
      statusList.forEach(row => {
        const incidentSearchForm = {
          keyword: '',
          status: row[1],
          level: 'all',
        };
        const expected = [
          {
            id: row[0],
            title: 'Blah blah blah',
            status: row[1],
            level: 'critical',
            description: 'Blah blah blah',
            person: 'person',
          },
        ];
        const store = mockStore({ incidentList, incidentSearchForm });
        const container = shallow(<VisibleIncidentList />, {
          context: { store },
        });
        expect(container.props().incidentList).to.deep.equal(expected);
      });
    });
  });

  describe('when search with each level', () => {
    const incidentList = [
      {
        id: '1',
        title: 'Blah blah blah',
        status: 'unsupported',
        level: 'critical',
        description: 'Blah blah blah',
        person: 'person',
      },
      {
        id: '2',
        title: 'Blah blah blah',
        status: 'unsupported',
        level: 'warning',
        description: 'Blah blah blah',
        person: 'person',
      },
    ];

    it('should render data that include specified level', () => {
      const mockStore = configureMockStore([thunk]);
      const levelList = [['1', 'critical'], ['2', 'warning']];
      levelList.forEach(row => {
        const incidentSearchForm = {
          keyword: '',
          status: 'unsupported',
          level: row[1],
        };
        const expected = [
          {
            id: row[0],
            title: 'Blah blah blah',
            status: 'unsupported',
            level: row[1],
            description: 'Blah blah blah',
            person: 'person',
          },
        ];
        const store = mockStore({ incidentList, incidentSearchForm });
        const container = shallow(<VisibleIncidentList />, {
          context: { store },
        });
        expect(container.props().incidentList).to.deep.equal(expected);
      });
    });
  });

  describe('when search with multiple conditions', () => {
    const incidentList = [
      {
        id: '1',
        title: 'Blah blah blah',
        status: 'unsupported',
        level: 'critical',
        description: 'Blah blah blah',
        person: 'person',
      },
      {
        id: '2',
        title: 'Blah blah blahlah',
        status: 'in_progress',
        level: 'completed',
        description: 'Blah blah blah',
        person: 'person',
      },
    ];

    it('should render data that applies to all conditions', () => {
      const mockStore = configureMockStore([thunk]);
      const incidentSearchForm = {
        keyword: 'hla',
        status: 'all',
        level: 'completed',
      };
      const expected = [
        {
          id: '2',
          title: 'Blah blah blahlah',
          status: 'in_progress',
          level: 'completed',
          description: 'Blah blah blah',
          person: 'person',
        },
      ];
      const store = mockStore({ incidentList, incidentSearchForm });
      const container = shallow(<VisibleIncidentList />, {
        context: { store },
      });
      expect(container.props().incidentList).to.deep.equal(expected);
    });
  });
});
