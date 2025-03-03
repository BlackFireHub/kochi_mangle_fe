import { useEffect, useState } from 'react'

import axios from 'axios'
import { Calendar, ChevronLeft, MapPin } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'

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

const mockClassList: Clazz[] = [
  {
    category_id: 1,
    class_id: 1,
    due_date: '2025-07-12',
    loc: '제주시 이도 2동',
    now_participants: 9,
    max_participants: 10,
    how_much: 15000,
    teacher_name: '해녀 김바당',
    teacher_article: '20년 경력 바다의 이야기꾼',
    class_name: '해녀의 바당요리1',
    class_article: '해녀의 불턱에서 성게국과 옥돔구이를 만드는 소중한 시간을 함께 해요.',
    class_detail:
      '제주 인심이 담긴 성게국과 옥돔구이를 직접 만들고 맛보며, 제주 바다의 매력을 체험할 수 있습니다.',
    is_closed: 9 >= 10,
  },
  {
    category_id: 1,
    class_id: 2,
    due_date: '2025-08-05',
    loc: '서귀포시 대정읍',
    now_participants: 5,
    max_participants: 15,
    how_much: 20000,
    teacher_name: '장인 박명수',
    teacher_article: '30년 경력의 제주 전통 음식 장인',
    class_name: '제주 전통음식 만들기',
    class_article: '제주의 전통 음식을 배우고 맛보는 시간!',
    class_detail: '흑돼지 구이와 고사리 볶음을 직접 만들어보는 체험형 클래스입니다.',
    is_closed: 5 >= 15,
  },
]

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
        setClassList(mockClassList)
      }
    }

    fetch()
  }, [])

  return (
    <div className="p-dimension-200">
      <div className="h-dimension-600 relative flex items-center justify-center">
        <button onClick={() => navigate(-1)} className="absolute top-1/2 -left-2 -translate-y-1/2">
          <ChevronLeft />
        </button>
        <h2 className="typography-heading4">{category?.name || '클래스'}</h2>
      </div>

      <ul className="my-dimension-200">
        {classList.map((classItem) => (
          <li key={classItem.class_id} className="mb-dimension-200">
            <Link
              to={ROUTES.CLASS_DETAIL(safeSlug, classItem.class_id.toString())}
              className="gap-dimension-200 flex"
            >
              <div className="rounded-dimension-200 border-border flex aspect-square w-[100px] overflow-hidden rounded-2xl border bg-gray-100">
                <img
                  src={imgList[classItem.class_id - 1]}
                  alt={classItem.class_name}
                  className="w-full"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <h4 className="typography-heading5">{classItem.class_name}</h4>
                <p className="typography-subtitle1 text-gray-700">{classItem.class_article}</p>
                <div className="flex">
                  <div className="mr-1 flex items-center">
                    <Calendar size={16} className="text-red-500" />
                    <p className="typography-subtitle1 ml-[1px] text-red-500">
                      {classItem.due_date} 까지
                    </p>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="text-gray-500" />
                    <p className="typography-subtitle1 ml-[1px] text-gray-500">{classItem.loc}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClassListPage
