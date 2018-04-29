import React from 'react';
import App from '../client/src/components/App.jsx';
import enzyme from 'enzyme';

describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      id: 0,
    };
    const tree = enzyme.shallow(<App {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('should get reviews when the component mounts', () => {
    const spy = jest.spyOn(App.prototype, 'getReviews');
    const component = enzyme.mount(<App />);
    component.update();
    expect(spy).toHaveBeenCalled();
  });
});
