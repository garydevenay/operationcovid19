// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('firebase', () => ({
  initializeApp: jest.fn((firbaseconf) => { }),
  auth: jest.fn(() => ({
    signInAnonymously: () => jest.fn()
  })
  ),
  database: jest.fn(() => ({
    ref: jest.fn((ref) => ({
      on: jest.fn(),
      once: jest.fn()
    }))
  }))
}));

