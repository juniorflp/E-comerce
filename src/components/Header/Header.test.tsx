import { getByRole, render, fireEvent } from "@testing-library/react";
import HeaderComponent from "../Header";

describe("HeaderComponent", () => {
  it("should be able to click the button", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <HeaderComponent handleClick={handleClick} numberOfProducts={1} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("must contain the following text", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <HeaderComponent handleClick={handleClick} numberOfProducts={1} />
    );

    expect(getByText("MKS")).toBeInTheDocument();
    expect(getByText("Sistemas")).toBeInTheDocument();
  });
});
