const defaultBase = import.meta.env.VITE_API_BASE_URL ?? ''

export async function apiClient(path, options = {}) {
  const url = `${defaultBase}${path}`
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || res.statusText)
  }
  if (res.status === 204) return null
  const ct = res.headers.get('content-type')
  if (ct?.includes('application/json')) return res.json()
  return res.text()
}
