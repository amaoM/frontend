import { describe, it } from 'mocha';
import { expect } from 'chai';
import reducer from '../../src/reducers/incident';
import * as actions from '../../src/actions/searchIncident';

describe('reducers::incident', () => {
  describe('statusToggle', () => {
    it('status: up -> down、toggleStatus: down -> up になること', () => {
      const initialState = {
        id: 1,
        status: 'up',
        toggleStatus: 'down',
      };
      const state = reducer(initialState, actions.onChangeStatus(1));
      expect(state.id).to.be.equal(1);
      expect(state.status).to.be.equal('down');
      expect(state.toggleStatus).to.be.equal('up');
    });
    it('status: down -> up、toggleStatus: up -> down になること', () => {
      const initialState = {
        id: 1,
        status: 'down',
        toggleStatus: 'up',
      };
      const state = reducer(initialState, actions.onChangeStatus(1));
      expect(state.id).to.be.equal(1);
      expect(state.status).to.be.equal('up');
      expect(state.toggleStatus).to.be.equal('down');
    });
  });
});
