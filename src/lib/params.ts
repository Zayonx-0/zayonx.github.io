import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Matyas Ricci - Technicien & Développeur';

export const NavBar = {
	home: 'Home',
	personal: 'Projets',
	career: 'Expériences',
	resume: 'CV',
	skills: 'Skills',
	Education: 'Études'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Matyas',
	lastName: 'Ricci',
	description:
		'Apprenti Technicien Réparation - Développeur Auto-Didacte - Étudiant en Génie Électrique et Informatique Industrielle',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/Zayonx-0' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/matyas-ricci/'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/users/9875460/zayonx'
		},
		{
			platform: Platform.Email,
			link: 'matyas.ricci.pro@gmail.com'
		},
		{
			platform: Platform.Youtube,
			link: 'https://www.youtube.com'
		},
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projets',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Expériences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'CV',
	item: '../../static/cv.pdf'
};

export const SEARCH: SearchPageParams = {
	title: 'Rechercher'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Études'
};
