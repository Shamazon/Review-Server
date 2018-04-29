import React from 'react';
import ReviewListItem from '../client/src/components/ReviewListItem.jsx';
import enzyme from 'enzyme';

describe('ReviewListItem', () => {
  it('should be defined', () => {
    expect(ReviewListItem).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      review: {
        body: 'test',
      },
    };
    const tree = enzyme.shallow(<ReviewListItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
