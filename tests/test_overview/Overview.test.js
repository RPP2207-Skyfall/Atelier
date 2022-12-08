/** @jest-environment jsdom */

import react from 'react';
import ProductInfo from "../../../client/src/components/overview/parts/productInfo/ProductInfo.jsx";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';


describe("Jest default test", () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
})

describe('Overview', () => {
  it("should render Product Info component correctly", async () => {
    render(<ProductInfo />);

    await waitFor(() => {
      screen.getByText('Product Info')
    })

  });
})