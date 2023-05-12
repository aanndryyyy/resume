<script>
	import OKIAIcon from '$lib/Components/Icons/OKIA.svelte';
	import WebSystemsIcon from '$lib/Components/Icons/WebSystems.svelte';
	import UusKorterIcon from '$lib/Components/Icons/UusKorter.svelte';
	import storaenso from '$lib/assets/storaenso.png';
	import taltech from '$lib/assets/taltech.png';

	import ExperienceItem from './NewExperienceItem.svelte';
</script>

<article class="border-t border-gray-200 p-6 dark:border-gray-700 md:p-8">
	<header class="space-y-4 md:space-y-6">
		<div class="flex justify-between">
			<h3 class="font-medium">Management & Team Leadership</h3>
			<p class="text-sm text-gray-600 dark:text-gray-400">2 yrs 3 mos</p>
		</div>

		<div class="flex gap-4 overflow-x-scroll">
			<ExperienceItem
				title="IT Service Lead"
				subtitle="Stora Enso &middot; 1 yrs 5 mos"
				current={true}
			>
				<img
					slot="logo"
					src={storaenso}
					alt="Stora Enso"
					class="h-full w-full object-contain object-center"
				/>
			</ExperienceItem>

			<ExperienceItem title="Experienced Service Specialist" subtitle="Stora Enso &middot; 10 mos">
				<img
					slot="logo"
					src={storaenso}
					alt="Stora Enso"
					class="h-full w-full object-contain object-center"
				/>
			</ExperienceItem>

			<ExperienceItem title="Management" subtitle="MSSc &middot; Tallinn University of Technology">
				<img
					slot="logo"
					src={taltech}
					alt="TalTech"
					class="h-full w-full object-contain object-center"
				/>
			</ExperienceItem>
		</div>
	</header>
</article>

<article class="border-t border-gray-200 p-6 dark:border-gray-700 md:p-8">
	<header class="space-y-4 md:space-y-6">
		<div class="flex justify-between">
			<h3 class="font-medium">Development & DevOps</h3>
			<p class="text-sm text-gray-600 dark:text-gray-400">6 yrs 2 mos</p>
		</div>

		<div class="flex gap-4 overflow-x-scroll">
			<ExperienceItem
				title="Full-Stack Web Developer"
				subtitle="OK Interactive (OKIA) &middot; 1 yr"
			>
				<OKIAIcon slot="logo" />
			</ExperienceItem>

			<ExperienceItem title="Web Developer" subtitle="Web Systems &middot; 8 mos">
				<WebSystemsIcon slot="logo" />
			</ExperienceItem>

			<ExperienceItem
				title="Computer Systems & Engineering"
				subtitle="BSc(Eng) &middot; Tallinn University of Technology"
			>
				<img
					slot="logo"
					src={taltech}
					alt="TalTech"
					class="h-full w-full object-contain object-center"
				/>
			</ExperienceItem>

			<ExperienceItem title="Developer" subtitle="Freelance &middot; 4 yrs 4 mos" />
		</div>
	</header>
</article>

<article class="border-t border-gray-200 p-6 dark:border-gray-700 md:p-8">
	<header class="space-y-4 md:space-y-6">
		<div class="mb-4 flex justify-between">
			<h3 class="font-medium">Digital Product & Service Management</h3>
			<p class="text-sm text-gray-600 dark:text-gray-400">5 yrs 9 mos</p>
		</div>

		<div class="flex gap-4 overflow-x-scroll">
			<ExperienceItem
				title="IT Service Lead"
				subtitle="Stora Enso &middot; 1 yrs 5 mos"
				current={true}
			>
				<img
					slot="logo"
					src={storaenso}
					alt="Stora Enso"
					class="h-full w-full object-contain object-center"
				/>
			</ExperienceItem>

			<ExperienceItem title="COO & Developer" subtitle="UusKorter &middot; 3 yrs 3 mos">
				<UusKorterIcon slot="logo" />
			</ExperienceItem>

			<ExperienceItem title="Developer" subtitle="Freelance &middot; 4 yrs 4 mos" />

			<ExperienceItem title="Management" subtitle="MSSc &middot; Tallinn University of Technology">
				<img
					slot="logo"
					src={taltech}
					alt="TalTech"
					class="h-full w-full object-contain object-center"
				/>
			</ExperienceItem>
		</div>
	</header>
</article>
