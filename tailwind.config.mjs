/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        'dm-sans': ['DM Sans']
      }
    },
	},
	plugins: [
    require('@tailwindcss/container-queries')
  ]
}
