import React from 'react';
import Stars from '../client/src/components/Stars.jsx';
import enzyme from 'enzyme';

describe('Stars', () => {
  it('should be defined', () => {
    expect(Stars).toBeDefined();
  });
  it('should render 5 `.star` elements', () => {
    const wrapper = enzyme.mount(<Stars />);
    expect(wrapper.find('.star')).toHaveLength(5);
  });
});
