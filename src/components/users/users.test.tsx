import { render, screen } from "@testing-library/react";
import { Users } from "./users";
import { server } from "../../mocks/server";
import { describe, test } from "vitest";
import { http, HttpResponse } from "msw";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("renders error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: "Internal server error",
        });
      }),
    );
    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
