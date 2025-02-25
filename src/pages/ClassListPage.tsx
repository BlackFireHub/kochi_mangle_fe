import { useEffect, useState } from 'react'

import { IconButton, Text } from '@goorm-dev/vapor-core'
import { CalendarIcon, ChevronLeftOutlineIcon, LocationIcon } from '@goorm-dev/vapor-icons'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { CATEGORY_LIST } from '@/constants/categories'
import { imgList } from '@/constants/classList'
import { API_URL } from '@/constants/core'
import { ROUTES } from '@/constants/routes'

interface Clazz {
  category_id: number
  class_id: number
  due_date: string
  loc: string
  now_participants: number
  max_participants: number
  how_much: number
  teacher_name: string
  teacher_article: string
  class_name: string
  class_article: string
  class_detail: string
  is_closed: boolean
}

const ClassListPage = () => {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug?: string }>()
  const safeSlug = slug ?? ''
  const category = CATEGORY_LIST.find((category) => category.slug === slug)

  const [classList, setClassList] = useState<Clazz[]>([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/category/1`)
        setClassList(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetch()
  }, [])

  return (
    <div className="p-[var(--space-200)]">
      <div className="relative flex h-[48px] items-center justify-center">
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

        <Text as="h2" typography="heading4">
          {category?.name || '클래스'}
        </Text>
      </div>
      {/* TODO:: 후순위 기능 */}
      {/* <div className="flex">
        <Button>최신순</Button>
        <Button>마감순</Button>
      </div> */}

      <ul className="my-[var(--space-200)]">
        {classList.map((classItem) => {
          return (
            <li key={classItem.class_id} className="mb-[var(--space-200)]">
              <Link
                to={ROUTES.CLASS_DETAIL(safeSlug, classItem.class_id.toString())}
                className="flex gap-[var(--space-200)]"
              >
                <div className="flex aspect-square w-[100px] overflow-hidden rounded-[var(--space-200)] border border-[var(--border-color)] bg-[var(--gray-100)]">
                  <img
                    src={imgList[classItem.class_id - 1]}
                    alt={classItem.class_name}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <Text as="h4" typography="heading5">
                    {classItem.class_name}
                  </Text>
                  <Text className="text-[var(--gray-700)]">{classItem.class_article}</Text>
                  <div className="flex">
                    <div className="mr-1 flex">
                      <CalendarIcon color="red" />
                      <Text
                        as="p"
                        typography="subtitle2"
                        color="foreground-danger"
                        className="ml-[1px]"
                      >
                        {classItem.due_date} 까지
                      </Text>
                    </div>
                    <div className="flex">
                      <LocationIcon color="gray" />
                      <Text
                        as="p"
                        typography="subtitle2"
                        color="foreground-hint"
                        className="ml-[1px]"
                      >
                        {classItem.loc}
                      </Text>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ClassListPage
