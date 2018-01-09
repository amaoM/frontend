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
  it('', () => {
    const incidentCreateForm = {
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
    const updateIncidentCreateForm = spy();
    const addIncident = spy();
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <IncidentCreateForm
          incidentCreateForm={incidentCreateForm}
          updateIncidentCreateForm={updateIncidentCreateForm}
        />
      </Provider>
    );
    component.find('[name="title"].incidentForm__container__item-value__input').simulate('change', {target: {value: 'New Incident'}});
    expect(updateIncidentCreateForm.calledOnce).to.equal(true);
  });
});
