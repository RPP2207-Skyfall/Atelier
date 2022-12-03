/**
 * @jest-environment jsdom
 */

require('react');

test('renders overview component', () => {
  render(<Overview />);
  const linkElement = screen.getByText(/Product Info/i);
  expect(linkElement).toBeInTheDocument();
});