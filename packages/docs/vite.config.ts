import path from 'path'

// import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
import type { Alias } from 'vite'
import { projRoot } from './.vitepress/utils/paths'

const alias: Alias[] = []

// if (process.env.DOC_ENV !== 'production') {
//   alias.push(
//     {
//       find: /^element-plus(\/(es|lib))?$/,
//       replacement: path.resolve(projRoot, 'packages/element-plus/index.ts'),
//     },
//     {
//       find: /^element-plus\/(es|lib)\/(.*)$/,
//       replacement: `${path.resolve(projRoot, 'packages')}/$2`,
//     }
//   )
// }

export default defineConfig({
	server: {
		hmr: true,
		// host: true,
		host:'localhost',
		fs: {
			strict: true,
			allow: [projRoot]
		}
	},

	// resolve: {
	//   alias,
	// },
	// plugins: [Inspect()],
	optimizeDeps: {
		include: ['@vueuse/core']
	}
})
