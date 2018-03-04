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
      validationResult: {
        totalResult: false,
      },
    },
    incidentEditForm: {
      id: '1',
      title: 'Blah blah blah',
      level: 'critical',
      status: 'unsupported',
      description: 'Blah blah blah',
      person: 'person',
      validationResult: {
        totalResult: false,
      },
    },
    updateIncidentEditForm: spy(),
    updateIncident: spy(),
    addIncidentTimeLineEvent: spy(),
  };
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});
  const component = mount(
    <Provider store={store}>
      <IncidentEditForm {...incidentEditFormProps} />
    </Provider>
  );
  describe('when the title filed is changed', () => {
    it('should call updateIncidentEditForm at once', () => {
      component
        .find('[name="title"]')
        .simulate('change', { target: { value: 'New Incident' } });
      expect(incidentEditFormProps.updateIncidentEditForm.calledOnce).to.equal(
        true
      );
    });
  });
  describe('when the status filed is changed', () => {
    it('should call updateIncidentEditForm at once', () => {
      component
        .find('[name="status"]')
        .simulate('select', { target: { value: 'in_progress' } });
      expect(incidentEditFormProps.updateIncidentEditForm.calledOnce).to.equal(
        true
      );
    });
  });
  describe('when the level filed is changed', () => {
    it('should call updateIncidentEditForm at once', () => {
      component
        .find('[name="level"]')
        .simulate('select', { target: { value: 'critical' } });
      expect(incidentEditFormProps.updateIncidentEditForm.calledOnce).to.equal(
        true
      );
    });
  });
  describe('when the edit button is clicked', () => {
    it('should call updateIncident at once', () => {
      component
        .find('.incidentForm__container__item-button__decision')
        .simulate('click');
      expect(incidentEditFormProps.updateIncidentEditForm.calledOnce).to.equal(
        true
      );
    });
  });
});
