import React from 'react';
import ReviewList from '../client/src/components/ReviewList.jsx';
import enzyme from 'enzyme';

describe('ReviewList', () => {
  it('should be defined', () => {
    expect(ReviewList).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      reviews: ['test'],
    };
    const tree = enzyme.shallow(<ReviewList {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
