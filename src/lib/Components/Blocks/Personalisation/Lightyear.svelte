<script>
	import Warning from '$lib/Components/Icons/Warning.svelte';
</script>

<div
	class={`after:content relative space-y-4 rounded-xl bg-[rgb(21,31,95)] bg-cover bg-center bg-no-repeat p-6 text-white shadow after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(100%_100%_at_100%_0%,rgba(141,167,228,0.4)_0%,rgba(141,167,228,0)_100%)] dark:bg-gray-950 dark:bg-none dark:shadow-2xl sm:space-y-8 md:p-8 ${$$props.class}`}
>
	<h2 class="text-lg font-semibold">Hello Lightyear 👋🏼</h2>

	<div class="space-y-2 leading-relaxed text-white dark:text-gray-50 sm:space-y-4 sm:leading-loose">
		<p>Dear Lightyear Hiring Manager,</p>
		<p>
			I am excited to apply for the
			<a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://apply.workable.com/lightyear/j/D23F6C0A61/">Backend Software Engineer</a
			> position at Lightyear and be a part of the team building the main pillars of your trading platform.
		</p>
		<p>
			As someone who is passionate about building great products, I am excited about the prospect of
			working closely with designers, product managers, and fellow engineers to maintain and expand
			the already rock-solid reliability and performance. While I may not have practical experience
			working with Java & Spring, I am committed to taking end-to-end ownership of my work and
			delivering high-quality, tested code.
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
