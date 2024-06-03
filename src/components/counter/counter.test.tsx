import { render, screen } from "@testing-library/react"
import user from '@testing-library/user-event'
import { Counter } from "./counter";

describe("Counter", () => {
    test('renders correctly', () => {
        render(<Counter />)
        const counterElement = screen.getByRole('heading')
        expect(counterElement).toBeInTheDocument()
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(incrementButton).toBeInTheDocument()
    })

    test('renders a count of 0', () => {
        render(<Counter />)
        const counterElement = screen.getByRole('heading')
        expect(counterElement).toHaveTextContent("0")
    })

    test('renders a count of 1 after clicking te increment button', async () => {
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(incrementButton)
        const counterElement = screen.getByRole('heading')
        expect(counterElement).toHaveTextContent("1")
    })

    test('renders a count of 2 after clicking te increment button twice', async () => {
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(incrementButton)
        await user.click(incrementButton)
        const counterElement = screen.getByRole('heading')
        expect(counterElement).toHaveTextContent("2")
    })
})