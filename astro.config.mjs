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
				{
					label: 'Phase 1: Reframe',
					items: [
						{ label: 'Overview', link: '/phase-1-reframe/' },
						{ label: 'Welcome', link: '/phase-1-reframe/#welcome-workflow-first-thinking' },
						{ label: 'The chatbot trap', link: '/phase-1-reframe/#the-chatbot-trap' },
						{ label: 'Three senses of agent', link: '/phase-1-reframe/#three-senses-of-agent' },
						{ label: 'Workflow vs role', link: '/phase-1-reframe/#workflow-vs-role' },
						{ label: 'Gate 0 preview', link: '/phase-1-reframe/#gate-0-preview' },
						{ label: 'Activity: classify one idea', link: '/phase-1-reframe/activity-classify/' },
					],
				},
				{
					label: 'Phase 2: Design',
					items: [
						{ label: 'Overview', link: '/phase-2-design/' },
						{ label: 'What is the Design phase?', link: '/phase-2-design/#what-is-the-design-phase' },
						{ label: 'The shape test', link: '/phase-2-design/#the-shape-test' },
						{ label: 'Seat contract', link: '/phase-2-design/#seat-contract' },
						{ label: 'Deterministic + generative', link: '/phase-2-design/#deterministic-core-and-generative-judgment' },
						{ label: 'Bottom-up vs top-down', link: '/phase-2-design/#bottom-up-vs-top-down' },
						{ label: 'Activity: draft a contract', link: '/phase-2-design/activity-contract/' },
					],
				},
				{
					label: 'Phase 3: Operate',
					items: [
						{ label: 'Overview', link: '/phase-3-operate/' },
						{ label: 'What is the Operate phase?', link: '/phase-3-operate/#what-is-the-operate-phase' },
						{ label: 'Evidence not trust', link: '/phase-3-operate/#evidence-not-trust' },
						{ label: 'Costing boundary', link: '/phase-3-operate/#costing-boundary' },
						{ label: 'The productivity J-curve', link: '/phase-3-operate/#the-productivity-j-curve' },
						{ label: 'Override rate as health', link: '/phase-3-operate/#override-rate-as-health' },
						{ label: 'Defer the conductor', link: '/phase-3-operate/#defer-the-conductor' },
						{ label: 'Activity: one-quarter commit', link: '/phase-3-operate/activity-commitment/' },
					],
				},
				{ label: 'Reference', collapsed: true, items: [{ autogenerate: { directory: 'concepts' } }] },
				{ label: 'Case study', slug: 'case-study/weekly-report' },
				{ label: 'Downloads', slug: 'downloads' },
				{ label: 'Facilitator note', slug: 'facilitator' },
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
