import React from 'react';
import { shallow } from 'enzyme';
import GridCell from './GridCell';

describe('GridCell', () => {
  it('Should contain alive css class', () => {
    const wrapper = shallow(<GridCell lifeStatus={true} />);
    expect(wrapper.find('div').hasClass('alive')).toBe(true);
  });
  it('Should not contain alive css class', () => {
    const wrapper = shallow(<GridCell lifeStatus={false} />);
    expect(wrapper.find('div').hasClass('alive')).toBe(false);
  });
});
