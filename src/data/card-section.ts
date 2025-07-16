import img016 from '@/assets/card-section/image016.jpg'
import img017 from '@/assets/card-section/image017.jpg'
import img1 from '@/assets/card-section/img-1.jpg'
import img2 from '@/assets/card-section/img-2.jpg'
import img3 from '@/assets/card-section/img-3.jpg'
import img4 from '@/assets/card-section/img-4.jpg'
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
	// Qo‘shilganlar quyida:
	{
		id: 7,
		title: 'Анализ рынка недвижимости в конкретном регионе РФ',
		description: 'Избранное',
		category: 'Исследование',
		hasImage: false,
	},
	{
		id: 8,
		title: 'Исследование потребительских предпочтений в РФ для нового продукта',
		description: 'Избранное',
		category: 'Исследование',
		hasImage: false,
	},
	{
		id: 9,
		title: 'Сбор и анализ данных о демографической ситуации в РФ',
		description: 'Избранное',
		category: 'Исследование',
		hasImage: false,
	},
	{
		id: 10,
		title: 'Исследование истории и культуры определенного региона РФ',
		description: 'Избранное',
		category: 'Исследование',
		hasImage: false,
	},
	{
		id: 11,
		title: 'Анализ законодательства РФ по конкретному вопросу',
		description: 'Избранное',
		category: 'Исследование',
		hasImage: false,
	},
	{
		id: 12,
		title: 'Разработка учебного плана для подготовки к ЕГЭ',
		description: 'Избранное',
		category: 'Образование',
		hasImage: false,
	},
	{
		id: 13,
		title: 'Создание интерактивного урока по истории России',
		description: 'Избранное',
		category: 'Образование',
		hasImage: false,
	},
	{
		id: 14,
		title: 'Помощь в освоении Python с использованием РФ ресурсов',
		description: 'Избранное',
		category: 'Образование',
		hasImage: false,
	},
	{
		id: 15,
		title: 'Подготовка к олимпиаде по русскому языку',
		description: 'Избранное',
		category: 'Образование',
		hasImage: false,
	},
	{
		id: 16,
		title: 'Разработка курса по финансовой грамотности для школьников',
		description: 'Избранное',
		category: 'Образование',
		hasImage: false,
	},
	{
		id: 17,
		title: 'Анализ данных о продажах в российской розничной сети',
		description: 'Избранное',
		category: 'Анализ данных',
		hasImage: false,
	},
	{
		id: 18,
		title: 'Прогнозирование курса рубля на основе исторических данных',
		description: 'Избранное',
		category: 'Анализ данных',
		hasImage: false,
	},
	{
		id: 19,
		title: 'Анализ данных о трафике на российском новостном портале',
		description: 'Избранное',
		category: 'Анализ данных',
		hasImage: false,
	},
	{
		id: 20,
		title: 'Кластеризация клиентов российского банка по их поведению',
		description: 'Избранное',
		category: 'Анализ данных',
		hasImage: false,
	},
	{
		id: 21,
		title: 'Анализ эффективности рекламной кампании в социальных сетях',
		description: 'Избранное',
		category: 'Анализ данных',
		hasImage: false,
	},
	{
		id: 22,
		title: 'Оптимизация рабочего расписания для фрилансера',
		description: 'Избранное',
		category: 'Производительность',
		hasImage: false,
	},
	{
		id: 23,
		title: 'Создание системы управления проектами для компании',
		description: 'Избранное',
		category: 'Производительность',
		hasImage: false,
	},
	{
		id: 24,
		title: 'Автоматизация рутинных задач с использованием онлайн-сервисов',
		description: 'Избранное',
		category: 'Производительность',
		hasImage: false,
	},
	{
		id: 25,
		title: 'Разработка стратегии повышения личной эффективности для студента',
		description: 'Избранное',
		category: 'Производительность',
		hasImage: false,
	},
	{
		id: 26,
		title: 'Создание шаблона для ведения бюджета семьи',
		description: 'Избранное',
		category: 'Производительность',
		hasImage: false,
	},
	{
		id: 27,
		title: 'Написание статьи для блога о путешествиях',
		description: 'Избранное',
		category: 'Контент',
		hasImage: false,
	},
	{
		id: 28,
		title: 'Создание сценария для видеоролика о празднике',
		description: 'Избранное',
		category: 'Контент',
		hasImage: false,
	},
	{
		id: 29,
		title: 'Разработка контент-плана для аккаунта в социальной сети',
		description: 'Избранное',
		category: 'Контент',
		hasImage: false,
	},
	{
		id: 30,
		title: 'Написание продающего текста для интернет-магазина',
		description: 'Избранное',
		category: 'Контент',
		hasImage: false,
	},
	{
		id: 31,
		title: 'Создание подкаста о российских стартапах',
		description: 'Избранное',
		category: 'Контент',
		hasImage: false,
	},
	{
		id: 32,
		title: 'Разработка ТЗ для мобильного приложения на РФ рынке',
		description: 'Избранное',
		category: 'ИТ-развитие',
		image: img016,
		hasImage: true,
	},
	{
		id: 33,
		title: 'Создание плана обучения для начинающего Python-разработчика',
		description: 'Избранное',
		category: 'ИТ-развитие',
		hasImage: false,
	},
	{
		id: 34,
		title: 'Анализ трендов в IT-индустрии РФ',
		description: 'Избранное',
		category: 'ИТ-развитие',
		hasImage: false,
	},
	{
		id: 35,
		title: 'Разработка стратегии кибербезопасности для малого бизнеса в РФ',
		description: 'Избранное',
		category: 'ИТ-развитие',
		image: img017,
		hasImage: true,
	},
	{
		id: 36,
		title: 'Создание дорожной карты для внедрения ИИ-решений в компанию',
		description: 'Избранное',
		category: 'ИТ-развитие',
		hasImage: false,
	},
]
