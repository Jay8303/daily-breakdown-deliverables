import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/counter';

describe('Counter Component', () => {
  test('renders counter with initial value', () => {
    render(<Counter />);
    expect(
      screen.getByText((_, el) => el?.textContent === 'Counter: 0')
    ).toBeInTheDocument();
  });

  test('renders Increment button', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    expect(button).toBeInTheDocument();
  });

  test('increments counter on button click', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button);
    expect(
      screen.getByText((_, el) => el?.textContent === 'Counter: 1')
    ).toBeInTheDocument();
  });
});
