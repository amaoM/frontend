import { describe, it } from 'mocha';
import { expect } from 'chai';
import reducer from '../../src/modules/incidentEditForm';

describe('reducers::incidentEditForm', () => {
  describe('when UPDATE_INCIDENT_EDIT_FORM action is excuted and state of the incident edit form is updated', () => {
    it('should be set true in totalResult and the target field is updated', () => {
      const state = {
        id: '1',
        title: 'Blah blah blah',
        level: 'critical',
        status: 'unsupported',
        description: 'Blah blah blah',
        person: 'person',
        validationResult: {
          title: true,
          level: true,
          status: true,
          description: true,
          person: true,
        },
        disabledEditButton: false,
      };
      const action = {
        event: {
          persist: () => {},
          target: {
            name: 'status',
            value: 'completed',
          },
        },
        type: 'UPDATE_INCIDENT_EDIT_FORM',
        initialIncident: {
          id: '1',
          title: 'Blah blah blah',
          level: 'critical',
          status: 'unsupported',
          description: 'Blah blah blah',
          person: 'person',
          validationResult: {
            title: true,
            level: true,
            status: true,
            description: true,
            person: true,
          },
          disabledEditButton: true,
        },
      };
      const expected = {
        id: '1',
        title: 'Blah blah blah',
        level: 'critical',
        status: 'completed',
        description: 'Blah blah blah',
        person: 'person',
        validationResult: {
          title: true,
          level: true,
          status: true,
          description: true,
          person: true,
        },
        disabledEditButton: false,
      };
      expect(reducer(state, action)).to.deep.equal(expected);
    });
  });
  describe('when UPDATE_INCIDENT_EDIT_FORM action is excuted but some fields are empty', () => {
    it('should be set inputed values and validation result is false', () => {
      const state = {
        id: '1',
        title: 'Blah blah blah',
        level: 'critical',
        status: 'unsupported',
        description: 'Blah blah blah',
        person: 'P',
        validationResult: {
          title: true,
          level: true,
          status: true,
          description: true,
          person: true,
        },
        disabledEditButton: false,
      };
      const action = {
        event: {
          persist: () => {},
          target: {
            name: 'person',
            value: '',
          },
        },
        type: 'UPDATE_INCIDENT_EDIT_FORM',
        initialIncident: {
          id: '1',
          title: 'Blah blah blah',
          level: 'critical',
          status: 'unsupported',
          description: 'Blah blah blah',
          person: 'person',
          validationResult: {
            title: true,
            level: true,
            status: true,
            description: true,
            person: true,
          },
          disabledEditButton: false,
        },
      };
      const expected = {
        id: '1',
        title: 'Blah blah blah',
        level: 'critical',
        status: 'unsupported',
        description: 'Blah blah blah',
        person: '',
        validationResult: {
          title: true,
          level: true,
          status: true,
          description: true,
          person: false,
        },
        disabledEditButton: true,
      };
      expect(reducer(state, action)).to.deep.equal(expected);
    });
  });
  describe('when the action type is EDIT_INCIDENT', () => {
    it('should initialize the incident edit form', () => {
      const state = {
        id: '1',
        title: 'Blah blah blah',
        level: 'critical',
        status: 'completed',
        description: 'Blah blah blah',
        person: 'person',
        validationResult: {
          title: true,
          level: true,
          status: true,
          description: true,
          person: true,
        },
        disabledEditButton: false,
      };
      const action = {
        type: 'EDIT_INCIDENT',
        incident: {
          id: '1',
          title: 'Blah blah blah',
          level: 'critical',
          status: 'completed',
          description: 'Blah blah blah',
          person: 'person',
          validationResult: {
            title: true,
            level: true,
            status: true,
            description: true,
            person: true,
          },
          disabledEditButton: false,
        },
      };
      const expected = {
        id: '1',
        title: 'Blah blah blah',
        level: 'critical',
        status: 'completed',
        description: 'Blah blah blah',
        person: 'person',
        validationResult: {
          title: true,
          level: true,
          status: true,
          description: true,
          person: true,
        },
        disabledEditButton: false,
      };
      expect(reducer(state, action)).to.deep.equal(expected);
    });
  });
});
