import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import Incident from '../../src/components/Incident';

describe('component::Incident', () => {
  it('up ボタンがクリックされたら、onChangeStatus アクションが1回呼ばれること', () => {
    const onChangeStatus = spy();
    const state = {
      id: 1,
      status: 'up',
      title: 'title1',
      person: 'person1',
      toggleStatus: 'down',
      onChangeStatus,
    };
    const component = shallow(<Incident {...state} />);
    component.find('button.status').simulate('click');
    expect(onChangeStatus.calledOnce).to.be.true;
  });
});
