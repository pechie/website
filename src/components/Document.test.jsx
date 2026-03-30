import { render, screen } from '@testing-library/react'
import Document from './Document'

test('renders the download button', () => {
  render(<Document />)
  const link = screen.getByRole('link', { name: /download resume/i })
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', '/resume.pdf')
  expect(link).toHaveAttribute('download')
})

test('renders the PDF document and page components', () => {
  render(<Document />)
  expect(screen.getByTestId('pdf-document')).toBeInTheDocument()
  expect(screen.getByTestId('pdf-page')).toBeInTheDocument()
})

test('renders page 1 of the PDF', () => {
  render(<Document />)
  expect(screen.getByText('page 1')).toBeInTheDocument()
})

test('renders the mobile fallback message', () => {
  render(<Document />)
  expect(
    screen.getByText(/resume preview is not available on mobile/i)
  ).toBeInTheDocument()
})
