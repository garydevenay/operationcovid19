import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('firebase', () => ({
    initializeApp: jest.fn((firbaseconf) => {}),
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
  
jest.mock('./Screens/Map/MapComponent', () => ({
  MapComponent: () => (<div></div>)
}));

jest.mock('./Screens/Table', () => ({
  Table: () => (<div></div>)
}));

jest.mock('./API', () => ({
  GetSummary: async () => await jest.fn(),
  GetSelfReports: async () => await jest.fn()
}))

test('renders', () => {
  const component = render(<App />);
  expect(component).toBeTruthy();
});
