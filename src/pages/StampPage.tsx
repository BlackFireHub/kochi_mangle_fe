import { IconButton, Text } from '@goorm-dev/vapor-core'
import { ChevronLeftOutlineIcon } from '@goorm-dev/vapor-icons'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import { STAMP_LIST } from '@/constants/stamp'

const StampPage = () => {
  const navigate = useNavigate()
  const totalFoodCount = STAMP_LIST.reduce((sum, category) => sum + category.count, 0)

  return (
    <div className="p-[16px]">
      <div className="relative h-[48px]">
        <IconButton
          rounded
          shape="invisible"
          size="xl"
          color="contrast"
          disabled={false}
          aria-label="뒤로가기"
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute',
            top: 0,
            left: -16,
          }}
        >
          <ChevronLeftOutlineIcon size="24" />
        </IconButton>
      </div>

      <Text as="h2" typography="heading4" className="flex h-[48px] items-center justify-center">
        지금까지 {totalFoodCount}개의 음식을 지켜냈어요.
      </Text>

      <ul className="mt-[16px] grid grid-cols-2 gap-[16px]">
        {STAMP_LIST.map((category) => {
          const isDisabled = category.count === 0

          return (
            <li
              key={category.slug}
              className="cursor-pointer rounded-[16px] border border-[var(--border-color)] py-[var(--space-500)] transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-[16px] w-[64px]">
                  <img src={category.image} alt={category.slug} className="w-full" />
                  {isDisabled && (
                    <div className="absolute inset-0 rounded-full bg-gray-200 opacity-80" />
                  )}
                </div>

                <Text as="h4" typography="heading5" className={clsx(isDisabled && 'text-gray-400')}>
                  {category.name}
                </Text>

                <Text
                  as="p"
                  typography="heading6"
                  className={clsx('text-center', isDisabled && 'text-gray-400')}
                >
                  {category.count}개
                </Text>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StampPage
