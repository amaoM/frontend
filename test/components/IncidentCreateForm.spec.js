import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import IncidentCreateForm from '../../src/components/IncidentCreateForm';

describe('component::IncidentCreateForm', () => {
  const incidentCreateFormProps = {
    incidentCreateForm: {
      id: '1',
      title: '',
      level: 'critical',
      status: 'unsupported',
      description: '',
      person: '',
      validationResult: {
        totalResult: false,
      },
    },
    updateIncidentCreateForm: spy(),
    addIncident: spy(),
  };
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});
  const component = mount(
    <Provider store={store}>
      <IncidentCreateForm { ...incidentCreateFormProps }/>
    </Provider>
  );
  describe('About updateIncidentCreateForm action', () => {
    it('should call updateIncidentCreateForm at once when the title filed is changed', () => {
      component.find('[name="title"]').simulate('change', {target: {value: 'New Incident'}});
      expect(incidentCreateFormProps.updateIncidentCreateForm.calledOnce).to.equal(true);
    });
    it('should call updateIncidentCreateForm at once when the status filed is changed', () => {
      component.find('[name="status"]').simulate('select', {target: {value: 'in_progress'}});
      expect(incidentCreateFormProps.updateIncidentCreateForm.calledOnce).to.equal(true);
    });
    it('should call updateIncidentCreateForm at once when the level filed is changed', () => {
      component.find('[name="level"]').simulate('select', {target: {value: 'critical'}});
      expect(incidentCreateFormProps.updateIncidentCreateForm.calledOnce).to.equal(true);
    });
  });
});
