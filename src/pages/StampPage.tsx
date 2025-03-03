import { useEffect, useState } from 'react'

import axios from 'axios'
import clsx from 'clsx'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { CATEGORY_LIST } from '@/constants/categories'
import { API_URL } from '@/constants/core'

type NumberMap = {
  [key: string]: number
}

const mockStampMap: NumberMap = {
  '1': 3,
  '2': 5,
  '3': 0,
  '4': 2,
  '5': 7,
  '6': 0,
}

const StampPage = () => {
  const navigate = useNavigate()
  const [stampMap, setStampMap] = useState<NumberMap>({})

  const totalFoodCount = Object.values(stampMap).reduce((acc, cur) => acc + cur, 0)

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/stamp`)
        setStampMap(response.data)
      } catch (err) {
        console.error(err)
        setStampMap(mockStampMap)
      }
    }

    fetch()
  }, [])

  return (
    <div className="p-dimension-200">
      <div className="h-dimension-600 relative">
        <button onClick={() => navigate(-1)} className="absolute top-1/2 -left-2 -translate-y-1/2">
          <ChevronLeft />
        </button>
      </div>

      <h2 className="typography-heading4 flex justify-center">
        지금까지 {totalFoodCount}개의 음식을 지켜냈어요.
      </h2>

      <ul className="mt-dimension-200 gap-dimension-200 grid grid-cols-2">
        {Object.entries(stampMap).map(([key, value]) => {
          const isDisabled = value === 0
          const categoryIndex = parseInt(key) - 1
          const category = CATEGORY_LIST[categoryIndex] || {
            image: '',
            slug: '',
            name: '알 수 없음',
          }

          return (
            <li
              key={key}
              className="border-border py-dimension-500 cursor-pointer rounded-2xl border transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="mb-dimension-200 relative w-[64px]">
                  <img src={category.image} alt={category.slug} className="w-full" />
                  {isDisabled && (
                    <div className="absolute inset-0 rounded-full bg-gray-200 opacity-80" />
                  )}
                </div>

                <h4 className={clsx('typography-heading5', isDisabled && 'text-gray-400')}>
                  {category.name}
                </h4>

                <p
                  className={clsx('typography-heading6 text-center', isDisabled && 'text-gray-400')}
                >
                  {value}개
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StampPage
