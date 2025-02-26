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
      }
    }

    fetch()
  }, [])

  return (
    <div className="p-[16px]">
      <div className="relative h-[48px]">
        <button
          // rounded
          // shape="invisible"
          // size="xl"
          // color="contrast"
          // disabled={false}
          // aria-label="뒤로가기"
          onClick={() => navigate(-1)}
          // style={{
          //   position: 'absolute',
          //   top: 0,
          //   left: -16,
          // }}
        >
          <ChevronLeft size="24" />
        </button>
      </div>

      <h2> 지금까지 {totalFoodCount}개의 음식을 지켜냈어요.</h2>

      <ul className="mt-[16px] grid grid-cols-2 gap-[16px]">
        {Object.entries(stampMap).map(([key, value]) => {
          const isDisabled = value === 0

          return (
            <li
              key={key}
              className="cursor-pointer rounded-[16px] border border-[var(--border-color)] py-[var(--space-500)] transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-[16px] w-[64px]">
                  <img
                    src={CATEGORY_LIST[parseInt(key) - 1].image}
                    alt={CATEGORY_LIST[parseInt(key) - 1].slug}
                    className="w-full"
                  />
                  {isDisabled && (
                    <div className="absolute inset-0 rounded-full bg-gray-200 opacity-80" />
                  )}
                </div>

                <h4 className={clsx(isDisabled && 'text-gray-400')}>
                  {CATEGORY_LIST[parseInt(key) - 1].name}
                </h4>

                <p className={clsx('text-center', isDisabled && 'text-gray-400')}> {value}개</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StampPage
