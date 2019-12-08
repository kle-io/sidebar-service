import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../App';

describe('Hello World', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div>Hello World!</div>)).toBe(true);
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
