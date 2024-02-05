import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'BUT GEII',
		description: '',
		location: 'La Garde, France',
		logo: Assets.geii,
		name: '',
		organization: 'IUT GEII Toulon',
		period: { from: new Date(2021, 9, 1), to: new Date(2024, 8, 30)},
		shortDescription: 'Université de Toulon, Département Génie Électrique et Informatique Industrielle',
		slug: 'dummy-education-item',
		subjects: ['Anglais', 'Electronique', 'Electrotechnique', 'Maths', 'Physique-Appliquée', 'Informatique Industrielle', 'Automatique', 'Réseaux', 'Systèmes Embarqués', 'Culture Générale', 'Communication', 'Projets', 'Base de données', 'Programmation']
	},
	{
		degree: 'Baccalauréat options Maths, Numérique et Sciences Informatiques, Physique-Chimie',
		description: 'Lycée Général et Technologique du Coudon',
		location: 'La Garde, France',
		logo: Assets.coudon,
		name: '',
		organization: 'Lycée du Coudon',
		period: { from: new Date(2018, 9, 1), to: new Date(2021, 7, 4)},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Python', 'Architecture des Ordinateurs', 'Algorithmes et Structures des Données', 'C', 'Base de Données', 'Développement Web', 'Anglais']
	}
];
