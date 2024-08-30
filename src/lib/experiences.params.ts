import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Apprenti Technicien Réparation',
		company: 'Kontron Modual Computers',
		description: "Réparation de cartes électroniques et développement d'outils de test.",
		contract: ContractType.Apprenticeship,
		type: 'Technicien Réparation',
		location: 'La Garde, France',
		period: { from: new Date(2022, 9, 1), to: new Date()},
		skills: getSkills('Linux', 'js', 'html', 'css', 'Python', 'Concevoir', 'Maintenir', 'Verifier', 'Implanter'),
		name: 'Apprenti Technicien Réparation',
		color: 'red',
		links: [],
		logo: Assets.Kontron,
		shortDescription: "En tant qu'apprenti technicien en réparation chez Kontron Modular Computers, j'ai acquis une expérience précieuse dans la maintenance et la réparation de systèmes électroniques complexes. Mon rôle principal consistait à diagnostiquer, réparer et tester des équipements critiques, notamment des cartes VME et VPX, utilisées dans des applications industrielles et militaires. J'ai également participé à l'amélioration continue des processus de réparation en automatisant certaines tâches à l'aide de scripts Python, ce qui a permis de gagner en efficacité et de réduire les délais de traitement.\n\n\nAu-delà des aspects techniques, cette alternance m'a permis de développer des compétences transversales telles que la gestion du temps, la rigueur dans le respect des procédures, et la capacité à travailler sous pression dans un environnement exigeant. Cette expérience m'a non seulement permis de consolider mes connaissances théoriques, mais aussi de les appliquer dans des situations réelles, contribuant ainsi à la satisfaction des clients et au maintien de la qualité des produits de l'entreprise."
	},/*
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}*/
];

export default MY_EXPERIENCES;
