import React from 'react';
import ReviewTitle from '../client/src/components/ReviewTitle.jsx';
import enzyme from 'enzyme';
import moment from 'moment';

describe('ReviewTitle', () => {
  it('should be defined', () => {
    expect(ReviewTitle).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      review: {
        starRating: 5,
        title: 'test',
        date: moment('2017-09-15 09:30:00').format('MMM Do YYYY h:mm:ss a'),
      },
    };
    const tree = enzyme.shallow(<ReviewTitle {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
