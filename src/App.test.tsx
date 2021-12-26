import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
   render(<App />);
   const headerText = screen.getByText(/App running :\)/i);
   expect(headerText).toBeInTheDocument();
});
