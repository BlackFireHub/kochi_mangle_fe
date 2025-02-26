import { useEffect, useState } from 'react'

import axios from 'axios'
import { Banknote, Calendar, ChevronLeft, MapPin, User } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

// import alert from '@/assets/alert.png'
import { classDetail } from '@/constants/classDetail'
import { imgList } from '@/constants/classList'
import { API_URL } from '@/constants/core'

// import { ROUTES } from '@/constants/routes'

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

const ClassDetailPage = () => {
  const navigate = useNavigate()
  // const maxParticipants = 10
  // const currentParticipants = classDetail[0].participants
  const { slug, id } = useParams<{ slug: string; id: string }>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const [clazz, setClazz] = useState<Clazz | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/class/${id}`)
        setClazz(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const handleNextClick = () => {
  //   navigate(ROUTES.STAMP)
  // }

  return (
    <div className="p-[var(--space-200)]">
      <div className="relative h-[48px]">
        <button
          // rounded
          // shape="invisible"
          // size="xl"
          // color="contrast"
          // disabled={false}
          // aria-label=" 뒤로가기"
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

      {clazz && (
        <div>
          <div className="mb-[var(--space-200)]">
            <div className="mb-[var(--space-200)] flex h-[193px] overflow-hidden rounded-[var(--space-200)] border border-[var(--border-color)] bg-[var(--gray-100)]">
              <img
                src={imgList[clazz.class_id - 1]}
                alt={clazz.class_name}
                className="h-full w-full object-cover"
              />
            </div>
            <h2>{clazz.class_name}</h2>
            <p>{clazz.class_article}</p>
          </div>
          <div className="mb-[var(--space-200)] rounded-[var(--border-radius-500)] bg-[var(--gray-100)] p-[var(--space-200)]">
            <div className="mb-[var(--space-200)] flex gap-[var(--space-200)]">
              <div className="flex h-[48px] w-[48px] overflow-hidden rounded-4xl bg-[var(--gray-100)]">
                <img
                  src={classDetail[0].userImg}
                  alt={clazz.teacher_name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2> {clazz.teacher_name}</h2>

                <p> {clazz.teacher_article}</p>
              </div>
            </div>

            <hr className="my-[var(--space-200)] border-[var(--border-color)]" />

            <div className="flex">
              <div className="mr-[var(--space-200)] flex flex-col gap-[var(--space-100)]">
                <div className="flex items-center">
                  <Calendar size={16} className="color-[var(--gray-700)]" />
                  <p>진행기간</p>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="color-[var(--gray-700)]" />
                  <p>지역</p>
                </div>
                <div className="flex items-center">
                  <User size={16} className="color-[var(--gray-700)]" />
                  <p>참여 현황</p>
                </div>
                <div className="flex items-center">
                  <Banknote />
                  <p>가격</p>
                </div>
              </div>

              <div className="flex flex-col gap-[var(--space-100)]">
                <div className="flex items-center">
                  <p>{clazz.due_date}</p>
                </div>
                <div className="flex items-center">
                  <p>{clazz.due_date}</p>
                </div>
                <div className="flex items-center">
                  <p>
                    {clazz.now_participants} / {clazz.max_participants}명
                  </p>
                </div>
                <div className="flex items-center">
                  <p> {clazz.how_much}원</p>
                </div>
              </div>
            </div>
          </div>

          <p> {clazz.class_detail}</p>

          {/* <Dialog>
            <Dialog.Trigger asChild className="mt-[16px]">
              <Button
                size="xl"
                color="danger"
                stretch
                disabled={currentParticipants >= maxParticipants}
              >
                {currentParticipants >= maxParticipants ? '참여 마감' : '배우러 가기'}
              </Button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="mx-auto max-w-[430px] bg-black" />
              <Dialog.Content className="top-auto bottom-[-174px] max-w-[430px] translate-y-0 overflow-hidden rounded-tl-md rounded-tr-md bg-white">
                <Dialog.Header className="flex justify-end p-[16px]">
                  <Dialog.Close asChild>
                    <Button size="lg" color="secondary">
                      <CloseOutlineIcon size={24} />
                    </Button>
                  </Dialog.Close>
                </Dialog.Header>
                <Dialog.Body className="flex flex-col items-center justify-center p-[16px]">
                  <Dialog.Description className="w-[120px]">
                    <img src={alert} alt="알림" />
                  </Dialog.Description>
                  <Dialog.Title className="text-center">
                    신청이 완료되었습니다! <br />
                    확정되면 알림을 보내드릴게요.
                  </Dialog.Title>
                </Dialog.Body>
                <Dialog.Footer className="p-[16px]">
                  <Button
                    className="height-[48px] rounded-lg bg-red-700 py-[16px] text-white"
                    onClick={handleNextClick}
                    stretch
                  >
                    확인
                  </Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog> */}
        </div>
      )}
    </div>
  )
}

export default ClassDetailPage
