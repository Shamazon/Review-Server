import React from 'react';
import UserInfo from '../client/src/components/UserInfo.jsx';
import enzyme from 'enzyme';

describe('UserInfo', () => {
  it('should be defined', () => {
    expect(UserInfo).toBeDefined();
  });
  it('should render 1 `.userSection` element', () => {
    const wrapper = enzyme.mount(<UserInfo />);
    expect(wrapper.find('.userSection')).toHaveLength(1);
  });
  it('should render 1 `.avatar` element', () => {
    const wrapper = enzyme.mount(<UserInfo />);
    expect(wrapper.find('.avatar')).toHaveLength(1);
  });
  it('should render 1 `.userName` element', () => {
    const wrapper = enzyme.mount(<UserInfo />);
    expect(wrapper.find('.userName')).toHaveLength(1);
  });
});
