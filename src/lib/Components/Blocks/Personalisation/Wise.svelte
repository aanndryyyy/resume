<script>
	import WarningIcon from '$lib/Components/Icons/Warning.svelte';
</script>

<div class={`relative mb-4 ${$$props.class}`}>
	<div
		class="absolute inset-0 -bottom-4 -z-10 rounded-[2rem] bg-[url('$lib/assets/wise-bg.svg')] bg-cover bg-bottom bg-no-repeat shadow"
	/>

	<div
		class="space-y-4 rounded-[2rem] rounded-tl-xl rounded-tr-xl bg-white p-6 shadow dark:bg-gray-950 dark:bg-none dark:shadow-2xl sm:space-y-4 md:p-8"
	>
		<h2 class="text-lg font-semibold">Hello Wise 👋🏼</h2>

		<div
			class="space-y-2 leading-relaxed text-gray-950 dark:text-gray-100 sm:space-y-4 sm:leading-loose"
		>
			<p>Dear hiring manager at Wise,</p>
			<p>
				I am writing to apply for the <a
					class="underline"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.wise.jobs/role/4786651-engineering-lead-get-paid/">Engineering Lead</a
				> position at Wise's Get Paid team. With expertise in leading a high-performing teams and a passion
				for international finance, I am excited to contribute to Wise's mission of creating a convenient
				and trustworthy platform for global payments.
			</p>
			<p>
				As an Engineering Lead, I will focus on enabling seamless payments using any method and
				currency, while building scalable systems. With experience in Java, Spring framework, and
				microservices architecture, I am equipped to design and deploy clean RESTful APIs. I am also
				adept at working with SQL databases for optimization and transactional integrity.
			</p>
			<p>
				My success in this role will involve driving engineering solutions, understanding customer
				needs, and contributing to wider company goals. I strive to foster a collaborative team
				environment that encourages open sharing of ideas.
			</p>
			<p>
				I am eager to join Wise in building a world-class money transfer product that impacts
				millions of customers. Thank you for considering my application.
			</p>
		</div>

		<hr class="dark:border-gray-500" />

		<div class="space-y-2">
			<h2 class="flex items-center gap-1.5 font-medium">
				Sponsorship required
				<WarningIcon class="h-4 w-4 fill-none stroke-orange-400 dark:stroke-orange-500" />
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
</div>
