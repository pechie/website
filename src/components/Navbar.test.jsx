import { vi } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

test('adds resize listener once and removes it on unmount', () => {
  const addSpy = vi.spyOn(window, 'addEventListener')
  const removeSpy = vi.spyOn(window, 'removeEventListener')

  const { unmount } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  const resizeCalls = addSpy.mock.calls.filter(([event]) => event === 'resize')
  expect(resizeCalls).toHaveLength(1)

  unmount()

  const removeCalls = removeSpy.mock.calls.filter(([event]) => event === 'resize')
  expect(removeCalls).toHaveLength(1)
})
