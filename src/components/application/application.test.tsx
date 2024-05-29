import { render, screen } from "@testing-library/react"
import { Application } from "./application";

describe("Application", () => {
    test('reders correctly', () => {
        render(<Application />);
        const nameElement = screen.getByRole('textbox');
        expect(nameElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    });
});