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
    
<div class="flex flex-col gap-8">
  <HeaderBlock />
  <InformationBlock />

  {#if !company}
    <LookingForBlock />
  {/if}
</div>

<div class="flex flex-col gap-8 lg:col-span-2">

  {#if company}
    <svelte:component this={ companyComponent } />
  {/if}

  <AboutBlock />
  <ExperienceBlock />
  <AchievementsBlock />
  <ProjectsBlock />
  <EducationBlock />
</div>
