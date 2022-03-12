/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import App from '../App';
import {shallow} from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('jest', () => {
  it('runs', () => {
    // renderer.create(<App />);
    const a = 1;
    expect(a + 1).toBe(2);
  });
});

describe('enzyme', () => {
  it('runs', () => {
    const text = 'some text';
    const wrapper = shallow(<Text>{text}</Text>);
    expect(wrapper.text()).toBe(text);
  });
});
