import { describe, it } from 'mocha';
import { expect } from 'chai';
import reducer from '../../src/modules/incidentCreateForm';

describe('reducers::incidentCreateForm', () => {
  describe('when the action type is UPDATE_INCIDENT_CREATE_FORM and some values are empty', () => {
    it('should be set inputed values and validation result is false', () => {
      const state = {
        id: '1',
        title: '',
        level: 'critical',
        status: 'unsupported',
        description: '',
        person: '',
        validationResult: {
          totalResult: false,
        },
      };
      const action = {
        event: {
          target: {
            name: 'title',
            value: 'V',
          },
        },
        type: 'UPDATE_INCIDENT_CREATE_FORM',
      };
      const expected = {
        id: '1',
        title: 'V',
        level: 'critical',
        status: 'unsupported',
        description: '',
        person: '',
        validationResult: {
          title: true,
          level: true,
          status: true,
          description: false,
          person: false,
          totalResult: false,
        },
      };
      expect(reducer(state, action)).to.deep.equal(expected);
    });
  });
  describe('when the action type is UPDATE_INCIDENT_CREATE_FORM and all fields are inputed', () => {
    it('should be set inputed values and validation result is true', () => {
      const state = {
        id: '1',
        title: 'Blah blah blah',
        level: 'critical',
        status: 'unsupported',
        description: 'Blah blah blah',
        person: '',
        validationResult: {
          totalResult: false,
        },
      };
      const action = {
        event: {
          target: {
            name: 'person',
            value: 'P',
          },
        },
        type: 'UPDATE_INCIDENT_CREATE_FORM',
      };
      const expected = {
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
          totalResult: true,
        },
      };
      expect(reducer(state, action)).to.deep.equal(expected);
    });
  });
});
