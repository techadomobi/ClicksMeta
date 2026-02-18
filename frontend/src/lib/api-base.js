export function getApiBaseUrl() {
  const configured = import.meta.env.VITE_API_BASE_URL?.trim()
  const normalized = configured ? configured.replace(/\/$/, "") : ""
  if (normalized) {
    return normalized
  }

  if (typeof window !== "undefined" && window.location) {
    return window.location.origin
  }

  if (typeof process !== "undefined" && process.env?.VERCEL_URL) {
    const protocol = process.env.VERCEL_URL.startsWith("http") ? "" : "https://"
    return `${protocol}${process.env.VERCEL_URL}`.replace(/\/$/, "")
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
