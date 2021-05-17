import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

/**
 * Testing Rationale
 * 
 * This is intentionally the only test file in this app. I could have included something that tests the
 * countProvider in isolation however I don't think there is much value in that. I would much rather
 * spend time writing tests that focus on the overall value that the provider delivers.
 * 
 * I would highly recommend checking out this blog post that explains the rationale a bit better:
 * https://kentcdodds.com/blog/write-tests
 */

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  });

  it('should display the initial count', () => {
    expect(screen.getByTestId('text-count')).toHaveTextContent('0')
  });

  it('should increment the count', () => {
    fireEvent.click(screen.getByTestId('button-increment'));
    expect(screen.getByTestId('text-count')).toHaveTextContent('1')
  });

  it('should decrement the count', () => {
    fireEvent.click(screen.getByTestId('button-decrement'));
    expect(screen.getByTestId('text-count')).toHaveTextContent('-1')
  });

  it('should set the value of the count', () => {
    const VALUE = 10;
    fireEvent.change(screen.getByTestId('input-count'), { target: { value: VALUE } });
    expect(screen.getByTestId('text-count')).toHaveTextContent(VALUE.toString())
  })
});