import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Apprenti Technicien Réparation',
		company: 'Kontron Modual Computers',
		description: 'Maintenance et réparation de cartes électroniques. Développement de logiciels de tests.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 9, 1), to: new Date()},
		skills: getSkills('Linux', 'JavaScript', 'HTML', 'CSS', 'Python', 'Concevoir', 'Maintenir', 'Verifier', 'Implanter'),
		name: 'Apprenti Technicien Réparation',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
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
