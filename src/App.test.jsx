import { render } from '@testing-library/react'
import App from './App'

test('renders all five sections', () => {
  render(<App />)
  expect(document.getElementById('home')).toBeInTheDocument()
  expect(document.getElementById('about')).toBeInTheDocument()
  expect(document.getElementById('experience')).toBeInTheDocument()
  expect(document.getElementById('resume')).toBeInTheDocument()
  expect(document.getElementById('contact')).toBeInTheDocument()
})

test('renders the navbar', () => {
  render(<App />)
  expect(document.querySelector('nav')).toBeInTheDocument()
})
