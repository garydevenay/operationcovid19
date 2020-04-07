import React from 'react';
import { render } from '@testing-library/react';
import { NextButton } from './next-button';

test('renders', async () => {  
    const component = render(<NextButton />);
    expect(component).toBeTruthy();
    expect(component.getAllByRole('button')).toHaveLength(1);
});