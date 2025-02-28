import { useEffect, useState } from 'react'

import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import SplashScreen from '@/components/SplashScreen'
import { Button } from '@/components/ui/button'
import { CATEGORY_LIST } from '@/constants/categories'
import { ROUTES } from '@/constants/routes'

const CategoriesPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug)
  }

  const handleNextClick = () => {
    if (selectedCategory) {
      window.scrollTo(0, 0)
      navigate(ROUTES.CLASS_LIST(selectedCategory))
    }
  }

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <div className="p-dimension-200">
      <h2 className="typography-heading4 h-dimension-600 flex items-center justify-center">
        어떤 이야기가 담긴 음식을 배워볼까요?
      </h2>

      <ul className="gap-dimension-200 mt-dimension-200 grid grid-cols-2">
        {CATEGORY_LIST.map((category) => (
          <li
            key={category.slug}
            className={clsx(
              'border-border cursor-pointer rounded-2xl border py-4 transition-all',
              selectedCategory === category.slug && 'border-red-500',
            )}
            onClick={() => handleCategorySelect(category.slug)}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-[64px]">
                <img src={category.image} alt={category.slug} />
              </div>

              <h4 className="typography-heading5">{category.name}</h4>

              <p className="typography-subtitle2 text-center text-gray-500">
                {category.description.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-[16px]">
        <Button fullWidth disabled={!selectedCategory} onClick={handleNextClick}>
          다음
        </Button>
      </div>
    </div>
  )
}

export default CategoriesPage
