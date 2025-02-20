import festivalFood from '@/assets/categories/festival-and-feast-foods.png'
import armsOfHallasan from '@/assets/categories/in-the-arms-of-hallasan.png'
import memoryOfTheSea from '@/assets/categories/memory-of-the-sea.png'
import modernJeju from '@/assets/categories/modern-interpretation-of-jeju.png'
import mothersTaste from '@/assets/categories/mothers-taste-of-jeju.png'
import preservedFood from '@/assets/categories/preserved-foods-through-time.png'

export const CATEGORY_LIST = [
  {
    slug: 'memory-of-the-sea',
    name: '바다의 기억',
    image: memoryOfTheSea,
    description: '파도가 전하는\n제주 바다의 맛',
  },
  {
    slug: 'in-the-arms-of-hallasan',
    name: '한라의 품속에서',
    image: armsOfHallasan,
    description: '한라산이 품은\n대자연의 맛',
  },
  {
    slug: 'mothers-taste-of-jeju',
    name: '제주의 어머니 손맛',
    image: mothersTaste,
    description: '세월을 담아 전하는\n제주 엄마들의 밥상',
  },
  {
    slug: 'festival-and-feast-foods',
    name: '축제와 잔치 음식',
    image: festivalFood,
    description: '기쁠 때도 슬플 때도\n함께한 제주 음식',
  },
  {
    slug: 'preserved-foods-through-time',
    name: '시간을 견뎌온 보존식',
    image: preservedFood,
    description: '오래도록\n제주를 담다',
  },
  {
    slug: 'modern-interpretation-of-jeju',
    name: '제주의 현대식 재해석',
    image: modernJeju,
    description: '전통의 맛을\n오늘의 식탁으로',
  },
]
