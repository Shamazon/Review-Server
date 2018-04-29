import React from 'react';
import CustomerImages from '../client/src/components/CustomerImages.jsx';
import enzyme from 'enzyme';

describe('CustomerImages', () => {
  it('should be defined', () => {
    expect(CustomerImages).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      reviews: ['test'],
    };
    const tree = enzyme.shallow(<CustomerImages {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
