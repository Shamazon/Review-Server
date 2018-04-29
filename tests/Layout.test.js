import React from 'react';
import Layout from '../client/src/Layout.jsx';
import enzyme from 'enzyme';

describe('Layout', () => {
  it('should be defined', () => {
    expect(Layout).toBeDefined();
  });
  it('should render correctly', () => {
    const props = {
      params: {
        id: 0,
      },
    };
    const tree = enzyme.shallow(<Layout {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
