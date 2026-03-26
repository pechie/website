import '@testing-library/jest-dom'

// IntersectionObserver is not implemented in jsdom
globalThis.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this._callback = callback
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
