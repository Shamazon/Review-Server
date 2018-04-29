import React from 'react';
import ReviewBody from '../client/src/components/ReviewBody.jsx';
import enzyme from 'enzyme';

describe('ReviewBody', () => {
  it('should be defined', () => {
    expect(ReviewBody).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      body: 'test',
    };
    const tree = enzyme.shallow(<ReviewBody {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
