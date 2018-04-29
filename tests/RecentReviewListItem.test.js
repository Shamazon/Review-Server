import React from 'react';
import RecentReviewListItem from '../client/src/components/RecentReviewListItem.jsx';
import enzyme from 'enzyme';

describe('RecentReviewListItem', () => {
  it('should be defined', () => {
    expect(RecentReviewListItem).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      review: {
        body: 'test',
      },
    };
    const tree = enzyme.shallow(<RecentReviewListItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
