<script>
	import Warning from '$lib/Components/Icons/Warning.svelte';
</script>

<div
	class={`space-y-4 rounded-xl bg-[url('$lib/assets/lhv-bg.svg')] bg-cover bg-center bg-no-repeat p-6 shadow dark:bg-gray-950 dark:bg-none dark:shadow-2xl sm:space-y-4 md:p-8 ${$$props.class}`}
>
	<h2 class="text-lg font-semibold">Hello LHV 👋🏼</h2>

	<div
		class="space-y-2 leading-relaxed text-gray-950 dark:text-gray-400 sm:space-y-4 sm:leading-loose"
	>
		<p>Dear hiring manager at LHV,</p>
		<p>
			I hope this web-resume finds you well. I am writing to express my interest in the
			<a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://boards.eu.greenhouse.io/lhvuk/jobs/4154377101">DevOps Engineer</a
			>
			position. I am impressed by LHV's commitment to transparency, agility, and continuous improvement.
			Your values resonate with my approach to work, and I appreciate your focus on finding effective
			solutions that create value for your fintech customers.
		</p>
		<p>
			I am enthusiastic about the opportunity to work on developing and maintaining CI/CD
			infrastructure at LHV. My experience in cloud services, proficiency in various programming
			languages, scripting, and familiarity with automation pipelines align well with your required
			skills. Additionally, my knowledge of containerisation technologies, version control systems,
			and agile methodologies will enable me to quickly adapt to your team's requirements.
		</p>
		<p>
			While I have not worked in this role previously, I have spent considerable time self-exploring
			the DevOps field and I believe that my set of technical skills, passion for automation and
			collaboration, and eagerness to learn make me a great candidate for the position.
		</p>
		<p>
			Thank you for considering my application. I look forward to the opportunity to discuss how my
			skills and experience can contribute to LHV's success.
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
				Skilled Worker Visa
			</li>
		</ul>
	</div>
</div>
