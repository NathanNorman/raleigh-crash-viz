import { describe, it, expect } from 'vitest'

describe('Smoke tests', () => {
  it('vite config is valid', async () => {
    const config = await import('../vite.config.js')
    expect(config.default).toBeDefined()
    expect(config.default.plugins).toBeDefined()
    expect(config.default.plugins.length).toBeGreaterThan(0)
  })

  it('App component exports a function', async () => {
    const App = await import('../src/App.jsx')
    expect(App.default).toBeDefined()
    expect(typeof App.default).toBe('function')
  })
})
