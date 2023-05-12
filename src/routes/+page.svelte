<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import { page } from '$app/stores';

	let company: string;
	let companyComponent: ComponentType;

	import HeaderBlock from '$lib/Components/Blocks/Header.svelte';
	import InformationBlock from '$lib/Components/Blocks/Information/Information.svelte';
	import SkillsBlock from '$lib/Components/Blocks/Skills.svelte';
	import AboutBlock from '$lib/Components/Blocks/About.svelte';
	import ExperienceBlock from '$lib/Components/Blocks/Experience/Experience.svelte';
	import AchievementsBlock from '$lib/Components/Blocks/Achievements.svelte';
	import ProjectsBlock from '$lib/Components/Blocks/Projects.svelte';
	import EducationBlock from '$lib/Components/Blocks/Education.svelte';
	import LookingForBlock from '$lib/Components/Blocks/LookingFor.svelte';

	import Wise from '$lib/Components/Blocks/Personalisation/Wise.svelte';
	import LHV from '$lib/Components/Blocks/Personalisation/LHV.svelte';
	import LinkedIn from '$lib/Components/Blocks/Personalisation/LinkedIn.svelte';

	onMount(async () => {
		company = $page.url.searchParams.get('company') || '';

		switch (company) {
			case 'Wise':
				companyComponent = Wise;
				break;

			case 'LHV':
				companyComponent = LHV;
				break;

			case 'LinkedIn':
				companyComponent = LinkedIn;
				break;
		}
	});

	let innerWidth: number;

	$: console.log(innerWidth);
</script>

<svelte:window bind:innerWidth />

<main
	class="m-2 max-w-screen-lg space-y-2 sm:m-6 sm:space-y-4 md:m-8 md:space-y-8 lg:mx-auto lg:mb-64 lg:mt-32 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0"
>
	<div class="flex flex-col gap-2 sm:gap-6 md:gap-8">
		<HeaderBlock class="lg:row-span-2" />

		{#if company && innerWidth <= 1024}
			<svelte:component this={companyComponent} class="lg:col-span-2 lg:col-start-2" />
		{/if}

		{#if innerWidth > 1024}
			<InformationBlock class="lg:col-start-1 lg:col-end-1 lg:row-start-3" />
		{/if}

		{#if !company && innerWidth > 1024}
			<LookingForBlock class="lg:col-start-1 lg:col-end-1" />
		{/if}
	</div>

	<div class="flex flex-col gap-2 sm:gap-6 md:gap-8 lg:col-span-2">
		{#if company && innerWidth > 1024}
			<svelte:component this={companyComponent} class="lg:col-span-2 lg:col-start-2" />
		{/if}

		<AboutBlock class="lg:col-span-2 lg:col-start-2 lg:row-span-2" />

		<ExperienceBlock class="lg:col-span-2 lg:col-start-2 lg:row-span-3" />

		{#if innerWidth <= 1024}
			<InformationBlock class="lg:col-start-1 lg:col-end-1 lg:row-start-3" />
		{/if}

		{#if !company && innerWidth <= 1024}
			<LookingForBlock class="lg:col-start-1 lg:col-end-1" />
		{/if}

		<AchievementsBlock class="lg:col-span-2 lg:col-start-2" />
		<ProjectsBlock class="lg:col-span-2 lg:col-start-2" />
		<EducationBlock class="lg:col-span-2 lg:col-start-2" />
	</div>
</main>
