import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('links to #contact by default', () => {
  render(<Button buttonStyle="btn--outline">Contact Me</Button>)
  expect(screen.getByRole('link')).toHaveAttribute('href', '#contact')
})

test('links to a custom href when to prop is provided', () => {
  render(<Button buttonStyle="btn--outline" to="#resume">View Resume</Button>)
  expect(screen.getByRole('link')).toHaveAttribute('href', '#resume')
})
