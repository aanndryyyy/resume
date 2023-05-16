<script>
	import TraditionalExperience from './TraditionalExperience.svelte';
	import TraditionalExperienceItem from './TraditionalExperienceItem.svelte';

	import OKIAIcon from '$lib/Components/Icons/OKIA.svelte';
	import WebSystemsIcon from '$lib/Components/Icons/WebSystems.svelte';
	import UusKorterIcon from '$lib/Components/Icons/UusKorter.svelte';
	import storaenso from '$lib/assets/storaenso.png';
	import freelance from '$lib/assets/freelance.png';
</script>

<TraditionalExperience
	title="Stora Enso"
	subtitle="Tallinn"
	occupancy="Full-Time"
	duration={12 * 3 + 6}
>
	<img
		slot="logo"
		src={storaenso}
		alt="Stora Enso"
		class="h-full w-full object-contain object-center"
	/>

	<TraditionalExperienceItem
		title="IT Service Lead"
		subtitle="Jan 2022 &mdash; Present"
		duration={12 + 5}
		current
	/>
	<TraditionalExperienceItem
		title="Experienced Service Specialist"
		subtitle="Apr 2021 &mdash; Jan 2022"
		duration={10}
	/>
	<TraditionalExperienceItem
		title="Service Specialist"
		subtitle="Apr 2020 &mdash; Apr 2021"
		duration={12 + 1}
	/>
	<TraditionalExperienceItem
		title="Junior IT Support Specialist"
		subtitle="Jul 2018 &mdash; Sep 2018"
		duration={3}
	/>
</TraditionalExperience>

<TraditionalExperience
	title="OK Interactive (OKIA)"
	subtitle="Tallinn"
	occupancy="Full-Time & Freelance"
	duration={12}
>
	<OKIAIcon slot="logo" />

	<TraditionalExperienceItem
		title="Full-Stack Developer"
		subtitle="Sep 2019 &mdash; Apr 2020"
		duration={10}
	/>
	<TraditionalExperienceItem
		title="Front-End Developer"
		subtitle="Jul 2019 &mdash; Aug 2019"
		duration={2}
	/>
</TraditionalExperience>

<TraditionalExperience
	title="UusKorter"
	subtitle="Tallinn"
	occupancy="Contract"
	duration={12 * 3 + 3}
>
	<UusKorterIcon slot="logo" />

	<TraditionalExperienceItem
		title="Chief Operating Officer"
		subtitle="Mar 2020 &mdash; Present"
		duration={12 * 3 + 3}
	/>
	<TraditionalExperienceItem
		title="Developer"
		subtitle="Mar 2020 &mdash; Present"
		duration={12 * 3 + 3}
	/>
</TraditionalExperience>

<TraditionalExperience
	title="Web Systems"
	subtitle="Tallinn"
	occupancy="Internship & Full-Time"
	duration={8}
>
	<WebSystemsIcon slot="logo" />

	<TraditionalExperienceItem
		title="Web Developer"
		subtitle="Jul 2017 &mdash; Sep 2017"
		duration={3}
	/>
	<TraditionalExperienceItem
		title="Web Developer & Design Intern"
		subtitle="Feb 2017 &mdash; Jun 2017"
		duration={5}
	/>
</TraditionalExperience>

<TraditionalExperience title="Freelance" subtitle="Remote" occupancy="" duration={12 * 4 + 4}>
	<img slot="logo" src={freelance} alt="Freelance" class="h-14 w-14 bg-white" />

	<TraditionalExperienceItem
		title="Freelance"
		subtitle="Feb 2019 &mdash; Present"
		duration={12 * 4 + 4}
	/>
</TraditionalExperience>
