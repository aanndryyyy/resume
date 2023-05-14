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
			Hi, I'm Andry! I am a technical lead looking to relocate to the UK. I self-taught programming
			in high-school and improved my knowledge with
			<a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://taltech.ee/sisseastuja/bakalaureuseoppe-erialad/riistvara-arendus-ja-programmeerimine"
				>Computer Science</a
			>
			at TalTech University. Since then I have worked at several local tech companies utilising web technolgies
			and for the past three years pursued an IT career in a
			<a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.storaenso.com/en/">global renewable materials company</a
			>.
		</p>
		<p>
			In my spare time, I enjoy playing tennis and experimenting with new technologies. I'm
			constantly learning and trying to improve my skills, both in my professional and personal
			life.
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
