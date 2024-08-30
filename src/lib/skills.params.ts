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
		slug: 'rust',
		color: 'orange',
		description:
			`Rust est un langage de programmation moderne qui se distingue par sa performance, sa sécurité et son souci de la concurrence\n Conçu initialement par Mozilla et maintenant maintenu par la communauté open-source, Rust a rapidement gagné en popularité pour sa capacité à combiner les performances des langages bas-niveau comme C et C++ avec des garanties de sécurité mémoire robustes.`,
		logo: Assets.Rust,
		name: 'Rust'
	}),
	s({
		slug: 'arduino',
		color: 'green',
		description:
				'Arduino est une plateforme électronique open-source basée sur du matériel et des logiciels faciles à utiliser. Elle est largement utilisée pour créer des projets interactifs et des prototypes, ainsi que pour contrôler divers appareils électroniques. Arduino offre une manière simple et flexible de programmer des microcontrôleurs, ce qui la rend accessible aux débutants et aux développeurs expérimentés.',
			logo: Assets.Arduino,
		name: 'Arduino'
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
			'Sass est un langage de feuilles de style en cascade (CSS) avec des fonctionnalités étendues. Il permet d\'ajouter des fonctionnalités avancées à CSS telles que les variables, les mixins, les fonctions et les imports. Sass facilite la création et la gestion de styles réutilisables, ce qui améliore la maintenabilité et la productivité du développement web. Il offre également des fonctionnalités de programmation, ce qui permet de générer dynamiquement des styles en fonction de certaines conditions. Sass est largement utilisé dans l\'industrie du développement web pour créer des feuilles de style CSS plus puissantes et plus efficaces.',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'nodejs',
		color: 'cyan',
		description:
			`Développeur NodeJS autodicate - Node (ou plus formellement Node. js) est un environnement d'exécution open-source, multi-plateforme, qui permet aux développeurs de créer toutes sortes d'applications et d'outils côté serveur en JavaScript.`,
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
			`Python est un langage de programmation polyvalent et puissant. Il est largement utilisé dans le développement web, l'analyse de données, l'intelligence artificielle et bien d'autres domaines. Python se distingue par sa syntaxe claire et concise, ce qui en fait un langage facile à apprendre et à lire. Il offre de nombreuses bibliothèques et frameworks qui facilitent le développement rapide d'applications. Que ce soit pour des projets personnels ou scolaires, Python est un excellent choix pour concrétiser vos idées.`,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'C',
		color: 'blue',
		description:
			`Le langage C est un langage de programmation impératif et procédural. Il est largement utilisé pour le développement de systèmes d'exploitation, de logiciels embarqués et d'applications à haute performance. Le C offre un contrôle précis sur la mémoire et les ressources du système, ce qui en fait un choix privilégié pour les développeurs qui recherchent une performance optimale. Il est également utilisé pour enseigner les concepts fondamentaux de la programmation.`,
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'C++',
		color: 'blue',
		description:
			`C++ est un langage de programmation polyvalent et puissant. Il est largement utilisé dans le développement de logiciels, les jeux vidéo, les systèmes embarqués et d'autres domaines. C++ est une extension du langage C avec des fonctionnalités supplémentaires telles que les classes, l'héritage, les templates et les exceptions. Il offre un contrôle précis sur la mémoire et les ressources du système, ce qui en fait un choix privilégié pour les développeurs qui recherchent une performance optimale. C++ est également utilisé pour enseigner les concepts avancés de la programmation et est pris en charge par de nombreuses bibliothèques et frameworks.`,
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
	slug: 'SQL',
	color: 'purple',
	description:
		"SQL (Structured Query Language) est un langage de programmation utilisé pour gérer et manipuler des bases de données relationnelles. Il vous permet de créer, modifier et interroger des bases de données pour récupérer et manipuler des données. SQL est largement utilisé dans le développement web, l'analyse de données et d'autres applications qui impliquent de travailler avec des bases de données.",
	logo: Assets.sql,
	name: 'SQL'
	}),
	s({
		slug: 'Git',
		color: 'red',
		description:
			`Familier avec Git - Utilisation de Git pour la gestion de versions et le contrôle de code source. Git est un système de contrôle de version distribué largement utilisé dans le développement de logiciels. Il permet de suivre les modifications apportées aux fichiers et aux codes sources d'un projet, de gérer les différentes versions et de collaborer efficacement avec d'autres développeurs. Git offre des fonctionnalités telles que la création de branches pour travailler sur des fonctionnalités ou des correctifs de bugs séparément, la fusion des modifications de différentes branches, la gestion des conflits de fusion et la possibilité de revenir à des versions antérieures du code. Il facilite également le partage du code entre les membres de l'équipe et la contribution à des projets open source. En utilisant Git, les développeurs peuvent garder une trace de l'historique des modifications, travailler de manière collaborative et assurer la stabilité et la qualité du code.`,
		logo: Assets.Git,
		name: 'Git'
	}),
	s({
		slug: 'Docker',
		color: 'blue',
		description:
			`Docker est une plateforme open-source qui permet de créer, déployer et gérer des conteneurs. Les conteneurs sont des environnements isolés et légers qui encapsulent une application et toutes ses dépendances. Grâce à Docker, vous pouvez packager votre application avec toutes ses dépendances dans un conteneur, ce qui garantit une portabilité et une reproductibilité maximales. Les conteneurs Docker sont faciles à partager, à déployer et à mettre à l'échelle, ce qui en fait un outil populaire pour le développement et le déploiement d'applications. - Utilisation de Docker pour la création, le déploiement et la gestion de conteneurs.`,
		logo: Assets.Docker,
		name: 'Docker'
	}),
s({
	slug: 'PHP',
	color: 'purple',
	description:
		`Développeur PHP autodidacte - Développement de sites web dynamiques et d'applications web. PHP est un langage de programmation côté serveur largement utilisé pour le développement web. Il est principalement utilisé pour créer des pages web dynamiques et des applications web, et est intégré dans le code HTML. PHP est un langage de script côté serveur qui peut générer du contenu dynamique sur les pages web, se connecter à des bases de données, gérer les sessions utilisateur, envoyer des e-mails, etc. Il est souvent utilisé en conjonction avec des bases de données MySQL pour créer des applications web interactives et des sites web dynamiques. PHP est un langage de programmation polyvalent qui offre une grande flexibilité et une grande facilité d'utilisation pour le développement web. - Utilisation de PHP pour le développement de sites web dynamiques et d'applications web.`,
	logo: Assets.PHP,
	name: 'PHP'
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
		slug: 'JSON',
		color: 'orange',
		description:
			`JSON (JavaScript Object Notation) est un format de données léger et facile à lire utilisé pour échanger des données entre un serveur et un client. Il est basé sur JavaScript et est largement utilisé dans les applications web pour stocker et transférer des données structurées.`,
		logo: Assets.JSON,
		name: 'JSON'
	}),
	s({
		slug: 'opencl',
		color: 'purple',
		description:
			`OpenCL (Open Computing Language) est un framework open-source pour la programmation parallèle sur des architectures hétérogènes. Il permet d'utiliser efficacement les ressources de calcul des processeurs multi-cœurs, des GPU et d'autres accélérateurs matériels. OpenCL offre une interface de programmation portable et flexible, ce qui permet aux développeurs d'écrire du code une fois et de l'exécuter sur différents types de périphériques. Il est largement utilisé dans les domaines tels que la vision par ordinateur, la simulation physique, l'apprentissage automatique et d'autres applications nécessitant des calculs intensifs.`,
		logo: Assets.opencl,
		name: 'OpenCL'
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
		name: 'Vérifier'
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
