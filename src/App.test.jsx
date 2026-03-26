import { render, screen } from '@testing-library/react'
import App from './App'

test('renders home page at root route', () => {
  window.history.pushState({}, '', '/')
  render(<App />)
  expect(screen.getByText('pechie.dev')).toBeInTheDocument()
})

test('renders experience page', () => {
  window.history.pushState({}, '', '/experience')
  render(<App />)
  expect(screen.getByText('Work Experience')).toBeInTheDocument()
})
