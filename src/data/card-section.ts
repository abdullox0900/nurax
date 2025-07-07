import img1 from '@/assets/card-section/img-1.jpg'
import img2 from '@/assets/card-section/img-2.jpg'
import img3 from '@/assets/card-section/img-3.jpg'
import img4 from '@/assets/card-section/img-4.jpg'
import img5 from '@/assets/card-section/img-5.jpg'
import { StaticImageData } from 'next/image'

// Define the card data types
type CardWithImage = {
	id: number
	title: string
	description: string
	image: StaticImageData | string
	category: string
	hasImage: true
}

type CardWithoutImage = {
	id: number
	title: string
	description: string
	category: string
	hasImage: false
}

export type Card = CardWithImage | CardWithoutImage

// Sample data for cards
export const cardsData: Card[] = [
	{
		id: 1,
		title: 'Планирование личных финансов с учетом российских реалий',
		description: 'Избранное',
		category: 'Жизнь',
		image: img1,
		hasImage: true,
	},
	{
		id: 2,
		title: 'Организация путешествия по России',
		description: 'Избранное',
		category: 'Путешествия',
		image: img2,
		hasImage: true,
	},
	{
		id: 3,
		title:
			'Создание плана здорового образа жизни с учетом доступных в РФ ресурсов',
		description: 'Избранное',
		category: 'Здоровье',
		hasImage: false,
	},
	{
		id: 4,
		title: 'Помощь в выборе образовательного учреждения в РФ',
		description: 'Избранное',
		category: 'Образование',
		image: img3,
		hasImage: true,
	},
	{
		id: 5,
		title: 'Помощь в поиске и аренде жилья в крупных городах РФ',
		description: 'Избранное',
		category: 'Жильё',
		image: img4,
		hasImage: true,
	},
	{
		id: 6,
		title: 'Исследуйте, вносите свой вклад или делайте форк нашего репозитория',
		description: 'Избранное',
		category: 'ИТ-развитие',
		hasImage: false,
	},
	{
		id: 7,
		title: 'Исследуйте, вносите свой вклад или делайте форк нашего репозитория',
		description: 'Избранное',
		category: 'ИТ-развитие',
		image: img5,
		hasImage: true,
	},
	{
		id: 8,
		title: 'Исследуйте, вносите свой вклад или делайте форк нашего репозитория',
		description: 'Избранное',
		category: 'ИТ-развитие',
		hasImage: false,
	},
	{
		id: 9,
		title: 'Исследуйте, вносите свой вклад или делайте форк нашего репозитория',
		description: 'Избранное',
		category: 'ИТ-развитие',
		image: img5,
		hasImage: true,
	},
	{
		id: 10,
		title: 'Исследуйте, вносите свой вклад или делайте форк нашего репозитория',
		description: 'Избранное',
		category: 'ИТ-развитие',
		image: img5,
		hasImage: true,
	},
]
