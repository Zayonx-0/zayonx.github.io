import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Projet "NetTest"',
		color: '#5e95e3',
		description:
			'Projet réalisé en entreprise, consistant à la réalisation d\'un outil de test de débit internet. Conçut pour être utilisé par les techniciens de l\'entreprise. Réalisé avec Python ainsi que l\'outil de test "Iperf".',
		shortDescription:
			'Projet réalisé en entreprise, consistant à la réalisation d\'un outil de test de débit internet.',
		links: [{ to: 'https://github.com/Zayonx-0/zayonx-0.github.io', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Projet "NetTest"',
		period: {
			from: new Date(2023, 11, 1)
		},
		skills: getSkills('Python', 'Linux'),
		type: 'NetTest'
	},
	{
		slug: 'Projet Portfolio',
		color: '#ff3e00',
		description:
			'Portfolio réalisé avec SvelteKit et TailwindCSS.',
		shortDescription:
			'Portfolio WEB - réalisé avec SvelteKit et TailwindCSS. Projet de Culture et Communication (BUT 3 GEII)',
		links: [{ to: 'https://github.com/Zayonx-0/zayonx-0.github.io', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Projet Portfolio',
		period: {
			from: new Date(2024, 1, 19), to: new Date(2024, 2, 19)
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass', 'typescript'),
		type: 'Portfolio Web',
		screenshots: [
			{
				label: 'Exemple de screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: 'Exemple de screen 2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: 'Exemple de screen 3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: 'Exemple de screen 4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: 'Exemple de screen 5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: 'Exemple de screen 6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'Projet Decodage & Encodage Morse',
		color: '#ff3e00',
		description:
			'Projet Python d\'Encodage/Decodage de code morse (audio <-> texte)',
		shortDescription:
			'Projet Python consistant au décodage de code morse contenu dans un fichier audio / Encodage depuis un texte vers un fichier audio.',
		links: [{ to: 'https://github.com/Zayonx-0/Morse-Code', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Decodage & Encodage Morse',
		period: {
			from: new Date(2021, 3, 18),
			to: new Date(2021, 5, 20)
		},
		skills: getSkills('Python'),
		type: 'Projet Python',
		screenshots: [
			{
			label: 'screen 1',
			src:'https://i.pinimg.com/originals/0f/c3/94/0fc3944e3f94b65ef9f215c4c53fa3d3.jpg'
			}
		]

	},
	{
		slug: 'Projet "TradeBot"',
		color: '#ff3e00',
		description:
			'Projet de développement d\'un bot de trading d\'objets virtuels sur le jeu Team Fortress 2.',
		shortDescription:
			'Projet de développement d\'un bot de trading d\'objets virtuels sur le jeu Team Fortress 2.',
		links: [{ to: 'https://github.com/Zayonx-0/AUTOTRADE_TF2', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Projet "tf2-automatic"',
		period: {
			from: new Date(2017, 3, 18),
			to: new Date(2021, 5, 20)
		},
		skills: getSkills('NodeJS', 'JSON'),
		type: 'tf2-automatic',
		screenshots: [
			{
			label: 'Logs de Debug du programme en cours de fonctionnement',
			src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmIz-Xq-aFCktl4o-SzvaIjCHtffBeoNfUw&usqp=CAU'
			},
			{
			label: 'Logs de debug du programme en cours d\'actualisation des prix',
			src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmIz-Xq-aFCktl4o-SzvaIjCHtffBeoNfUw&usqp=CAU'
			},
			{
			label: 'Interface Discord corresondant au récapitulatif des statistiques du bot',
			src:'https://i.imgur.com/rEUsj8X.png'
			}
		]
	},
	{
		slug: 'Projet "SQL Base de données Vol"',
		color: '#ff3e00',
		description:
			'Projet base de données SQL concernant la gestion de vols aériens. (Recherche de vols, aéroports, compagnies aériennes, etc...) - Réalisé avec MampServer.',
		shortDescription:
			'Projet base de données SQL concernant la gestion de vols aériens.',
		links: [{ to: 'https://github.com/Zayonx-0/SQL_Projet_VOL', label: 'GitHub' }, { to: 'https://github.com/Zayonx-0/SQL_Projet_VOL/blob/main/R5.07%20Projet%20TP2%20Vols.pdf', label: 'Sujet' }],
		logo: Assets.sql,
		name: 'Projet "SQL Base de données Vol"',
		period: {
			from: new Date(2021, 3, 18),
			to: new Date(2021, 5, 20)
		},
		skills: getSkills('SQL'),
		type: 'Projet SQL',
		screenshots: [
			{
			label: 'Strucure de la base de données SQL',
			src:'https://i.imgur.com/SDVlxb5.png'
			},
			{
			label: 'Page RechercheAeroport',
			src:'https://i.imgur.com/bujUMv7.png'
			},
			{
			label: 'Page RechercheVols (exemple de recherche d\'un vol)',
			src:'https://i.imgur.com/gcyzoxZ.png'
			},
			{
			label: 'Page rechercheVols (Carte google Map avec les points GPS relevés tout le long du vol)',
			src:'https://i.imgur.com/APUil4B.png'
			}
		]
	},
	{
		slug: 'Projet Robot',
		color: '#ff3e00',
		description:
			'Projet consistant en la réalisation d\'un robot détecteur d\'obstacles. Réalisé avec Arduino. Le code compris sur la page Github a permis de finir 1er au concours robot réalisé en 2021',
		shortDescription:
			'Projet consistant en la réalisation d\'un robot détecteur d\'obstacles. Réalisé avec Arduino.',
		links: [{ to: 'https://github.com/Zayonx-0/Projet_Robot', label: 'GitHub' }],
		logo: Assets.Cpp,
		name: 'Projet Robot',
		period: {
			from: new Date(2021, 2, 18),
			to: new Date(2021, 6, 20)
		},
		skills: getSkills('C++', 'Arduino', 'Concevoir', 'Implanter'),
		type: 'Projet Robot',
		screenshots: [
			{
			label: 'Robot piloté par la carte Arduino',
			src:'https://i.imgur.com/VYp6VAc.jpeg'
			}
		]
	},
	{
		slug: 'Projet Carte "SmartLight"',
		color: '#ff3e00',
		description:
			'Projet de développement d\'un bot de trading d\'objets virtuels sur le jeu Team Fortress 2.',
		shortDescription:
			'Projet de développement d\'un bot de trading d\'objets virtuels sur le jeu Team Fortress 2.',
		links: [{ to: 'https://github.com/Zayonx-0/Projet_Robot', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Projet "tf2-automatic"',
		period: {
			from: new Date(2017, 3, 18),
			to: new Date(2021, 5, 20)
		},
		skills: getSkills('NodeJS', 'JSON'),
		type: 'tf2-automatic',
	},
	{
		slug: 'Projet "TradeBot"',
		color: '#ff3e00',
		description:
			'Projet de développement d\'un bot de trading d\'objets virtuels sur le jeu Team Fortress 2.',
		shortDescription:
			'Projet de développement d\'un bot de trading d\'objets virtuels sur le jeu Team Fortress 2.',
		links: [{ to: 'https://github.com/Zayonx-0/Projet_Robot', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Projet "tf2-automatic"',
		period: {
			from: new Date(2017, 3, 18),
			to: new Date(2021, 5, 20)
		},
		skills: getSkills('NodeJS', 'JSON'),
		type: 'tf2-automatic',
	}
];

export default MY_PROJECTS;