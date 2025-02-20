import { useEffect, useState } from 'react'

import { Button, Text } from '@goorm-dev/vapor-core'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import SplashScreen from '@/components/SplashScreen'
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
    <div className="p-[16px]">
      <Text as="h2" typography="heading4" className="flex h-[48px] items-center justify-center">
        어떤 이야기가 담긴 음식을 배워볼까요?
      </Text>
      <ul className="mt-[16px] grid grid-cols-2 gap-[16px]">
        {CATEGORY_LIST.map((category) => (
          <li
            key={category.slug}
            className={clsx(
              'cursor-pointer rounded-[16px] border border-[var(--border-color)] py-4 transition-all',
              selectedCategory === category.slug && 'border-[var(--red-500)]',
            )}
            onClick={() => handleCategorySelect(category.slug)}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-[64px]">
                <img src={category.image} alt={category.slug} />
              </div>
              <Text as="h4" typography="heading5">
                {category.name}
              </Text>
              <Text as="p" typography="subtitle2" className="text-center">
                {category.description.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </Text>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-[16px]">
        <Button
          size="xl"
          color="danger"
          stretch
          disabled={!selectedCategory}
          onClick={handleNextClick}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export default CategoriesPage
