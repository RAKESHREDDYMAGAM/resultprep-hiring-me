import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";

// mock alert to avoid jsdom error
window.alert = jest.fn();

// mock API module used in Dashboard
jest.mock("../services/api", () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
  post: jest.fn(),
  delete: jest.fn(),
  put: jest.fn(),
}));

test("renders dashboard title", async () => {
  render(<Dashboard />);

  await waitFor(() => {
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});