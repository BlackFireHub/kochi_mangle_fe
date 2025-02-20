import { Text } from '@goorm-dev/vapor-core'

const SplashScreen = () => {
  return (
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
  )
}

export default SplashScreen
