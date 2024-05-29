import { render, screen } from "@testing-library/react"
import { Application } from "./application";

describe("Application", () => {
    test('reders correctly', () => {
        render(<Application />);
        
        const pageElement = screen.getByRole('heading', {
            level: 1,
        });
        expect(pageElement).toBeInTheDocument();
        
        const sectionElement = screen.getByRole('heading', {
            level: 2,
        });
        expect(sectionElement).toBeInTheDocument();

        const paragraphElement = screen.getByText('All fields are madatory')
        expect(paragraphElement).toBeInTheDocument();

        const imageElement = screen.getByAltText('a person with a laptop')
        expect(imageElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name', {
            selector: "input",
        })
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText('Fullname')
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue('Javo')
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    });
});