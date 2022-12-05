/**
 * @jest-environment jsdom
 */

import react from 'react';
import QandA from "../../client/src/components/QA/QandA.jsx"
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom';

describe("Jest default test", () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
})

describe("Q&A Widget", () => {
  it("should render Q&A widget when DOM is loaded", async () => {
    render(<QandA />);
    await waitFor(() => {
      screen.getByText("QUESTIONS & ANSWERS")
    })
  })
})

