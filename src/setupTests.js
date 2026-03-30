import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

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

// Mock react-pdf globally to avoid DOMMatrix errors at module load time in jsdom.
// Global placement is necessary because pdfjs-dist accesses DOMMatrix before
// any test-level mock can intercept it. Test-local overrides require vi.unmock()
// or vi.resetModules().
vi.mock('react-pdf', () => ({
  pdfjs: { GlobalWorkerOptions: {} },
  Document: ({ children }) =>
    React.createElement('div', { 'data-testid': 'pdf-document' }, children),
  Page: ({ pageNumber }) =>
    React.createElement('div', { 'data-testid': 'pdf-page' }, `page ${pageNumber}`),
}))
