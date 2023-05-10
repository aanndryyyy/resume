<script>
  import HeaderBlock from '$lib/Components/Blocks/Header.svelte';
  import InformationBlock from '$lib/Components/Blocks/Information/Information.svelte';
  import SkillsBlock from '$lib/Components/Blocks/Skills.svelte';
  import AboutBlock from '$lib/Components/Blocks/About.svelte';
  import ExperienceBlock from '$lib/Components/Blocks/Experience/Experience.svelte';
	import AchievementsBlock from '$lib/Components/Blocks/Achievements.svelte';
	import ProjectsBlock from '$lib/Components/Blocks/Projects.svelte';
	import EducationBlock from '$lib/Components/Blocks/Education.svelte';
	import LookingForBlock from '$lib/Components/Blocks/LookingFor.svelte';
</script>
    
<div class="flex flex-col gap-8">
  <HeaderBlock />
  <InformationBlock />
  <LookingForBlock />
</div>

<div class="flex flex-col gap-8 lg:col-span-2">
  <AboutBlock />
  <ExperienceBlock />
  <AchievementsBlock />
  <ProjectsBlock />
  <EducationBlock />
</div>
