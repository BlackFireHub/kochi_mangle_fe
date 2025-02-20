import { useNavigate, useParams } from 'react-router-dom'

const ClassDetailPage = () => {
  const navigate = useNavigate()
  const { slug, id } = useParams<{ slug: string; id: string }>()

  return (
    <div>
      <button onClick={() => navigate(-1)} className="mb-4 rounded bg-gray-200 px-4 py-2">
        뒤로가기
      </button>
      <h1>클래스 상세 페이지</h1>
      <p>카테고리: {slug}</p>
      <p>클래스 ID: {id}</p>
    </div>
  )
}

export default ClassDetailPage
