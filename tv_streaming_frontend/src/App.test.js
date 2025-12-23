import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home section title', () => {
  render(<App />);
  const title = screen.getByText(/Home/i);
  expect(title).toBeInTheDocument();
});
