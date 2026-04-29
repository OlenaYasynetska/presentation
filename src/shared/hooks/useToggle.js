import { useCallback, useState } from 'react'

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial)
  const toggle = useCallback(() => setOn((v) => !v), [])
  const set = useCallback((value) => setOn(Boolean(value)), [])
  return { on, toggle, set }
}
