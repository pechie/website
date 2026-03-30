import { vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SectionNav from './SectionNav'

const mockObserve = vi.fn()
const mockDisconnect = vi.fn()

beforeEach(() => {
  vi.clearAllMocks()
  global.IntersectionObserver = vi.fn(function () {
    this.observe = mockObserve
    this.disconnect = mockDisconnect
  })
})

test('renders 5 navigation buttons', () => {
  render(<SectionNav />)
  expect(screen.getAllByRole('button')).toHaveLength(5)
})

test('each button has the correct aria-label', () => {
  render(<SectionNav />)
  expect(screen.getByLabelText('Home')).toBeInTheDocument()
  expect(screen.getByLabelText('About')).toBeInTheDocument()
  expect(screen.getByLabelText('Experience')).toBeInTheDocument()
  expect(screen.getByLabelText('Resume')).toBeInTheDocument()
  expect(screen.getByLabelText('Contact')).toBeInTheDocument()
})

test('clicking a button calls scrollIntoView on the target section', () => {
  const mockScrollIntoView = vi.fn()
  document.body.innerHTML = '<section id="about"></section>'
  document.getElementById('about').scrollIntoView = mockScrollIntoView

  render(<SectionNav />)
  fireEvent.click(screen.getByLabelText('About'))
  expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
})

test('disconnects IntersectionObserver on unmount', () => {
  const { unmount } = render(<SectionNav />)
  unmount()
  expect(mockDisconnect).toHaveBeenCalled()
})
