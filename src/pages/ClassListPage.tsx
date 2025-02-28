import { useEffect, useState } from 'react'

import axios from 'axios'
import { Calendar, ChevronLeft, MapPin } from 'lucide-react'
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
    <div className="p-dimension-200">
      <div className="relative flex items-center justify-center h-dimension-600">
        <button onClick={() => navigate(-1)} className="absolute -translate-y-1/2 top-1/2 -left-2">
          <ChevronLeft />
        </button>

        <h2 className="typography-heading4">{category?.name || '클래스'}</h2>
      </div>
      {/* TODO:: 후순위 기능 */}
      {/* <div className="flex">
        <Button>최신순</Button>
        <Button>마감순</Button>
      </div> */}

      <ul className="my-dimension-200">
        {classList.map((classItem) => {
          return (
            <li key={classItem.class_id} className="mb-dimension-200">
              <Link
                to={ROUTES.CLASS_DETAIL(safeSlug, classItem.class_id.toString())}
                className="flex gap-dimension-200"
              >
                <div className="rounded-dimension-200 border-border flex aspect-square w-[100px] overflow-hidden rounded-2xl border bg-gray-100">
                  <img
                    src={imgList[classItem.class_id - 1]}
                    alt={classItem.class_name}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <h4 className="typography-heading5"> {classItem.class_name}</h4>

                  <p className="text-gray-700 typography-subtitle1">{classItem.class_article}</p>
                  <div className="flex">
                    <div className="flex items-center mr-1">
                      <Calendar size={16} className="text-red-500" />
                      <p className="typography-subtitle1 ml-[1px] text-red-500">
                        {classItem.due_date} 까지
                      </p>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="text-gray-500" />
                      <p className="typography-subtitle1 ml-[1px] text-gray-500">
                        {' '}
                        {classItem.loc}
                      </p>
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
