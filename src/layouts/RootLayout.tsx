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
    <div className="relative min-h-screen bg-gray-100">
      <main className="absolute top-0 right-0 bottom-0 left-0 m-auto w-full max-w-[375px] bg-white shadow-md">
        {isLoading ? <SplashScreen /> : <Outlet />}
      </main>
    </div>
  )
}

export default RootLayout
