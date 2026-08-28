// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TideNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TideNexus/i);
    expect(titleElement).toBeInTheDocument();
});
