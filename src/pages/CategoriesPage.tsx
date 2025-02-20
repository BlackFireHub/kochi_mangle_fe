import { Link } from 'react-router-dom'

import { CATEGORY_LIST } from '@/constants/categories'
import { ROUTES } from '@/constants/routes'

const CategoriesPage = () => {
  return (
    <div>
      <h1>카테고리 목록</h1>
      <ul>
        {CATEGORY_LIST.map((category) => (
          <li key={category.slug}>
            <Link to={ROUTES.CLASS_LIST(category.slug)}>
              <button>{category.name}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesPage
