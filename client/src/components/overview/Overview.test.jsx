// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Overview from './Overview';

require('react');

test('renders overview component', () => {
  render(<Overview />);
  const linkElement = screen.getByText(/Product Info/i);
  expect(linkElement).toBeInTheDocument();
});