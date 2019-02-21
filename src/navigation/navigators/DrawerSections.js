import { t } from '@/lang'

const sections = [
	{
		key: 'MyCards',
		route: 'MyCards',
		name: t(`drawer.sections.MyCards`),
		icon: 'my-cards',
	},
]

let sectionsForDev = []
if (__DEV__) {
	sectionsForDev = [
		{
			key: 'StorybookUI',
			route: 'StorybookUI',
			name: t(`drawer.sections.StorybookUI`),
			icon: 'my-cards',
		},
	]
}

const allSections = [...sections, ...sectionsForDev]

export default allSections
