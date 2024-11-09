/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				tile: 'var(--tile-size)',
				half: 'calc(var(--tile-size) / 2)',
				third: 'calc(var(--tile-size) / 3)',
				quarter: 'calc(var(--tile-size) / 4)',
				double: 'calc(var(--tile-size) * 2)',
				triple: 'calc(var(--tile-size) * 3)',
				quad: 'calc(var(--tile-size) * 4)',
				quint: 'calc(var(--tile-size) * 5)',
				sextuple: 'calc(var(--tile-size) * 6)',
			},
			colors: {
				backgroundDark: '#111',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				backgroundSecondary: 'var(--background-secondary)',
				brand: 'var(--brand)',
			},
			fontSize: {
				tile: 'var(--tile-size)',
				oneAndHalf: 'calc(var(--tile-size) / 1.5)',
				half: 'calc(var(--tile-size) / 2)',
				third: 'calc(var(--tile-size) / 3)',
				quarter: 'calc(var(--tile-size) / 4)',
				double: 'calc(var(--tile-size) * 2)',
			},
			keyframes: {
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				'move-out': {
					from: { transform: 'translateY(0%)' },
					to: { transform: 'translateY(-100%)' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(-20%)' },
					'100%': { opacity: '1', transform: 'translateY(0%)' },
				},
			},
			animation: {
				'fade-out': 'fade-out 1s ease-in-out',
				'move-out': 'move-out 0.3s ease-in-out forwards',
				'fade-in': 'fade-in 0.7s ease-in-out forwards',
			},
		},
	},
	plugins: [],
}
