import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',

	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(180deg, #e7f0ff 0%, #f8f3f5 100%)',
			},
			screens: {
				laptop: { max: '1440px' },
				laptopMd: { max: '1280px' },
				laptopSm: { max: '1095px' },
				tablet: { max: '1024px' },
				tabletMd: { max: '768px' },
				tabletSm: { max: '550px' },
				mobileXs: { max: '425px' },
				mobileLg: { max: '375px' },
			},
		},
	},
	plugins: [],
}
export default config
