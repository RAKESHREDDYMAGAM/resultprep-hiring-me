import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

// mock router
jest.mock(
  "react-router-dom",
  () => ({
    useNavigate: () => jest.fn(),
  }),
  { virtual: true }
);

// mock API
jest.mock("../services/api", () => ({
  post: jest.fn(),
}));

test("renders login page", () => {
  render(<Login />);

  const heading = screen.getByRole("heading", { name: /login/i });
  expect(heading).toBeInTheDocument();
});