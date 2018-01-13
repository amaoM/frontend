import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Incident from '../../src/components/Incident';

describe('component::Incident', () => {
  it('should render state', () => {
    const state = {
      id: '1',
      level: 'critical',
      status: 'unsupported',
      title: 'Blah blah blah',
      description: 'Blah blah blah',
      person: 'person',
      editIncident: spy(),
    };
    const component = shallow(<Incident {...state} />);
    expect(component.find('tr.table__body__row.table__body__row--critical')).to.have.length(1);
    expect(component.find('td.table__body__row__item')).to.have.length(6);
    const texts = component.find('td.table__body__row__item').map(node => node.text());
    expect(texts).to.eql([
      '',
      '1',
      'critical',
      'unsupported',
      'Blah blah blah',
      'person',
    ]);
  });
});
