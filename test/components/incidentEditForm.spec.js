import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import IncidentEditForm from '../../src/components/IncidentEditForm';

describe('component::IncidentEditForm', () => {
  const incidentEditFormProps = {
    initialIncident: {
      id: '1',
      title: 'Blah blah blah',
      level: 'critical',
      status: 'unsupported',
      description: 'Blah blah blah',
      person: 'person',
      validationResult: {},
      toggleEditButton: false,
    },
    incidentEditForm: {
      id: '1',
      title: 'Blah blah blah',
      level: 'critical',
      status: 'unsupported',
      description: 'Blah blah blah',
      person: 'person',
      validationResult: {},
      toggleEditButton: false,
    },
    updateIncidentEditForm: spy(),
    updateIncident: spy(),
    addIncidentTimeLineEvent: spy(),
  };
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});
  describe('when the title filed is changed', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentEditForm {...incidentEditFormProps} />
      </Provider>
    );
    component
      .find('[name="title"]')
      .simulate('change', { target: { value: 'New Incident' } });
    it('should call updateIncidentEditForm at once', () => {
      expect(incidentEditFormProps.updateIncidentEditForm.calledOnce).to.equal(
        true
      );
    });
  });
  describe('when the status filed is changed', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentEditForm {...incidentEditFormProps} />
      </Provider>
    );
    component
      .find('[name="status"]')
      .simulate('select', { target: { value: 'in_progress' } });
    it('should call updateIncidentEditForm at once', () => {
      expect(incidentEditFormProps.updateIncidentEditForm.calledOnce).to.equal(
        true
      );
    });
  });
  describe('when the level filed is changed', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentEditForm {...incidentEditFormProps} />
      </Provider>
    );
    component
      .find('[name="level"]')
      .simulate('select', { target: { value: 'critical' } });
    it('should call updateIncidentEditForm at once', () => {
      expect(incidentEditFormProps.updateIncidentEditForm.calledOnce).to.equal(
        true
      );
    });
  });
  describe('when the edit button is clicked', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentEditForm {...incidentEditFormProps} />
      </Provider>
    );
    component
      .find('.incidentForm__container__item-button__decision')
      .simulate('click');
    it('should call updateIncident at once', () => {
      expect(incidentEditFormProps.updateIncidentEditForm.calledOnce).to.equal(
        true
      );
    });
  });

  describe('when the validation is false', () => {
    const component = mount(
      <Provider store={store}>
        <IncidentEditForm {...incidentEditFormProps} />
      </Provider>
    );
    it('should the edit button is disabled', () => {
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
        <IncidentEditForm {...Object.assign(
          {},
          incidentEditFormProps,
          { incidentEditForm: { toggleEditButton: true } }
        )} />
      </Provider>
    );
    it('should the edit button is enabled', () => {
      expect(
        component
          .find('.incidentForm__container__item-button__decision')
          .prop('disabled')
      ).to.equal(true);
    });
  });
});
