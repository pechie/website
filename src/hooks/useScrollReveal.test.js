import { renderHook, act } from '@testing-library/react'
import { useScrollReveal } from './useScrollReveal'

let mockCallback

beforeEach(() => {
  mockCallback = null
  globalThis.IntersectionObserver = class IntersectionObserver {
    constructor(cb) { mockCallback = cb }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.matchMedia = vi.fn(() => ({ matches: false }))
})

test('isVisible is false initially', () => {
  const { result } = renderHook(() => useScrollReveal())
  expect(result.current.isVisible).toBe(false)
})

test('isVisible becomes true when element intersects', () => {
  const { result } = renderHook(() => useScrollReveal())
  act(() => {
    mockCallback([{ isIntersecting: true }])
  })
  expect(result.current.isVisible).toBe(true)
})

test('isVisible stays false when isIntersecting is false', () => {
  const { result } = renderHook(() => useScrollReveal())
  act(() => {
    mockCallback([{ isIntersecting: false }])
  })
  expect(result.current.isVisible).toBe(false)
})

test('isVisible is true immediately when prefers-reduced-motion is set', () => {
  window.matchMedia = vi.fn(() => ({ matches: true }))
  const { result } = renderHook(() => useScrollReveal())
  expect(result.current.isVisible).toBe(true)
})
