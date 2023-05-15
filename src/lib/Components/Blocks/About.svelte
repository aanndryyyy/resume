<script>
	import Card from '$lib/Components/Card.svelte';

	import LinkedInIcon from '$lib/Components/Icons/LinkedIn.svelte';
	import GitHubIcon from '$lib/Components/Icons/GitHub.svelte';

	import { base } from '$app/paths';
</script>

<Card class={$$props.class}>
	<h2 class="mb-4 text-lg font-semibold">About me</h2>

	<div
		class="space-y-2 leading-relaxed text-gray-950 dark:text-gray-400 sm:space-y-4 sm:leading-loose"
	>
		<p>
			Hi, I'm Andry, a technical lead looking to relocate to the United Kingdom. While in
			high-school, I found an interest in programming and self-taught web development. Later I
			decided to extend my knowledge by obtaining a formal degree in <a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://taltech.ee/sisseastuja/bakalaureuseoppe-erialad/riistvara-arendus-ja-programmeerimine"
				>Computer Science</a
			>
			from TalTech University. Since then I have worked at several local tech companies where I mastered
			multiple technologies and for the past three years I pursued an IT career from Service Specialist
			to IT Service Lead in a global
			<a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.storaenso.com/en/">renewable materials company</a
			>. A wish to further develop my leadership skills led me to
			<a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://taltech.ee/sisseastuja/magistrioppe-erialad/juhtimine-ja-turundus"
				>Management</a
			> studies at the same university (paused until 2024).
		</p>
		<p>
			When I'm not coding, I enjoy hiking, taking film fotographs, and playing tennis. I believe
			that technology has the power to change the world and I find joy in breaking down complex
			problems into simple technical solutions.
		</p>
	</div>

	<hr class="my-4 sm:my-8" />

	<div class="flex items-center justify-between">
		<a href="mailto:andry@pedak.me">andry@pedak.me</a>

		<ul class="flex gap-4">
			<li>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://in.pedak.me"
					class="social-link-hover"
				>
					<LinkedInIcon />
				</a>
			</li>
			<li>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/aanndryyyy"
					class="social-link-hover"
				>
					<GitHubIcon />
				</a>
			</li>
		</ul>
	</div>
</Card>
