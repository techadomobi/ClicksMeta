export function getApiBaseUrl() {
  const configured = import.meta.env.VITE_API_BASE_URL?.trim()
  const normalized = configured ? configured.replace(/\/$/, "") : ""
  if (normalized) {
    return normalized
  }

  if (import.meta.env.DEV) {
    return "http://localhost:4000"
  }

  if (typeof window !== "undefined" && window.location) {
    return window.location.origin
  }

  return ""
}

export function buildApiUrl(path = "/") {
  const base = getApiBaseUrl()
  const safePath = path.startsWith("/") ? path : `/${path}`
  if (!base) {
    return safePath
  }
  return `${base}${safePath}`
}
