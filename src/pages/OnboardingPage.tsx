import { Link } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'

const OnboardingPage = () => {
  return (
    <div>
      <Link to={ROUTES.CATEGORIES}>카테고리 가기</Link>
    </div>
  )
}

export default OnboardingPage
