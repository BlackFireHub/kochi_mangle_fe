import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="fixed top-0 left-0 z-2 h-full w-full bg-gray-100" />

      <div className="relative z-9 mx-auto flex min-h-full max-w-[430px] flex-col justify-between bg-white">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
