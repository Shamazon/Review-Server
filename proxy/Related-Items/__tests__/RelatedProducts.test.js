import React from 'react';
import enzyme from 'enzyme';
import App from '../client/src/components/App.jsx';
import RelatedProducts from '../client/src/components/RelatedProducts.jsx';

describe('<RelatedProducts />', () => {

  const products = [{
    id: 10,
    name: 'test product',
    price: '10.00',
    imageUrls: ['fakeURL']
  }];

  const moreProducts = [
    {
      id: 10,
      name: 'test product',
      price: '10.00',
      imageUrls: ['fakeURL']
    },
    {
      id: 11,
      name: 'test product 2',
      price: '25.00',
      imageUrls: ['fakeURL2']
    },
    {
      id: 12,
      name: 'test product 3',
      price: '50.00',
      imageUrls: ['fakeURL3']
    },
    {
      id: 13,
      name: 'test product 4',
      price: '100.00',
      imageUrls: ['fakeURL4']
    },
    {
      id: 14,
      name: 'test product 5',
      price: '125.00',
      imageUrls: ['fakeURL5']
    },
    {
      id: 15,
      name: 'test product 6',
      price: '150.00',
      imageUrls: ['fakeURL6']
    },
    {
      id: 16,
      name: 'test product 7',
      price: '175.00',
      imageUrls: ['fakeURL7']
    },
];

  it('should call setRelatedProducts when component mounts', () => {
    const spy = jest.spyOn(App.prototype, 'setRelatedProducts');
    const component = enzyme.mount(<App />);
    component.update();
    expect(spy).toHaveBeenCalled();
  });

  it('should render "loading..." when no props are received', () => {
    const wrapper = enzyme.shallow(<RelatedProducts products={[]} />);
    expect(wrapper.html()).toBe('<span>Loading...</span>');
  });

  it('should render products when props are received', () => {
    const wrapper = enzyme.shallow(
      <RelatedProducts
        products={products}
      />
    );
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should render buttons to scroll products', () => {
    const wrapper = enzyme.mount(<RelatedProducts products={moreProducts} />);
    expect(wrapper.find('#leftButton')).toHaveLength(1);
    expect(wrapper.find('#rightButton')).toHaveLength(1);
  });  
});