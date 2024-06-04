import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../../providers/app-providers";

describe("Application", () => {
    test('reders correctly', () => {
        render(<MuiMode />, {
            wrapper: AppProviders
        });
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode');
    });
});