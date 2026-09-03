// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://workflow-first.pages.dev',
	integrations: [
		starlight({
			title: 'Workflow-First AI Enablement',
			description: 'Think in workflow units, not chatbots.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/peakscapedigital/workflow-first' }],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				Pagination: './src/components/Pagination.astro',
			},
			sidebar: [
				{ label: 'Start here', slug: 'index' },
				{ label: 'Phase 1: Reframe', slug: 'phase-1-reframe' },
				{ label: 'Phase 2: Design', slug: 'phase-2-design' },
				{ label: 'Phase 3: Operate', slug: 'phase-3-operate' },
				{ label: 'Reference', collapsed: true, items: [{ autogenerate: { directory: 'concepts' } }] },
				{ label: 'Case study', slug: 'case-study/weekly-report' },
				{ label: 'Downloads', slug: 'downloads' },
				{ label: 'Facilitator note', slug: 'facilitator' },
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
