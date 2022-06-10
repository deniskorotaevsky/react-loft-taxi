import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Home/Home", () => ({ Home: () => <div>Home content</div> }));
jest.mock("./components/Map/Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./components/Profile/Profile", () => ({ Profile: () => <div>Profile content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Home content");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App isLoggedIn />);
      fireEvent.click(getByText('Map'));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch("Profile content");
    });
  });
});