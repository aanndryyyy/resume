<script>
	import Card from '$lib/Components/Card.svelte';

	import ProgressItem from '$lib/Components/Skills/ProgressItem.svelte';
	import SkillItem from '$lib/Components/Skills/Item.svelte';
</script>

<Card>
	<h2 class="mb-8 text-lg font-semibold">Looking For</h2>

	<div class="flex flex-col gap-4">
		<ProgressItem width="90">Technical</ProgressItem>
		<ProgressItem width="50">Team Lead</ProgressItem>
	</div>

	<hr class="my-8 dark:border-gray-400" />

	<div class="-m-1 flex flex-wrap text-sm font-medium leading-none">
		<SkillItem>Web Development</SkillItem>
		<SkillItem>Databases</SkillItem>
		<SkillItem>ITIL</SkillItem>
	</div>
</Card>
