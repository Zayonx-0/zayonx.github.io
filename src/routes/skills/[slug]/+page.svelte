<script lang="ts">
	import { onMount } from 'svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import MY_EXPERIENCES from '$lib/experiences.params';
	import MY_PROJECTS from '$lib/projects.params';

	import { base } from '$app/paths';
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { SKILLS } from '$lib/params';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import Circularbar from '$lib/components/circularbar/src/circularbar.svelte';

	type Related = {
		display: string;
		name: string;
		img: string;
		type: 'projects' | 'experience';
		url: string;
	};
	let value = 30;
	let info = '30%';
	let color = ""
	let sectionElement;


	export let data: { skill?: Skill };

	const { title } = SKILLS;

	const getRelatedProjects = (): Array<Related> => {
		const out: Array<Related> = [];

		const skill = data.skill;

		if (!skill) {
			return [];
		}

		MY_PROJECTS.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skill.slug)) {
				out.push({
					img: getAssetURL(item.logo),
					display: `${item.name} (${item.type})`,
					name: item.name,
					type: 'projects',
					url: `/projects/${item.slug}`
				});
			}
		});
		MY_EXPERIENCES.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skill.slug)) {
				out.push({
					img: getAssetURL(item.logo),
					display: `${item.name} @ ${item.company}`,
					name: item.name,
					type: 'experience',
					url: `/experience/${item.slug}`
				});
			}
		});

		return out;
	};

	if (data.skill.name == "Maintenir") {
		value = 30;
		info = 'de la compétence acquise';
	} else if (data.skill.name == "Concevoir") {
		value = 50;
		info = 'de la compétence acquise';
	} else if (data.skill.name == "Vérifier") {
		value = 70;
		info = 'de la compétence acquise';
		color = "#ED8C51"
	} else if (data.skill.name == "Implanter") {
		value = 90;
		info = 'de la compétence acquise';
	}

	$: computedTitle = data.skill ? `${data.skill.name} - ${title}` : title;

	$: related = data.skill ? getRelatedProjects() : [];

	if (data.skill.name == "Maintenir" || data.skill.name == "Concevoir" || data.skill.name == "Vérifier" || data.skill.name == "Implanter") {

	onMount(() => {
		setTimeout(() => {
			if (sectionElement) {
				let memory = sectionElement.style.width
				sectionElement.style.width = "151px";
				setTimeout(() => {
					sectionElement.style.width = memory;
				}, 100);
			}
		}, 100);
	});
	}
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.skill === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-software-resource-cluster" classes="text-3.5em" />
			<p class="font-300">Could not load skill data.</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.skill.logo)}>
				<MainTitle>{data.skill.name}</MainTitle>
				{#if data.skill.name == "Maintenir" || data.skill.name == "Concevoir" || data.skill.name == "Vérifier" || data.skill.name == "Implanter"}
				<section bind:this={sectionElement}>
					<Circularbar bind:value bind:info bind:color></Circularbar>             
				</section>
				{/if}
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.skill.description}
						<Markdown content={data.skill.description ?? 'This place is yet to be filled...'} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
					{/if}
				</div>
			</div>
			<div class="self-stretch mb-2">
				<CardDivider />
			</div>
			<div class="flex flex-row gap-1 self-stretch flex-wrap ">
				<div class="px-10px">
					{#each related as item}
						<Chip
							classes="inline-flex flex-row items-center justify-center"
							href={`${base}${item.url}`}
						>
							<CardLogo src={item.img} alt={item.name} radius={'0px'} size={15} classes="mr-2" />
							<span class="text-[0.9em]">{item.display}</span>
						</Chip>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
		text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }
</style>
