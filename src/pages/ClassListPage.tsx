import { useEffect, useState } from 'react';



import { IconButton, Text } from '@goorm-dev/vapor-core';
import { CalendarIcon, ChevronLeftOutlineIcon, LocationIcon } from '@goorm-dev/vapor-icons';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



import { CATEGORY_LIST } from '@/constants/categories';
import { imgList } from '@/constants/classList';
import { ROUTES } from '@/constants/routes';





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
        const response = await axios.get(`http://http://nginx-service/api/category/1`)
        setClassList(response.data)

        // 로컬 테스트용
        // setClassList([
        //   {
        //     category_id: 1,
        //     class_id: 1,
        //     due_date: '2025-07-12',
        //     loc: '제주시 이도2동',
        //     now_participants: 2,
        //     max_participants: 10,
        //     how_much: 15000,
        //     teacher_name: '해녀 김바당',
        //     teacher_article: '20년 경력 바다의 이야기꾼',
        //     class_name: '해녀의 바당요리',
        //     class_article: '해녀의 불턱에서 성게국과 옥돔구이를 만드는 소중한 시간을 함께 해요',
        //     class_detail:
        //       '제주의 인심이 담겨 있다는 별미 성게국과 임금님께 진상되던 옥돔을 직접 구워 맛보면 제주의 바다가 펼쳐질거에요.',
        //     is_closed: false,
        //   },
        //   {
        //     category_id: 1,
        //     class_id: 2,
        //     due_date: '2025-07-12',
        //     loc: '제주시 이도2동',
        //     now_participants: 2,
        //     max_participants: 10,
        //     how_much: 15000,
        //     teacher_name: '해녀 김바당',
        //     teacher_article: '20년 경력 바다의 이야기꾼',
        //     class_name: '해녀의 바당요리',
        //     class_article: '해녀의 불턱에서 성게국과 옥돔구이를 만드는 소중한 시간을 함께 해요',
        //     class_detail:
        //       '제주의 인심이 담겨 있다는 별미 성게국과 임금님께 진상되던 옥돔을 직접 구워 맛보면 제주의 바다가 펼쳐질거에요.',
        //     is_closed: false,
        //   },
        //   {
        //     category_id: 1,
        //     class_id: 3,
        //     due_date: '2025-07-12',
        //     loc: '제주시 이도2동',
        //     now_participants: 2,
        //     max_participants: 10,
        //     how_much: 15000,
        //     teacher_name: '해녀 김바당',
        //     teacher_article: '20년 경력 바다의 이야기꾼',
        //     class_name: '해녀의 바당요리',
        //     class_article: '해녀의 불턱에서 성게국과 옥돔구이를 만드는 소중한 시간을 함께 해요',
        //     class_detail:
        //       '제주의 인심이 담겨 있다는 별미 성게국과 임금님께 진상되던 옥돔을 직접 구워 맛보면 제주의 바다가 펼쳐질거에요.',
        //     is_closed: false,
        //   },
        //   {
        //     category_id: 1,
        //     class_id: 4,
        //     due_date: '2025-07-12',
        //     loc: '제주시 이도2동',
        //     now_participants: 2,
        //     max_participants: 10,
        //     how_much: 15000,
        //     teacher_name: '해녀 김바당',
        //     teacher_article: '20년 경력 바다의 이야기꾼',
        //     class_name: '해녀의 바당요리',
        //     class_article: '해녀의 불턱에서 성게국과 옥돔구이를 만드는 소중한 시간을 함께 해요',
        //     class_detail:
        //       '제주의 인심이 담겨 있다는 별미 성게국과 임금님께 진상되던 옥돔을 직접 구워 맛보면 제주의 바다가 펼쳐질거에요.',
        //     is_closed: false,
        //   },
        //   {
        //     category_id: 1,
        //     class_id: 5,
        //     due_date: '2025-07-12',
        //     loc: '제주시 이도2동',
        //     now_participants: 2,
        //     max_participants: 10,
        //     how_much: 15000,
        //     teacher_name: '해녀 김바당',
        //     teacher_article: '20년 경력 바다의 이야기꾼',
        //     class_name: '해녀의 바당요리',
        //     class_article: '해녀의 불턱에서 성게국과 옥돔구이를 만드는 소중한 시간을 함께 해요',
        //     class_detail:
        //       '제주의 인심이 담겨 있다는 별미 성게국과 임금님께 진상되던 옥돔을 직접 구워 맛보면 제주의 바다가 펼쳐질거에요.',
        //     is_closed: false,
        //   },
        //   {
        //     category_id: 1,
        //     class_id: 6,
        //     due_date: '2025-07-12',
        //     loc: '제주시 이도2동',
        //     now_participants: 2,
        //     max_participants: 10,
        //     how_much: 15000,
        //     teacher_name: '해녀 김바당',
        //     teacher_article: '20년 경력 바다의 이야기꾼',
        //     class_name: '해녀의 바당요리',
        //     class_article: '해녀의 불턱에서 성게국과 옥돔구이를 만드는 소중한 시간을 함께 해요',
        //     class_detail:
        //       '제주의 인심이 담겨 있다는 별미 성게국과 임금님께 진상되던 옥돔을 직접 구워 맛보면 제주의 바다가 펼쳐질거에요.',
        //     is_closed: false,
        //   },
        // ])
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