import { describe, it } from 'mocha';
import { expect } from 'chai';
import reducer from '../../src/modules/incidentList';

describe('modules::incidentList', () => {
  const state = [
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
  ];
  describe('when the action type is ADD_INCIDENT', () => {
    it('should be added a incident to a incident list', () => {
      const action = {
        incidentCreateForm: {
          id: '3',
          level: 'critical',
          status: 'unsupported',
          title: 'Blah blah blah',
          description: 'Blah blah blah',
          person: 'person',
        },
        type: 'ADD_INCIDENT',
      };
      const expected = [
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
      expect(reducer(state, action)).to.deep.equal(expected);
    });
  });
  describe('when the action type is UPDATE_INCIDENT', () => {
    it('should be updated selected incident', () => {
      const action = {
        incidentEditForm: {
          id: '2',
          level: 'warning',
          status: 'completed',
          title: 'Blah blah blah blah',
          description: 'Blah blah blah blah',
          person: 'person man',
        },
        type: 'UPDATE_INCIDENT',
      };
      const expected = [
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
          level: 'warning',
          status: 'completed',
          title: 'Blah blah blah blah',
          description: 'Blah blah blah blah',
          person: 'person man',
        },
      ];
      expect(reducer(state, action)).to.deep.equal(expected);
    });
  });
});
