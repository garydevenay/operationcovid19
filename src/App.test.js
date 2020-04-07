import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

jest.mock('./Screens/Map/MapComponent', () => ({
  MapComponent: () => (<div></div>)
}));

jest.mock('./Screens/Table', () => ({
  Table: () => (<div></div>)
}));

jest.mock('./API', () => ({
  GetSummary: async () => await jest.fn(),
  GetSelfReports: async () => await jest.fn(),
  GetCountrySummary: async () => await jest.fn()
}))

test('renders', async () => {  
  await act(async () => {
    const component = render(<App />);
    await wait(() => expect(component).toBeTruthy());
  })
});
