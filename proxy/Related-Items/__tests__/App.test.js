import React from 'react';
import enzyme from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('<App />', () => {
  const component = enzyme.shallow(<App />);
  it('should render one <App /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('should hide right arrow when hideButton("right") is called', () => {
    component.instance().hideButton('right');
    expect(component.instance().state.showRightButton).toBe(false);
  });

  it('should hide left arrow when hideButton("left") is called', () => {
    component.instance().hideButton('left');
    expect(component.instance().state.showLeftButton).toBe(false);
  });

  it('should show left arrow when showButton("left") is called', () => {
    component.instance().showButton('left');
    expect(component.instance().state.showLeftButton).toBe(true);
  });

  it('should show right arrow when showButton("right") is called', () => {
    component.instance().showButton('right');
    expect(component.instance().state.showRightButton).toBe(true);
  });
});

