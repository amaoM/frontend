import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
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
      validationResult: {},
      toggleCreateButton: false,
    },
    updateIncidentCreateForm: spy(),
    addIncident: spy(),
  };
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});

  describe('when the title filed is changed', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentCreateForm {...incidentCreateFormProps} />
      </Provider>
    );
    component
      .find('[name="title"]')
      .simulate('change', { target: { value: 'New Incident' } });
    it('should call updateIncidentCreateForm at once', () => {
      expect(
        incidentCreateFormProps.updateIncidentCreateForm.calledOnce
      ).to.equal(true);
    });
  });
  describe('when the status filed is changed', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentCreateForm {...incidentCreateFormProps} />
      </Provider>
    );
    component
      .find('[name="status"]')
      .simulate('select', { target: { value: 'in_progress' } });
    it('should call updateIncidentCreateForm at once', () => {
      expect(
        incidentCreateFormProps.updateIncidentCreateForm.calledOnce
      ).to.equal(true);
    });
  });
  describe('when the level filed is changed', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentCreateForm {...incidentCreateFormProps} />
      </Provider>
    );
    component
      .find('[name="level"]')
      .simulate('select', { target: { value: 'critical' } });
    it('should call updateIncidentCreateForm at once', () => {
      expect(
        incidentCreateFormProps.updateIncidentCreateForm.calledOnce
      ).to.equal(true);
    });
  });
  describe('when the create button is clicked', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentCreateForm {...incidentCreateFormProps} />
      </Provider>
    );
    component
      .find('.incidentForm__container__item-button__decision')
      .simulate('click');
    it('should call addIncident at once', () => {
      expect(
        incidentCreateFormProps.updateIncidentCreateForm.calledOnce
      ).to.equal(true);
    });
  });
  describe('when the validation is false', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentCreateForm {...incidentCreateFormProps} />
      </Provider>
    );
    it('should the create button is disabled', () => {
      expect(
        component
          .find('.incidentForm__container__item-button__decision')
          .prop('disabled')
      ).to.equal(false);
    });
  });
  describe('when the validation is true', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentCreateForm {...Object.assign(
          {},
          incidentCreateFormProps,
          { toggleCreateButton:true }
        )} />
      </Provider>
    );
    it('should the create button is enabled', () => {
      expect(
        component
          .find('.incidentForm__container__item-button__decision')
          .prop('disabled')
      ).to.equal(false);
    });
  });
});
