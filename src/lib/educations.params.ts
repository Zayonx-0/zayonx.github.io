import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'BUT GEII',
		description: '',
		location: 'France',
		logo: Assets.Unknown,
		name: '',
		organization: 'IUT GEII Toulon',
		period: { from: new Date(2020, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'Baccalauréat options Maths, Numérique et Sciences Informatiques, Physique-Chimie',
		description: '',
		location: 'France',
		logo: Assets.Unknown,
		name: '',
		organization: 'Lycée du Coudon',
		period: { from: new Date(2018, 9, 1), to: new Date(2021, 8, 4)},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Python', 'English', 'Computer Architecture', 'Algorithms and Data structures', 'C', 'DataBase', 'Web Development']
	}
];
