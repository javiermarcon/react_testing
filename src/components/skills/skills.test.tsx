import { render, screen } from "@testing-library/react"
import { Skills } from "./skills"

describe('Skills', () => {
    const skills = ["HTML", "CSS", "JavaScript"];

    test('Renders correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    test('renders a list of skills',  () => {
        render(<Skills skills={skills} />)
        const listElements = screen.getAllByRole("listitem");
        expect(listElements).toHaveLength(skills.length)
    })

    test('renders login button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole("button", {
            name: "Login",
        });
        expect(loginButton).toBeInTheDocument();
    });

    test('Start learning button is not rendered', () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole("button", {
            name: "Start learning",
        });
        expect(startLearningButton).not.toBeInTheDocument();
    });

    test('Start learning button is eventually rendered', async () => {
        render(<Skills skills={skills} />)
        const startLearningButton = await screen.findByRole(
            "button", 
            {
                name: "Start learning",
            },
            {
                timeout: 2000,
            }
        );
        expect(startLearningButton).toBeInTheDocument();
    });
});