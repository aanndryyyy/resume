<script>
	import Warning from '$lib/Components/Icons/Warning.svelte';
</script>

<div
	class={`space-y-4 rounded-xl bg-white p-6 shadow dark:bg-gray-950 dark:bg-none dark:shadow-2xl sm:space-y-4 md:p-8 ${$$props.class}`}
>
	<h2 class="text-lg font-semibold">Hello King's College 👋🏼</h2>

	<div class="prose dark:prose-invert">
		<p>Dear Juliana,</p>
		<p>
			I am writing to apply for the <a href="https://www.kcl.ac.uk/jobs/066269-web-developer"
				>Web Developer</a
			> position at King's College. With my strong technical skills and experience in web development,
			I am confident in my ability to contribute to the success of King's Online's learning platform.
		</p>
		<p>
			The role outlined in the job description aligns perfectly with my expertise and interests. I
			am excited about the opportunity to work on the development of the learning environment,
			ensuring UX hand-off and accessibility requirements are met. As a collaborative team member, I
			will actively engage in the development process, contributing clever and efficient solutions
			to technological challenges and exploring innovative project solutions that leverage effective
			tech utilization, such as APIs and frameworks.
		</p>
		<p>
			In terms of desirable criteria, I have experience working with large-scale open-source systems
			like Moodle, and I am comfortable with server management, particularly in various
			environments. Furthermore, I have developed content authoring solutions, including design
			systems, CMSes, and API-driven content delivery. I am also well-versed in utilizing Google
			Analytics and managing custom tags in Google Tag Manager.
		</p>
		<p>
			I am excited about the prospect of joining King's College and contributing to the development
			of an exceptional e-learning product for students. Thank you for considering my application.
			Please feel free to contact me at your earliest convenience.
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
