import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <main className="absolute top-0 right-0 bottom-0 left-0 m-auto w-full max-w-[375px] bg-white shadow-md">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
