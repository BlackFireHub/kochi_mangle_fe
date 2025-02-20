import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import RootLayout from '@/layouts/RootLayout'
import CategoriesPage from '@/pages/CategoriesPage'
import ClassDetailPage from '@/pages/ClassDetailPage'
import ClassListPage from '@/pages/ClassListPage'
import OnboardingPage from '@/pages/OnboardingPage'
import SplashPage from '@/pages/SplashPage'

import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path={ROUTES.HOME} element={<SplashPage />} />
          <Route path={ROUTES.ONBOARDING} element={<OnboardingPage />} />
          <Route path={ROUTES.CATEGORIES} element={<CategoriesPage />} />
          <Route path={ROUTES.CLASS_LIST(':slug')} element={<ClassListPage />} />
          <Route path={ROUTES.CLASS_DETAIL(':slug', ':id')} element={<ClassDetailPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
