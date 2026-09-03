// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://workflow-first.pages.dev',
	integrations: [
		starlight({
			title: 'Workflow-First AI Enablement',
			description: 'Think in workflow units, not chatbots.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jasonleinart/workflow-first' }],
			sidebar: [
				{ label: 'Start here', slug: 'index' },
				{ label: 'Concepts', items: [{ autogenerate: { directory: 'concepts' } }] },
				{ label: 'Course', items: [{ autogenerate: { directory: 'course' } }] },
				{ label: 'Case study', slug: 'case-study/weekly-report' },
				{ label: 'Downloads', slug: 'downloads' },
				{ label: 'Facilitator note', slug: 'facilitator' },
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
