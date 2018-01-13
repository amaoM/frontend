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
  it('should create a search component with setted values', () => {
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
    expect(component.find('input[name="keyword"]')).to.have.length(1);
    expect(component.find('select[name="level"]')).to.have.length(1);
    expect(component.find('select[name="status"]')).to.have.length(1);
    expect(component.find('input[name="keyword"]').prop('value')).to.equal('test');
    expect(component.find('select[name="level"] option[defaultValue=true]').prop('value')).to.equal('critical');
    expect(component.find('select[name="status"] option[defaultValue=true]').prop('value')).to.equal('in_progress');
  });
});
