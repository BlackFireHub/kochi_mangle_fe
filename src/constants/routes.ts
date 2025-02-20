export const ROUTES = {
  HOME: '/',
  ONBOARDING: '/onboarding',
  CATEGORIES: '/categories',
  CLASS_LIST: (slug: string) => `/class-list/${slug}`,
  CLASS_DETAIL: (slug: string, id: string) => `/class-list/${slug}/${id}`,
} as const
