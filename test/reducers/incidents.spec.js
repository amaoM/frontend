import { describe, it } from 'mocha';
import { expect } from 'chai';
import reducer from '../../src/reducers/incidents';
import * as actions from '../../src/actions/incident';

describe('reducers::incidents', () => {
  describe('statusToggle', () => {
    it('指定 id の incident の state の status が up から down になること', () => {
      const initialState = [
        {
          id: 1,
          title: 'title1',
          status: 'up',
          toggleStatus: 'down',
        },
        {
          id: 2,
          title: 'title2',
          status: 'up',
          toggleStatus: 'down',
        },
        {
          id: 3,
          title: 'title3',
          status: 'up',
          toggleStatus: 'down',
        },
      ];
      const state = reducer(initialState, actions.onChangeStatus(1));
      expect(state[0].status).to.be.equal('down');
      expect(state[0].toggleStatus).to.be.equal('up');
    });
    it('指定 id の incident の state の status が down から up になること', () => {
      const initialState = [
        {
          id: 1,
          title: 'title1',
          status: 'down',
          toggleStatus: 'up',
        },
        {
          id: 2,
          title: 'title2',
          status: 'down',
          toggleStatus: 'up',
        },
        {
          id: 3,
          title: 'title3',
          status: 'down',
          toggleStatus: 'up',
        },
      ];
      const state = reducer(initialState, actions.onChangeStatus(1));
      expect(state[0].status).to.be.equal('up');
      expect(state[0].toggleStatus).to.be.equal('down');
    });
  });
});