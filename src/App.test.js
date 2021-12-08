import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./pages/HomePage', () => () => (<div>Home Page</div>));
jest.mock('./pages/SelectedYearPage', () => () => (<div>SelectedYear Page</div>));

test('renders the required routes properly', () => {
  render(<App />);
  expect(screen.getByText('Home Page')).toBeInTheDocument();

  window.history.pushState({}, 'Test Page', '/year/2020');
  render(<App />);
  expect(screen.getByText('SelectedYear Page')).toBeInTheDocument();
});

test('renders the default route', () => {
  window.history.pushState({}, 'Test Page', '/anythingElse');
  render(<App />);
  expect(screen.getByText('Home Page')).toBeInTheDocument();
});

test('renders the header', () => {
  render(<App />);
  expect(screen.getByTestId('navHeader')).toBeInTheDocument();
});
