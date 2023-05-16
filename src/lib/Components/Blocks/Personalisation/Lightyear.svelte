<script>
	import Warning from '$lib/Components/Icons/Warning.svelte';
</script>

<div class="lightyear">
	<h2 class="text-lg font-semibold">Hello Lightyear 👋🏼</h2>

	<div class="prose prose-p:text-white prose-a:text-gray-50">
		<p>Dear Lightyear Hiring Manager,</p>
		<p>
			I am excited to apply for the
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://apply.workable.com/lightyear/j/D23F6C0A61/">Backend Software Engineer</a
			> position at Lightyear and be a part of the team building the main pillars of your trading platform.
		</p>
		<p>
			I am looking forward to collaborating with designers, product managers, and fellow engineers
			to maintain the reliability and performance of Lightyear. I am confident in front-end
			development, I am eager to expand my skill set and tackle the challenges of back-end
			technologies. Although I do not have hands-on experience with Java and Spring, I have a
			experience with C programming and higher-level languages like PHP (see <a href="#skills"
				>keywords</a
			>). With my enthusiasm for learning and problem-solving, I am confident that I can quickly
			adapt to new technologies and contribute to the success of any project.
		</p>
		<p>
			I am excited about the opportunity to work with a talented and international team at
			Lightyear, and to have a lasting impact on your organization. Thank you for your
			consideration.
		</p>
	</div>

	<hr class="dark:border-gray-500" />

	<div class="space-y-2">
		<h2 class="flex items-center gap-1.5 font-medium">
			Sponsorship required
			<Warning class="h-4 w-4 fill-none stroke-orange-400 dark:stroke-orange-500" />
		</h2>

		<ul class="flex flex-wrap gap-2 whitespace-nowrap">
			<li
				class="rounded-md border border-orange-400 bg-orange-50 px-2 py-1 text-sm text-orange-950 dark:border-orange-500 dark:bg-orange-950 dark:text-white"
			>
				Skilled Worker visa
			</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	.lightyear {
		@apply relative space-y-4 rounded-xl bg-[rgb(21,31,95)] bg-cover bg-center bg-no-repeat p-6 shadow sm:space-y-8 md:p-8;
		@apply after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-[radial-gradient(100%_100%_at_100%_0%,rgba(141,167,228,0.4)_0%,rgba(141,167,228,0)_100%)];
		@apply dark:shadow-2xl;
		@apply print:bg-transparent print:shadow-none print:after:bg-none print:after:content-none print:prose-p:text-black print:prose-a:text-gray-900;
	}
</style>
