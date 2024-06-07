import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counter-two";
import user from "@testing-library/user-event"
import { describe
    , expect
    , test
    , vi
     } from 'vitest'

describe("CounterTwo", () => {
    test("renders correctly", () => {
        render(<CounterTwo count={0} />);
        const textElement = screen.getByText("Counter Two");
        expect(textElement).toBeInTheDocument();
    });

    test("handlers are called", async () => {
        user.setup()
        const incrementHanler = vi.fn()
        const decrementHandler = vi.fn()
        render(<CounterTwo count={0}
            handleIncrement={incrementHanler}
            handleDecrement={decrementHandler}
        />);
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        const decrementButton = screen.getByRole('button', { name: 'Decrement' })
        await user.click(incrementButton)
        await user.click(decrementButton)
        expect(incrementHanler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
    })
});