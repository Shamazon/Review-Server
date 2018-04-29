import React from 'react';
import KeywordList from '../client/src/components/KeywordList.jsx';
import enzyme from 'enzyme';

describe('KeywordList', () => {
  it('should be defined', () => {
    expect(KeywordList).toBeDefined();
  });
  it('should render 18 `.keyword` elements', () => {
    const wrapper = enzyme.mount(<KeywordList />);
    expect(wrapper.find('.keyword')).toHaveLength(18);
  });
});
