import { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'

import SplashScreen from '@/components/SplashScreen'

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-screen w-full">
      <div className="fixed top-0 left-0 z-2 h-full w-full bg-gray-100" />

      <div className="relative z-9 mx-auto flex min-h-full max-w-[430px] flex-col justify-between bg-white">
        {isLoading ? <SplashScreen /> : <Outlet />}
      </div>
    </div>
  )
}

export default RootLayout
