import React from 'react';
import { shallow } from 'enzyme';

import Input from './index';

let defaultProps;

describe('Input', () => {
  beforeEach(() => {
    defaultProps = {
      onBlur: jest.fn(),
      onChange: jest.fn(),
      name: 'test',
    };
  });

  it('should be defined', () => {
    expect(Input).toBeDefined();
  });

  it('renders correctly', () => {
        expect(Input).toMatchSnapshot();
    });

  it('should render whit props', () => {
    const wrapper = shallow(<Input {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render whit mask', () => {
    const wrapper = shallow(<Input mask='99/99/9999' {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
