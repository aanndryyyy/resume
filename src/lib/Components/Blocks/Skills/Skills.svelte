<script>
	import Card from '$lib/Components/Card.svelte';
	import SkillItem from './SkillItem.svelte';
</script>

<Card id="skills">
	<h2 class="mb-8 text-lg font-semibold">Skills</h2>

	<div class="space-y-4">
		<div class="space-y-2">
			<h3>Programming</h3>
			<ul class="wrap flex gap-2">
				<SkillItem content="C" />
				<SkillItem content="PHP" />
				<SkillItem content="X++" />
				<SkillItem content="SQL" />
				<SkillItem content="JavaScript" />
				<SkillItem content="TypeScript" />
			</ul>
		</div>

		<div class="space-y-2">
			<h3>Frameworks</h3>
			<ul class="wrap flex gap-2">
				<SkillItem content="Svelte" />
				<SkillItem content="Next.js" />
			</ul>
		</div>
	</div>
</Card>
