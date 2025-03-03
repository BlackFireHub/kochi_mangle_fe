import classList1 from '@/assets/class/class_list_1.jpg'
import user1 from '@/assets/user/1.jpeg'

export const classDetail = [
  {
    category_id: 1,
    class_id: 1,
    img: classList1,
    userImg: user1,
    due_date: '2025-07-12',
    loc: '제주시 이도 2동',
    now_participants: 9,
    max_participants: 10, // 최대 참가자 수 설정
    how_much: 15000,
    teacher_name: '해녀 김바당',
    teacher_article: '20년 경력 바다의 이야기꾼',
    class_name: '해녀의 바당요리1',
    class_article: '해녀의 불턱에서 성게국과 옥돔구이를 만드는 소중한 시간을 함께 해요.',
    class_detail:
      '제주 인심이 담겨있는 별미 성게국과 임금님께 진상되던 옥돔을 직접 굽고 맛보면, 제주 바다는 절대 잊을 수 없을 거예요.',
    is_closed: 9 >= 10, // 참가자가 최대 인원에 도달하면 true
  },
]
