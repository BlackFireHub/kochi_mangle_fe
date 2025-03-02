import { useEffect, useState } from 'react'

import { DialogTitle } from '@radix-ui/react-dialog'
import axios from 'axios'
import { Banknote, Calendar, ChevronLeft, MapPin, User } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

import alertImg from '@/assets/alert.png'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import { classDetail } from '@/constants/classDetail'
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

const ClassDetailPage = () => {
  const navigate = useNavigate()
  const maxParticipants = 10
  const currentParticipants = classDetail[0].participants
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

  const handleNextClick = () => {
    navigate(ROUTES.STAMP)
  }

  return (
    <div className="p-dimension-200 relative">
      <div className="h-dimension-600 relative">
        <button onClick={() => navigate(-1)} className="absolute top-1/2 -left-2 -translate-y-1/2">
          <ChevronLeft />
        </button>
      </div>

      {clazz && (
        <div>
          <div className="mb-dimension-200">
            <div className="mb-dimension-200 rounded-dimension-200 border-border flex h-[193px] overflow-hidden rounded-2xl border bg-gray-100">
              <img
                src={imgList[clazz.class_id - 1]}
                alt={clazz.class_name}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="typography-heading4">{clazz.class_name}</h2>
            <p className="typography-subtitle1 text-gray-600">{clazz.class_article}</p>
          </div>
          <div className="mb-dimension-200 p-dimension-200 rounded-2xl bg-gray-100">
            <div className="mb-dimension-200 gap-dimension-200 flex">
              <div className="flex h-[48px] w-[48px] overflow-hidden rounded-4xl bg-gray-100">
                <img
                  src={classDetail[0].userImg}
                  alt={clazz.teacher_name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="typography-heading5"> {clazz.teacher_name}</h2>
                <p className="typography-subtitle1"> {clazz.teacher_article}</p>
              </div>
            </div>

            <hr className="my-dimension-200 border-border" />

            <div className="flex">
              <div className="mr-dimension-200 gap-dimension-100 flex flex-col">
                <div className="flex items-center">
                  <div className="mr-1 flex h-[18px] w-[18px] items-center justify-center">
                    <Calendar size={16} className="color-gray-700" />
                  </div>
                  <p className="typography-subtitle1 text-gray-700">진행기간</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 flex h-[18px] w-[18px] items-center justify-center">
                    <MapPin size={16} className="color-gray-700" />
                  </div>
                  <p className="typography-subtitle1 text-gray-700">지역</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 flex h-[18px] w-[18px] items-center justify-center">
                    <User size={16} className="color-gray-700" />
                  </div>
                  <p className="typography-subtitle1 text-gray-700">참여 현황</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 flex h-[18px] w-[18px] items-center justify-center">
                    <Banknote size={16} className="color-gray-700" />
                  </div>
                  <p className="typography-subtitle1 text-gray-700">가격</p>
                </div>
              </div>

              <div className="gap-dimension-100 flex flex-col">
                <div className="flex items-center">
                  <p className="typography-subtitle1 text-gray-700">{clazz.due_date}</p>
                </div>
                <div className="flex items-center">
                  <p className="typography-subtitle1 text-gray-700">{clazz.due_date}</p>
                </div>
                <div className="flex items-center">
                  <p className="typography-subtitle1 text-gray-700">
                    <span className="text-red-500"> {clazz.now_participants}</span> /{' '}
                    {clazz.max_participants}명
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="typography-body2 text-gray-600"> {clazz.how_much}원</p>
                </div>
              </div>
            </div>
          </div>

          <p> {clazz.class_detail}</p>

          <Dialog>
            <DialogTrigger
              disabled={currentParticipants >= maxParticipants}
              className="mt-[16px] h-[48px] w-full rounded-md bg-red-500 text-white"
            >
              {currentParticipants >= maxParticipants ? '참여 마감' : '배우러 가기'}
            </DialogTrigger>

            <DialogContent className="top-auto bottom-0 w-[430px] max-w-[430px] translate-y-0 overflow-hidden rounded-tl-2xl rounded-tr-2xl rounded-br-none rounded-bl-none">
              <DialogTitle className="sr-only">신청 완료</DialogTitle>
              <DialogClose asChild />
              <DialogDescription className="flex flex-col items-center justify-center p-4">
                <img src={alertImg} alt="알림" className="h-24 w-24" />
                <div className="typography-heading5 mt-4 text-center text-gray-700">
                  신청이 완료되었습니다! <br />
                  확정되면 알림을 보내드릴게요.
                </div>
              </DialogDescription>

              <DialogFooter>
                <Button
                  className="h-12 w-full rounded-lg bg-red-500 text-white"
                  onClick={handleNextClick}
                >
                  확인
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  )
}

export default ClassDetailPage
