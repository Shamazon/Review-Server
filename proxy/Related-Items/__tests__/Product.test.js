import React from 'react';
import enzyme from 'enzyme';
import Product from '../client/src/components/Product.jsx';

describe('<Product />', () => {
  it('should render product details from props', () => {
    const product = {
      id: 10,
      name: 'test product',
      price: '10.00',
      imageUrls: ['fakeURL']
    }
    const wrapper = enzyme.shallow(<Product product={product} />);
    expect(wrapper.find('img[src="fakeURL"]')).toHaveLength(1);
  });
});