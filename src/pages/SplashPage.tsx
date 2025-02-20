import { Link } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'

const SplashPage = () => {
  return (
    <div>
      <Link to={ROUTES.ONBOARDING}>온보딩페이지 가기</Link>
    </div>
  )
}

export default SplashPage
