import { Text } from '@goorm-dev/vapor-core'

const SplashScreen = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="fixed top-0 left-0 z-2 h-full w-full bg-gray-100" />

      <div className="relative z-9 mx-auto flex min-h-full max-w-[430px] flex-col justify-between bg-white">
        <div className="px-[45px]">
          <h1 className="mt-16">
            <img src="/logo.svg" alt="Logo" />
          </h1>
          <div className="mt-10">
            <img src="/splash.webp" alt="Splash Background" />
          </div>
          <div className="mt-10 text-center">
            <Text typography="heading4">
              이야기와 함께 <br /> 만들고 맛보는 제주 향토음식
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
