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
</script>

<main
	class="m-4 flex max-w-screen-lg flex-col gap-4 lg:mx-auto lg:mb-64 lg:mt-32 lg:grid lg:grid-cols-3 lg:gap-8"
>
	<HeaderBlock class="order-1 lg:self-start" />
	<InformationBlock class="order-4 lg:col-start-1 lg:col-end-1 lg:self-start" />

	{#if !company}
		<LookingForBlock class="order-5 lg:col-start-1 lg:col-end-1 lg:self-start" />
	{/if}

	{#if company}
		<svelte:component
			this={companyComponent}
			class="order-2 lg:col-span-2 lg:col-start-2 lg:self-start"
		/>
	{/if}

	<AboutBlock class="order-3 lg:col-span-2 lg:self-start" />
	<ExperienceBlock
		class="order-6 lg:order-4 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:self-start"
	/>
	<AchievementsBlock class="order-7 lg:col-span-2 lg:col-start-2 lg:self-start" />
	<ProjectsBlock class="order-8 lg:col-span-2 lg:col-start-2 lg:self-start" />
	<EducationBlock class="order-9 lg:col-span-2 lg:col-start-2 lg:self-start" />
</main>
