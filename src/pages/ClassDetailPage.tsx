import { useEffect } from 'react'

import { Button, IconButton, Text } from '@goorm-dev/vapor-core'
import {
  CalendarIcon,
  ChevronLeftOutlineIcon,
  LocationIcon,
  PriceOutlineIcon,
  UserIcon,
} from '@goorm-dev/vapor-icons'
import { useNavigate, useParams } from 'react-router-dom'

import { classDetail } from '@/constants/classDetail'

const ClassDetailPage = () => {
  const navigate = useNavigate()
  const maxParticipants = 10
  const currentParticipants = classDetail[0].participants
  const { slug } = useParams<{ slug: string; id: string }>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const handleNextClick = () => {
    alert('배우러 가기 버튼이 클릭되었습니다!')
  }

  return (
    <div className="p-[var(--space-200)]">
      <div className="relative h-[48px]">
        <IconButton
          rounded
          shape="invisible"
          size="xl"
          color="contrast"
          disabled={false}
          aria-label=" 뒤로가기"
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

      <div>
        <div className="mb-[var(--space-200)]">
          <div className="mb-[var(--space-200)] flex h-[193px] overflow-hidden rounded-[var(--space-200)] border border-[var(--border-color)] bg-[var(--gray-100)]">
            <img
              src={classDetail[0].img}
              alt={classDetail[0].name}
              className="h-full w-full object-cover"
            />
          </div>
          <Text as="h2" typography="heading4">
            {classDetail[0].name}
          </Text>
          <Text as="p" typography="subtitle1" color="foreground-hint">
            {classDetail[0].description}
          </Text>
        </div>
        <div className="mb-[var(--space-200)] rounded-[var(--border-radius-500)] bg-[var(--gray-100)] p-[var(--space-200)]">
          <div className="mb-[var(--space-200)] flex gap-[var(--space-200)]">
            <div className="flex h-[48px] w-[48px] overflow-hidden rounded-4xl bg-[var(--gray-100)]">
              <img
                src={classDetail[0].userImg}
                alt={classDetail[0].userNickname}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <Text as="h2" typography="heading5">
                {classDetail[0].userNickname}
              </Text>
              <Text as="p" typography="subtitle1" color="foreground-hint">
                {classDetail[0].userInfo}
              </Text>
            </div>
          </div>

          <hr className="my-[var(--space-200)] border-[var(--border-color)]" />

          <div className="flex">
            <div className="mr-[var(--space-200)] flex flex-col gap-[var(--space-100)]">
              <div className="flex items-center">
                <CalendarIcon size={16} className="color-[var(--gray-700)]" />
                <Text as="p" typography="subtitle1" color="foreground-secondary" className="ml-1">
                  진행기간
                </Text>
              </div>
              <div className="flex items-center">
                <LocationIcon size={16} className="color-[var(--gray-700)]" />
                <Text as="p" typography="subtitle1" color="foreground-secondary" className="ml-1">
                  지역
                </Text>
              </div>
              <div className="flex items-center">
                <UserIcon size={16} className="color-[var(--gray-700)]" />
                <Text as="p" typography="subtitle1" color="foreground-secondary" className="ml-1">
                  참여 현황
                </Text>
              </div>
              <div className="flex items-center">
                <PriceOutlineIcon size={16} className="color-[var(--gray-700)]" />
                <Text as="p" typography="subtitle1" color="foreground-secondary" className="ml-1">
                  가격
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-[var(--space-100)]">
              <div className="flex items-center">
                <Text as="p" typography="subtitle1" color="foreground-secondary" className="ml-1">
                  {classDetail[0].endDate}
                </Text>
              </div>
              <div className="flex items-center">
                <Text as="p" typography="subtitle1" color="foreground-secondary" className="ml-1">
                  {classDetail[0].location}
                </Text>
              </div>
              <div className="flex items-center">
                <Text as="p" typography="subtitle1" color="foreground-secondary" className="ml-1">
                  {classDetail[0].participants}
                </Text>
              </div>
              <div className="flex items-center">
                <Text as="p" typography="subtitle1" color="foreground-secondary" className="ml-1">
                  {classDetail[0].price}
                </Text>
              </div>
            </div>
          </div>
        </div>

        <Text as="p" typography="subtitle1" color="foreground-hint">
          {classDetail[0].foodIntro}
        </Text>

        <div className="mt-[16px]">
          <Button
            size="xl"
            color="danger"
            stretch
            disabled={currentParticipants >= maxParticipants}
            onClick={currentParticipants < maxParticipants ? handleNextClick : undefined}
          >
            {currentParticipants >= maxParticipants ? '참여 마감' : '배우러 가기'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ClassDetailPage
