import { vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'

test('renders the name', () => {
  render(<Navbar />)
  expect(screen.getByText('Nikolas Pechie')).toBeInTheDocument()
})

test('clicking the name scrolls to top', () => {
  const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  render(<Navbar />)
  fireEvent.click(screen.getByText('Nikolas Pechie'))
  expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  scrollToSpy.mockRestore()
})
