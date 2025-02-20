import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { CATEGORY_LIST } from '@/constants/categories'
import { ROUTES } from '@/constants/routes'

const ClassListPage = () => {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug?: string }>()
  const safeSlug = slug ?? ''
  const category = CATEGORY_LIST.find((category) => category.slug === slug)

  const classList = [
    { id: '1', name: '클래스 1' },
    { id: '2', name: '클래스 2' },
    { id: '3', name: '클래스 3' },
  ]

  return (
    <div>
      <button onClick={() => navigate(-1)} className="mb-4 rounded bg-gray-200 px-4 py-2">
        뒤로가기
      </button>
      <h1>{category?.name || '카테고리 없음'}</h1>
      <ul>
        {classList.map((classItem) => {
          return (
            <li key={classItem.id}>
              <Link to={ROUTES.CLASS_DETAIL(safeSlug, classItem.id)}>{classItem.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ClassListPage
