<script>
	import Warning from '$lib/Components/Icons/Warning.svelte';
</script>

<div
	class={`space-y-4 rounded-xl bg-white p-6 shadow dark:bg-gray-950 dark:bg-none dark:shadow-2xl sm:space-y-4 md:p-8 ${$$props.class}`}
>
	<h2 class="text-lg font-semibold">Hello Robert Half 👋🏼</h2>

	<div class="prose dark:prose-invert">
		<p>Dear hiring manager,</p>
		<p>
			I am writing to express my interest in the <a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/jobs/view/3603580188">technical lead</a
			> position at Robert Half. With my extensive web development expertise and solid understanding
			of WordPress, I am confident in my ability to hit the ground running and deliver exceptional results.
			The opportunity to work closely with a diverse range of internal and external stakeholders, while
			striving to meet ambitious targets, is an exciting prospect. I am eager to take on the responsibility
			of developing and implementing a brand-new online members-only portal that will be seamlessly accessible
			through the organization's website.
		</p>
		<p>
			As a technical lead, I bring a proven track record of successfully managing and delivering web
			development projects. I have a passion for innovation, attention to detail, and a proactive
			approach to problem-solving. I thrive in fast-paced environments, working collaboratively with
			teams to drive projects forward and achieve outstanding results.
		</p>
		<p>
			Thank you for considering my application. I am excited about the opportunity to contribute my
			skills and expertise to Robert Half. I look forward to discussing how my qualifications align
			with the organization's needs in more detail.
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
