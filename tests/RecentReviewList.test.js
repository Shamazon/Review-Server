import React from 'react';
import RecentReviewList from '../client/src/components/RecentReviewList.jsx';
import enzyme from 'enzyme';

describe('RecentReviewList', () => {
  it('should be defined', () => {
    expect(RecentReviewList).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      reviews: ['test'],
    };
    const tree = enzyme.shallow(<RecentReviewList {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
