import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;


// TODO : Ajouter des commpétences GEII dans cette catégorie
// TODO : Ajouter des compétences en Electronique et Electrotechnique
// Prendre depuis le programme de formation du BUT GEII
// Lier les compétences aux projets associés

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript est un langage de programmation utilisé pour développer des applications web interactives. Il permet d\'ajouter des fonctionnalités dynamiques aux pages web en manipulant le contenu, en interagissant avec l\'utilisateur et en effectuant des requêtes vers des serveurs.',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript est un langage de programmation open-source développé par Microsoft. Il s\'agit d\'un sur-ensemble de JavaScript qui ajoute des fonctionnalités de typage statique optionnel, ce qui permet de détecter et de prévenir les erreurs de type avant l\'exécution du code. TypeScript est largement utilisé pour le développement d\'applications web et d\'applications côté serveur, ainsi que pour la création de bibliothèques et de frameworks JavaScript. Il offre une meilleure maintenabilité, une meilleure évolutivité et une meilleure productivité grâce à ses fonctionnalités avancées telles que les interfaces, les classes, les modules et les types génériques.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'CSS est un langage de style utilisé pour décrire la présentation d\'un document HTML. Il permet de contrôler l\'apparence des éléments d\'une page web, tels que la couleur, la taille, la police, la disposition et les effets visuels. CSS offre une grande flexibilité et permet de créer des designs attrayants et responsives. Il est largement utilisé dans le développement web pour améliorer l\'expérience utilisateur et rendre les sites web plus esthétiques et professionnels.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'HTML (HyperText Markup Language) est un langage de balisage utilisé pour structurer et présenter le contenu d\'une page web. Il permet de définir la structure logique d\'une page en utilisant des balises pour marquer différents éléments tels que les titres, les paragraphes, les images, les liens, les tableaux, etc. HTML est la base de la création de sites web et est utilisé en conjonction avec d\'autres technologies telles que CSS (Cascading Style Sheets) et JavaScript pour créer des pages web interactives et esthétiquement attrayantes.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'nodejs',
		color: 'cyan',
		description:
			`Développeur NodeJS autodicate - Développement de bots Discord, de sites web et d'un bot de Trading d'objets virtuels sur le jeu Team Fortress 2.`,
		logo: Assets.NodeJs,
		name: 'NodeJs'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'Python',
		color: 'Yellow',
		description:
			`Développeur python autodidacte - Développement de projets personnels et scolaires.`,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'C',
		color: 'blue',
		description:
			`Développeur C autodidacte - Développement de projets personnels et scolaires.`,
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'C++',
		color: 'blue',
		description:
			`Développeur C++ autodidacte - Développement de projets personnels et scolaires.`,
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'Java',
		color: 'red',
		description:
			`Développeur Java autodidacte - Développement de projets personnels et scolaires.`,
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'Linux',
		color: 'green',
		description:
			`Familier avec les systèmes Linux - Utilisation de distributions Linux pour le développement.`,
		logo: Assets.Linux,
		name: 'Linux'
	}),
	s({
		slug: 'Concevoir',
		color: 'red',
		description:
			`Concevoir un système en adoptant une approche sélective dans ses choix technologiques`,
		logo: Assets.Concevoir,
		name: 'Concevoir'
	}),
	s({
		slug: 'Verifier',
		color: 'orange',
		description:
			`Vérifier la conformité d'un système par rapport à un cahier des charges. Élaborer une procédure intégrant une démarche qualité pour valider le fonctionnement d’un système`,
		logo: Assets.Verifier,
		name: 'Verifier'
	}),
	s({
		slug: 'Maintenir',
		color: 'yellow',
		description:
			`Mettre en place une stratégie de maintenance pour garantir un fonctionnement optimal`,
		logo: Assets.Maintenir,
		name: 'Maintenir'
	}),
	s({
		slug: 'Implanter',
		color: 'green',
		description:
			`Interagir avec les différents acteurs, lors de l’installation et de la mise en service d’un système, dans une démarche qualité`,
		logo: Assets.Implanter,
		name: 'Implanter'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
