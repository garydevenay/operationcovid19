import React from 'react';
import { shallow } from 'enzyme';
import { Questionnaire } from './Questionnaire';

describe('When rendering questions', () => {

  it('renders a Start button', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('[data-testid="start"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="start"]').first().text()).toMatch('Start');
  })

  it('renders Location', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Location')).toHaveLength(1);
  })

  it('renders When', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('When')).toHaveLength(1);
  })

  it('renders InitialIllness', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('InitialIllness')).toHaveLength(1);
  })
  
  it('renders HowLong', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('HowLong')).toHaveLength(1);
  })

  it('renders Contact', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Contact')).toHaveLength(1);
  })
  
  it('renders Tested', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Tested')).toHaveLength(1);
  })

  it('renders Isolation', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Isolation')).toHaveLength(1);
  })

  it('renders Recovered', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Recovered')).toHaveLength(1);
  })

  it('renders HouseMates', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('HouseMates')).toHaveLength(1);
  })

  it('renders Symptoms', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Symptoms')).toHaveLength(1);
  })

  it('renders Feeling', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Feeling')).toHaveLength(1);
  })

  it('renders Anxiety', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Anxiety')).toHaveLength(1);
  })

  it('renders Vulnerable', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Vulnerable')).toHaveLength(1);
  })

  it('renders Additional', () => {
    const wrapper = shallow(<Questionnaire />);
    expect(wrapper.find('Additional')).toHaveLength(1);
  })
})