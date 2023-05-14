<script>
	import Warning from '$lib/Components/Icons/Warning.svelte';
</script>

<div
	class={`space-y-4 rounded-xl bg-white p-6 shadow dark:bg-gray-950 dark:bg-none dark:shadow-2xl md:p-8 ${$$props.class}`}
>
	<h2 class="text-lg font-semibold">Hello Revolut 👋🏼</h2>

	<div class="space-y-2 text-gray-900 dark:text-gray-400">
		<p>Dear hiring manager at Revolut,</p>
		<p>
			Thank you for considering my application. I would love to discuss the opportunity further in
			an interview. Please let me know if you have any questions or need any additional information
			from me by <a class="underline" href="mailto:andry@pedak.me">emailing me</a> or getting in touch
			via LinkedIn.
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
			<li
				class="rounded-md border border-orange-400 bg-orange-50 px-2 py-1 text-sm text-orange-950 dark:border-orange-500 dark:bg-orange-950 dark:text-white"
			>
				Scale-up Visa
			</li>
		</ul>
	</div>

	<hr class="dark:border-gray-500" />

	<div class="space-y-2">
		<h2 class="flex items-center gap-1.5 font-medium">Fitting teams</h2>

		<ul class="flex flex-wrap gap-2 whitespace-nowrap">
			<li>
				<a
					class="block rounded-md border border-gray-400 bg-gray-50 px-3 py-1 text-sm hover:border-blue-900 hover:bg-blue-700 hover:text-white dark:border-gray-600 dark:bg-gray-800"
					href="https://www.revolut.com/careers/?team=Engineering+%26+Data"
				>
					Engineering & Data
				</a>
			</li>
			<li>
				<a
					class="block rounded-md border border-gray-400 bg-gray-50 px-3 py-1 text-sm hover:border-blue-900 hover:bg-blue-700 hover:text-white dark:border-gray-600 dark:bg-gray-800"
					href="https://www.revolut.com/careers/?team=Product+%26+Design"
				>
					Product & Design
				</a>
			</li>
		</ul>
	</div>
</div>
