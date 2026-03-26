import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Button } from './Button'

test('links to /contact by default', () => {
  render(
    <MemoryRouter>
      <Button buttonStyle="btn--outline">Contact Me</Button>
    </MemoryRouter>
  )
  expect(screen.getByRole('link')).toHaveAttribute('href', '/contact')
})

test('links to a custom route when to prop is provided', () => {
  render(
    <MemoryRouter>
      <Button buttonStyle="btn--outline" to="/resume">View Resume</Button>
    </MemoryRouter>
  )
  expect(screen.getByRole('link')).toHaveAttribute('href', '/resume')
})
