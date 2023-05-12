<script>
	import Card from '$lib/Components/Card.svelte';

	import LinkedInIcon from '$lib/Components/Icons/LinkedIn.svelte';
	import GitHubIcon from '$lib/Components/Icons/GitHub.svelte';

	import { base } from '$app/paths';
</script>

<Card class={$$props.class}>
	<h2 class="mb-4 text-lg font-semibold lg:mb-8">About me</h2>

	<p class="mb-8 text-gray-600 dark:text-gray-400">
		Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro
		molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores
		nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.
	</p>

	<div class="flex items-center justify-between">
		<a href="mailto:andry@pedak.me">andry@pedak.me</a>

		<ul class="flex gap-4">
			<li>
				<a href="{base}/" class="social-link-hover">
					<LinkedInIcon />
				</a>
			</li>
			<li>
				<a href="{base}/" class="social-link-hover">
					<GitHubIcon />
				</a>
			</li>
		</ul>
	</div>
</Card>
