<script>
	import OKIAIcon from '$lib/Components/Icons/OKIA.svelte';
	import WebSystemsIcon from '$lib/Components/Icons/WebSystems.svelte';
	import UusKorterIcon from '$lib/Components/Icons/UusKorter.svelte';
	import storaenso from '$lib/assets/storaenso.png';
	import taltech from '$lib/assets/taltech.png';

	import ExperienceItem from './NewExperienceItem.svelte';
	import NewExperience from './NewExperience.svelte';
</script>

<NewExperience title="Management & Team Leadership" subtitle="2 yrs 3 mos">
	<ExperienceItem
		title="IT Service Lead"
		subtitle="Stora Enso"
		duration="1 yrs 5 mos"
		current={true}
	>
		<img
			slot="logo"
			src={storaenso}
			alt="Stora Enso"
			class="h-full w-full object-contain object-center"
		/>
	</ExperienceItem>

	<ExperienceItem title="Experienced Service Specialist" subtitle="Stora Enso" duration="10 mos">
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
</NewExperience>

<NewExperience title="Development & DevOps" subtitle="6 yrs 2 mos">
	<ExperienceItem title="Full-Stack Web Developer" subtitle="OK Interactive (OKIA)" duration="1yr">
		<OKIAIcon slot="logo" />
	</ExperienceItem>

	<ExperienceItem title="Web Developer" subtitle="Web Systems" duration="8 mos">
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

	<ExperienceItem title="Developer" subtitle="Freelance" duration="4 yrs 4 mos" />
</NewExperience>

<NewExperience title="Digital Product & Service Management" subtitle="5 yrs 9 mos">
	<ExperienceItem
		title="IT Service Lead"
		subtitle="Stora Enso"
		duration="1 yrs 5 mos"
		current={true}
	>
		<img
			slot="logo"
			src={storaenso}
			alt="Stora Enso"
			class="h-full w-full object-contain object-center"
		/>
	</ExperienceItem>

	<ExperienceItem title="COO & Developer" subtitle="UusKorter" duration="3 yrs 3 mos">
		<UusKorterIcon slot="logo" />
	</ExperienceItem>

	<ExperienceItem title="Developer" subtitle="Freelance" duration="4 yrs 4 mos" />

	<ExperienceItem title="Management" subtitle="MSSc &middot; Tallinn University of Technology">
		<img
			slot="logo"
			src={taltech}
			alt="TalTech"
			class="h-full w-full object-contain object-center"
		/>
	</ExperienceItem>
</NewExperience>
