<script>
	import OKIAIcon from '$lib/Components/Icons/OKIA.svelte';
	import WebSystemsIcon from '$lib/Components/Icons/WebSystems.svelte';
	import UusKorterIcon from '$lib/Components/Icons/UusKorter.svelte';
	import storaenso from '$lib/assets/storaenso.png';
	import taltech from '$lib/assets/taltech.png';

	import ExperienceItem from './NewExperienceItem.svelte';
	import NewExperience from './NewExperience.svelte';
</script>

<NewExperience title="Management & Team Leadership" duration={12 * 2 + 3}>
	<ExperienceItem title="IT Service Lead" subtitle="Stora Enso" duration={12 + 5} current={true}>
		<img
			slot="logo"
			src={storaenso}
			alt="Stora Enso"
			class="h-full w-full object-contain object-center"
		/>
	</ExperienceItem>

	<ExperienceItem title="Experienced Service Specialist" subtitle="Stora Enso" duration={10}>
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

<NewExperience title="Development & DevOps" duration={12 * 6 + 2}>
	<ExperienceItem title="Full-Stack Web Developer" subtitle="OK Interactive (OKIA)" duration={12}>
		<OKIAIcon slot="logo" />
	</ExperienceItem>

	<ExperienceItem title="Web Developer" subtitle="Web Systems" duration={8}>
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

	<ExperienceItem title="Developer" subtitle="Freelance" duration={12 * 4 + 4} />
</NewExperience>

<NewExperience title="Digital Product & Service Management" duration={12 * 5 + 9}>
	<ExperienceItem title="IT Service Lead" subtitle="Stora Enso" duration={12 + 5} current={true}>
		<img
			slot="logo"
			src={storaenso}
			alt="Stora Enso"
			class="h-full w-full object-contain object-center"
		/>
	</ExperienceItem>

	<ExperienceItem title="COO & Developer" subtitle="UusKorter" duration={12 * 3 + 3}>
		<UusKorterIcon slot="logo" />
	</ExperienceItem>

	<ExperienceItem title="Developer" subtitle="Freelance" duration={12 * 4 + 4} />

	<ExperienceItem title="Management" subtitle="MSSc &middot; Tallinn University of Technology">
		<img
			slot="logo"
			src={taltech}
			alt="TalTech"
			class="h-full w-full object-contain object-center"
		/>
	</ExperienceItem>
</NewExperience>
