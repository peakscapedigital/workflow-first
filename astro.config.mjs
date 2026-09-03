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
			components: { ThemeSelect: './src/components/ThemeSelect.astro' },
			sidebar: [
				{ label: 'Start here', slug: 'index' },
				{
					label: "Phase 1: Reframe",
					items: [
						{ label: 'Welcome', slug: 'phase-1/welcome' },
						{ label: 'The chatbot trap', slug: 'phase-1/chatbot-trap' },
						{ label: 'Three senses of agent', slug: 'phase-1/three-senses' },
						{ label: 'Workflow vs role', slug: 'phase-1/workflow-vs-role' },
						{ label: 'Gate 0 preview', slug: 'phase-1/gate-zero-preview' },
						{ label: 'Activity — classify one idea', slug: 'phase-1/activity-classify' },
					],
				},
				{
					label: 'Phase 2: Design',
					items: [
						{ label: 'What is the Design phase?', slug: 'phase-2/what-is-design' },
						{ label: 'The shape test', slug: 'phase-2/shape-test' },
						{ label: 'Seat contract', slug: 'phase-2/seat-contract' },
						{ label: 'Deterministic + generative', slug: 'phase-2/deterministic-generative' },
						{ label: 'Bottom-up vs top-down', slug: 'phase-2/bottom-up' },
						{ label: 'Activity — draft a contract', slug: 'phase-2/activity-contract' },
					],
				},
				{
					label: 'Phase 3: Operate',
					items: [
						{ label: 'What is the Operate phase?', slug: 'phase-3/what-is-operate' },
						{ label: 'Evidence not trust', slug: 'phase-3/evidence-not-trust' },
						{ label: 'Costing boundary', slug: 'phase-3/costing-boundary' },
						{ label: 'The productivity J-curve', slug: 'phase-3/productivity-j-curve' },
						{ label: 'Override rate as health', slug: 'phase-3/override-rate' },
						{ label: 'Defer the conductor', slug: 'phase-3/defer-conductor' },
						{ label: 'Activity — one-quarter commit', slug: 'phase-3/activity-commitment' },
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
