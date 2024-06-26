/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello guest')
        expect(textElement).toBeInTheDocument()
    })
    
    test('renders with a name', () => {
        render(<Greet name='Javo' />)
        const textElement = screen.getByText('Hello Javo')
        expect(textElement).toBeInTheDocument()
    })
})
