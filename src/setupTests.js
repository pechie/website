import '@testing-library/jest-dom'
import { vi } from 'vitest'

// IntersectionObserver is not implemented in jsdom
globalThis.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this._callback = callback
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

// ResizeObserver is not available in jsdom
globalThis.ResizeObserver = vi.fn(function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }
})

// Mock react-pdf globally to avoid DOMMatrix issues in tests
vi.mock('react-pdf', () => {
  const React = require('react')
  return {
    pdfjs: { GlobalWorkerOptions: {} },
    Document: ({ children, loading, error }) =>
      React.createElement('div', { 'data-testid': 'pdf-document' }, children),
    Page: ({ pageNumber }) =>
      React.createElement('div', { 'data-testid': 'pdf-page' }, `page ${pageNumber}`),
  }
})
