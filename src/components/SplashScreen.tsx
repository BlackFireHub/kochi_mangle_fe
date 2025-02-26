import logo from '@/assets/splash_logo.png'

const SplashScreen = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="bg-splash-image relative z-9 mx-auto flex min-h-full max-w-[430px] flex-col justify-between">
        <div className="px-[45px]">
          <h1 className="mt-[180px] flex justify-center">
            <img src={logo} alt="Logo" />
          </h1>
          <div className="mt-10 text-center">
            <h4>
              이야기와 함께 <br /> 만들고 맛보는 제주 향토음식 <br /> 고치멩글레?
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
