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
    <div className="p-[16px]">
      <h2>어떤 이야기가 담긴 음식을 배워볼까요?</h2>

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

              <h4>{category.name}</h4>

              <p>
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
        <Button color="danger" disabled={!selectedCategory} onClick={handleNextClick}>
          다음
        </Button>
      </div>
    </div>
  )
}

export default CategoriesPage
