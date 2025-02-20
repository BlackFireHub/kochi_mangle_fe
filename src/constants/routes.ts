export const ROUTES = {
  HOME: '/',
  CLASS_LIST: (slug: string) => `/class-list/${slug}`,
  CLASS_DETAIL: (slug: string, id: string) => `/class-list/${slug}/${id}`,
  STAMP: '/stamp',
} as const
