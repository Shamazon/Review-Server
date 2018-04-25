import KeywordList from '../client/src/components/KeywordList.jsx';
import { shallow } from 'enzyme';

describe('<KeywordList />', () => {
  it('should render 18 `.keyword` elements', () => {
    const wrapper = shallow(<KeywordList />);
    expect(wrapper.find('.keyword')).to.have.length(18);
  });
});