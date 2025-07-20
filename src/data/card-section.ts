import { StaticImageData } from 'next/image'

import img1 from '@/assets/card-section/image001.jpg'
import img2 from '@/assets/card-section/image002.jpg'
import img3 from '@/assets/card-section/image003.jpg'
import img4 from '@/assets/card-section/image004.jpg'
import img5 from '@/assets/card-section/image005.jpg'
import img6 from '@/assets/card-section/image006.jpg'
import img7 from '@/assets/card-section/image007.jpg'
import img8 from '@/assets/card-section/image008.jpg'
import img9 from '@/assets/card-section/image009.jpg'
import img10 from '@/assets/card-section/image010.jpg'
import img11 from '@/assets/card-section/image011.jpg'
import img12 from '@/assets/card-section/image012.jpg'
import img13 from '@/assets/card-section/image013.jpg'
import img14 from '@/assets/card-section/image014.jpg'

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

export const cardsData: Card[] = [
	{
		id: 1,
		title: 'Планирование личных финансов с учетом реалий в РФ.',
		description: 'Жизнь',
		category: 'Жизнь',
		image: img1,
		hasImage: true,
	},
	{
		id: 2,
		title: 'Организация путешествия по России.',
		description: 'Жизнь',
		category: 'Жизнь',
		hasImage: false,
	},
	{
		id: 3,
		title: 'Помощь в выборе образовательного учреждения.',
		description: 'Жизнь',
		category: 'Жизнь',
		hasImage: false,
	},
	{
		id: 4,
		title: 'Создание плана ЗОЖ с учетом доступных в РФ ресурсов.',
		description: 'Жизнь',
		category: 'Жизнь',
		image: img2,
		hasImage: true,
	},
	{
		id: 5,
		title: 'Помощь в поиске и аренде жилья в крупном городе РФ.',
		description: 'Жизнь',
		category: 'Жизнь',
		hasImage: false,
	},

	{
		id: 6,
		title: 'Анализ рынка недвижимости в конкретном регионе РФ.',
		description: 'Исследование',
		category: 'Исследование',
		image: img3,
		hasImage: true,
	},
	{
		id: 7,
		title:
			'Исследование потребительских предпочтений в РФ для нового продукта.',
		description: 'Исследование',
		category: 'Исследование',
		hasImage: false,
	},
	{
		id: 8,
		title: 'Сбор и анализ данных о демографической ситуации в РФ.',
		description: 'Исследование',
		category: 'Исследование',
		hasImage: false,
	},
	{
		id: 9,
		title: 'Исследование истории и культуры определенного региона РФ.',
		description: 'Исследование',
		category: 'Исследование',
		image: img4,
		hasImage: true,
	},
	{
		id: 10,
		title: 'Анализ законодательства РФ по конкретному вопросу.',
		description: 'Исследование',
		category: 'Исследование',
		hasImage: false,
	},

	{
		id: 11,
		title: 'Разработка учебного плана для подготовки к ЕГЭ.',
		description: 'Образование',
		category: 'Образование',
		hasImage: false,
	},
	{
		id: 12,
		title: 'Создание интерактивного урока по истории России.',
		description: 'Образование',
		category: 'Образование',
		image: img5,
		hasImage: true,
	},
	{
		id: 13,
		title: 'Помощь в освоении Python с использованием РФ ресурсов.',
		description: 'Образование',
		category: 'Образование',
		hasImage: false,
	},
	{
		id: 14,
		title: 'Подготовка к олимпиаде по русскому языку.',
		description: 'Образование',
		category: 'Образование',
		hasImage: false,
	},
	{
		id: 15,
		title: 'Разработка курса по финансовой грамотности для школьников.',
		description: 'Образование',
		category: 'Образование',
		image: img6,
		hasImage: true,
	},

	{
		id: 16,
		title: 'Анализ данных о продажах в российской розничной сети.',
		description: 'Анализ данных',
		category: 'Анализ данных',
		image: img7,
		hasImage: true,
	},
	{
		id: 17,
		title: 'Прогнозирование курса рубля на основе исторических данных.',
		description: 'Анализ данных',
		category: 'Анализ данных',
		hasImage: false,
	},
	{
		id: 18,
		title: 'Анализ данных о трафике на российском новостном портале.',
		description: 'Анализ данных',
		category: 'Анализ данных',
		hasImage: false,
	},
	{
		id: 19,
		title: 'Кластеризация клиентов российского банка по их поведению.',
		description: 'Анализ данных',
		category: 'Анализ данных',
		image: img8,
		hasImage: true,
	},
	{
		id: 20,
		title: 'Анализ эффективности рекламной кампании в социальных сетях.',
		description: 'Анализ данных',
		category: 'Анализ данных',
		hasImage: false,
	},

	{
		id: 21,
		title: 'Оптимизация рабочего расписания для фрилансера.',
		description: 'Производительность',
		category: 'Производительность',
		hasImage: false,
	},
	{
		id: 22,
		title: 'Создание системы управления проектами для компании.',
		description: 'Производительность',
		category: 'Производительность',
		image: img9,
		hasImage: true,
	},
	{
		id: 23,
		title: 'Автоматизация рутинных задач с использованием онлайн-сервисов.',
		description: 'Производительность',
		category: 'Производительность',
		hasImage: false,
	},
	{
		id: 24,
		title: 'Разработка стратегии повышения личной эффективности для студента.',
		description: 'Производительность',
		category: 'Производительность',
		hasImage: false,
	},
	{
		id: 25,
		title: 'Создание шаблона для ведения бюджета семьи.',
		description: 'Производительность',
		category: 'Производительность',
		image: img10,
		hasImage: true,
	},

	{
		id: 26,
		title: 'Написание статьи для блога о путешествиях.',
		description: 'Контент',
		category: 'Контент',
		image: img11,
		hasImage: true,
	},
	{
		id: 27,
		title: 'Создание сценария для видеоролика о празднике.',
		description: 'Контент',
		category: 'Контент',
		hasImage: false,
	},
	{
		id: 28,
		title: 'Разработка контент-плана для аккаунта в социальной сети.',
		description: 'Контент',
		category: 'Контент',
		hasImage: false,
	},
	{
		id: 29,
		title: 'Написание продающего текста для интернет-магазина.',
		description: 'Контент',
		category: 'Контент',
		image: img12,
		hasImage: true,
	},
	{
		id: 30,
		title: 'Создание подкаста о российских стартапах.',
		description: 'Контент',
		category: 'Контент',
		hasImage: false,
	},

	{
		id: 31,
		title: 'Разработка ТЗ для мобильного приложения на РФ рынке.',
		description: 'IT и развитие',
		category: 'IT и развитие',
		hasImage: false,
	},
	{
		id: 32,
		title: 'Создание плана обучения для начинающего Python-разработчика.',
		description: 'IT и развитие',
		category: 'IT и развитие',
		image: img13,
		hasImage: true,
	},
	{
		id: 33,
		title: 'Анализ трендов в IT-индустрии РФ.',
		description: 'IT и развитие',
		category: 'IT и развитие',
		hasImage: false,
	},
	{
		id: 34,
		title: 'Разработка стратегии кибербезопасности для малого бизнеса в РФ.',
		description: 'IT и развитие',
		category: 'IT и развитие',
		hasImage: false,
	},
	{
		id: 35,
		title: 'Создание дорожной карты для внедрения ИИ-решений в компанию.',
		description: 'IT и развитие',
		category: 'IT и развитие',
		image: img14,
		hasImage: true,
	},
]
