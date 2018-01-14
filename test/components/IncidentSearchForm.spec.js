import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import IncidentSearchForm from '../../src/components/IncidentSearchForm';

describe('component::IncidentSearchForm', () => {
  const incidentSearchFormProps = {
    incidentSearchForm: {
      keyword: 'test',
      level: 'critical',
      status: 'in_progress',
    },
    searchIncident: spy(),
  }
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({ ...incidentSearchFormProps });
  const component = shallow(<IncidentSearchForm { ...incidentSearchFormProps } />, { context: store });
  describe('when IncidentSearchForm is renderd', () => {
    it('should be rendered keyword, level and status fields with setted values', () => {
      expect(component.find('input[name="keyword"]')).to.have.length(1);
      expect(component.find('select[name="level"]')).to.have.length(1);
      expect(component.find('select[name="status"]')).to.have.length(1);
      expect(component.find('input[name="keyword"]').prop('value')).to.equal('test');
      expect(component.find('select[name="level"] option[defaultValue=true]').prop('value')).to.equal('critical');
      expect(component.find('select[name="status"] option[defaultValue=true]').prop('value')).to.equal('in_progress');
    });
  });
  describe('when the keyword filed is changed', () => {
    it('should call searchIncident at once', () => {
      component.find('[name="keyword"]').simulate('change', {target: {value: 'Blah'}});
      expect(incidentSearchFormProps.searchIncident.calledOnce).to.equal(true);
    });
  });
  describe('when the status filed is changed', () => {
    it('should call searchIncident at once', () => {
      component.find('[name="status"]').simulate('select', {target: {value: 'in_progress'}});
      expect(incidentSearchFormProps.searchIncident.calledOnce).to.equal(true);
    });
  });
  describe('when the level filed is changed', () => {
    it('should call searchIncident at once', () => {
      component.find('[name="level"]').simulate('select', {target: {value: 'critical'}});
      expect(incidentSearchFormProps.searchIncident.calledOnce).to.equal(true);
    });
  });
});
