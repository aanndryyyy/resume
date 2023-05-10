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
  subtitle="Tallinn &middot; 3 yrs 6 mos"
  occupancy="Full-Time"
>
  <img slot="logo" src={storaenso} alt="Stora Enso" class="w-full h-full object-contain object-center" />

  <TraditionalExperienceItem title="IT Service Lead" subtitle="Jan 2022 &mdash; Present &middot; 1 yrs 5 mos" current />
  <TraditionalExperienceItem title="Experienced Service Specialist" subtitle="Apr 2021 &mdash; Jan 2022 &middot; 10 mos" />
  <TraditionalExperienceItem title="Service Specialist" subtitle="Apr 2020 &mdash; Apr 2021 &middot; 1 yr 1 mo" />
  <TraditionalExperienceItem title="Junior IT Support Specialist" subtitle="Jul 2018 &mdash; Sep 2018 &middot; 3 mos" />
</TraditionalExperience>

<TraditionalExperience
  title="OK Interactive (OKIA)"
  subtitle="Tallinn &middot; 1 yr"
  occupancy="Full-Time & Freelance"
>
  <OKIAIcon slot="logo" />

  <TraditionalExperienceItem title="Full-Stack Developer" subtitle="Sep 2019 &mdash; Apr 2020 &middot; 10 mos" />
  <TraditionalExperienceItem title="Front-End Developer" subtitle="Jul 2019 &mdash; Aug 2019 &middot; 2 mos" />
</TraditionalExperience>

<TraditionalExperience
  title="UusKorter"
  subtitle="Tallinn &middot; 3 yrs 3 mos"
  occupancy="Contract"
>
  <UusKorterIcon slot="logo" />

  <TraditionalExperienceItem title="Chief Operating Officer" subtitle="Mar 2020 &mdash; Present &middot; 3 yrs 3 mos" />
  <TraditionalExperienceItem title="Developer" subtitle="Mar 2020 &mdash; Present &middot; 3 yrs 3 mos" />
</TraditionalExperience>

<TraditionalExperience
  title="Web Systems"
  subtitle="Tallinn &middot; 8 mos"
  occupancy="Internship & Full-Time"
>
  <WebSystemsIcon slot="logo" />

  <TraditionalExperienceItem title="Web Developer" subtitle="Jul 2017 &mdash; Sep 2017 &middot; 3 mos" />
  <TraditionalExperienceItem title="Web Developer & Design Intern" subtitle="Feb 2017 &mdash; Jun 2017 &middot; 5 mos" />
</TraditionalExperience>

<TraditionalExperience
  title="Freelance"
  subtitle="Since 2019"
  occupancy=""
>
  <img slot="logo" src={freelance} alt="Freelance" class="h-14 w-14 bg-white" />

  <TraditionalExperienceItem title="Freelance" subtitle="Jul 2017 &mdash; Sep 2017 &middot; 3 mos" />
</TraditionalExperience>
