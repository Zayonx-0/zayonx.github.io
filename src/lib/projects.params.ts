import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Projet1',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/Zayonx-0/zayonx-0.github.io', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Slick Portfolio',
		period: {
			from: new Date(2023, 11, 1)
		},
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Website Template'
	},
	{
		slug: 'Projet Portfolio',
		color: '#ff3e00',
		description:
			'Portfolio réalisé avec SvelteKit et TailwindCSS.',
		shortDescription:
			'Portfolio réalisé avec SvelteKit et TailwindCSS. Projet de Culture et Communication (BUT 3 GEII)',
		links: [{ to: 'https://github.com/Zayonx-0/zayonx-0.github.io', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Projet Portfolio',
		period: {
			from: new Date(2023, 1, 19), to: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}/*,
	{
		slug: 'Projet Decodage / Encodage Morse',
		color: '#ff3e00',
		description:
			'Projet Python d\'Encodage/Decodage de code morse (audio <-> texte)',
		shortDescription:
			'Projet Python consistant au décodage de code morse contenu dans un fichier audio / Encodage depuis un texte vers un fichier audio.',
		links: [{ to: 'https://github.com/Zayonx-0/Morse-Code', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date(),
			to: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
			label: 'screen 1',
			src:'https://i.pinimg.com/originals/0f/c3/94/0fc3944e3f94b65ef9f215c4c53fa3d3.jpg'
			}
		]

	}*/
];

export default MY_PROJECTS;
