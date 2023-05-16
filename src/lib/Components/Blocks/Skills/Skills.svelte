<script>
	import Card from '$lib/Components/Card.svelte';
	import SkillItem from './SkillItem.svelte';
</script>

<Card id="skills">
	<h2 class="mb-8 text-lg font-semibold">Keywords</h2>

	<div class="space-y-4 sm:space-y-6">
		<div class="space-y-2">
			<h3 class="font-medium">Programming</h3>
			<ul class="items">
				<li>C</li>
				<li>PHP</li>
				<li>X++</li>
				<li>SQL</li>
				<li>PowerShell</li>
				<li>Bash</li>
				<li>JavaScript</li>
				<li>TypeScript</li>
			</ul>
		</div>

		<div class="space-y-2">
			<h3 class="font-medium">Frameworks & CMS</h3>
			<ul class="items">
				<li>Svelte</li>
				<li>SvelteKit</li>
				<li>Next.js</li>
				<li>WordPress</li>
			</ul>
		</div>

		<div class="space-y-2">
			<h3 class="font-medium">Systems & Administration</h3>
			<ul class="items">
				<li>Windows</li>
				<li>Linux</li>
				<li>MS 365</li>
				<li>Azure AD</li>
				<li>Azure VD</li>
				<li>Aruba</li>
				<li>Cisco</li>
			</ul>
		</div>

		<div class="space-y-2">
			<h3 class="font-medium">DevOps & Development</h3>
			<ul class="items">
				<li>Git</li>
				<li>Azure DevOps</li>
				<li>GitHub & Actions</li>
				<li>GitLab & Actions</li>
				<li>Codespaces</li>
				<li>GitPod</li>
			</ul>
		</div>
	</div>
</Card>

<style lang="postcss">
	.items {
		@apply flex flex-wrap gap-2;
	}

	.items > li {
		@apply rounded-md border border-gray-400 bg-gray-50 px-2 py-1 text-sm font-medium text-gray-950;
		@apply dark:border-gray-500 dark:bg-gray-950 dark:text-white;
	}
</style>
