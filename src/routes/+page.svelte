<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import { page } from '$app/stores';

	import HeaderBlock from '$lib/Components/Blocks/Header.svelte';
	import InformationBlock from '$lib/Components/Blocks/Information/Information.svelte';
	import SkillsBlock from '$lib/Components/Blocks/Skills.svelte';
	import AboutBlock from '$lib/Components/Blocks/About.svelte';
	import ExperienceBlock from '$lib/Components/Blocks/Experience/Experience.svelte';
	import AchievementsBlock from '$lib/Components/Blocks/Achievements.svelte';
	import ProjectsBlock from '$lib/Components/Blocks/Projects.svelte';
	import EducationBlock from '$lib/Components/Blocks/Education.svelte';
	import LookingForBlock from '$lib/Components/Blocks/LookingFor.svelte';
	import ContactsBlock from '$lib/Components/Blocks/Contacts.svelte';

	import Wise from '$lib/Components/Blocks/Personalisation/Wise.svelte';
	import LHV from '$lib/Components/Blocks/Personalisation/LHV.svelte';
	import LinkedIn from '$lib/Components/Blocks/Personalisation/LinkedIn.svelte';
	import DigitalRealty from '$lib/Components/Blocks/Personalisation/DigitalRealty.svelte';
	import Revolut from '$lib/Components/Blocks/Personalisation/Revolut.svelte';
	import Lightyear from '$lib/Components/Blocks/Personalisation/Lightyear.svelte';
	import RobertHalf from '$lib/Components/Blocks/Personalisation/RobertHalf.svelte';
	import KingsCollege from '$lib/Components/Blocks/Personalisation/KingsCollege.svelte';
	import Delfi from '$lib/Components/Blocks/Personalisation/Delfi.svelte';

	let company: string;
	let companyComponent: ComponentType;
	let title: string = 'Andry Pedak — Technical Lead';
	let innerWidth: number;

	onMount(async () => {
		company = ($page.url.searchParams.get('company') || '').toLowerCase();

		switch (company) {
			case 'wise':
				title = 'Andry Pedak & Wise — Engineering Lead';
				companyComponent = Wise;
				break;

			case 'revolut':
				companyComponent = Revolut;
				break;

			case 'lightyear':
				companyComponent = Lightyear;
				title = 'Andry Pedak & Lightyear — Backend Software Engineer';
				break;

			case 'kcl':
				companyComponent = KingsCollege;
				title = 'Andry Pedak & King’s College London — Web Developer';
				break;

			case 'roberthalf':
				companyComponent = RobertHalf;
				break;

			case 'lhv':
				companyComponent = LHV;
				title = 'Andry Pedak & LHV — DevOps Engineer';
				break;

			case 'linkedin':
				companyComponent = LinkedIn;
				break;

			case 'digitalrealty':
				companyComponent = DigitalRealty;
				break;

			case 'delfi':
				companyComponent = Delfi;
				break;
		}
	});
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="I am a hands-on technical lead looking for new challanges." />
	
	<meta property="og:image" content="/andry-pedak.png" />
	<meta property="og:image:url" content="/andry-pedak.png" />
	<meta property="og:image:secure_url" content="/andry-pedak.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
</svelte:head>

<main class="main">
	<div class="sidebar">
		<HeaderBlock />

		{#if company && innerWidth <= 1024}
			<ContactsBlock />
		{/if}

		{#if company && innerWidth <= 1024}
			<svelte:component this={companyComponent} />
		{/if}

		{#if innerWidth > 1024}
			<InformationBlock />
		{/if}

		{#if company && innerWidth > 1024}
			<ContactsBlock />
		{/if}

		<!-- {#if !company && innerWidth > 1024}
			<LookingForBlock />
		{/if} -->
	</div>

	<div class="content">
		{#if company && innerWidth > 1024}
			<svelte:component this={companyComponent} />
		{/if}

		<AboutBlock />

		<ExperienceBlock />

		{#if innerWidth <= 1024}
			<InformationBlock />
		{/if}

		<!-- {#if !company && innerWidth <= 1024}
			<LookingForBlock />
		{/if} -->

		<AchievementsBlock />
		<ProjectsBlock />
		<EducationBlock />
		<SkillsBlock />
	</div>
</main>

<style lang="postcss">
	.main {
		@apply m-2 max-w-screen-lg space-y-2 sm:m-6 sm:space-y-4 md:m-8 md:space-y-8 lg:mx-auto lg:mb-64 lg:mt-32 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0;
		@apply print:m-0 print:block print:max-w-none;
	}

	.sidebar,
	.content {
		@apply flex flex-col gap-2 sm:gap-6 md:gap-8;
		@apply print:block;
	}

	.content {
		@apply lg:col-span-2;
	}
</style>
