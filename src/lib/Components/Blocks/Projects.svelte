<script>
	import Card from '$lib/Components/Card.svelte';
</script>

<Card class={$$props.class}>
	<h2 class="mb-4 text-lg font-semibold lg:mb-8">Projects</h2>

	<div class="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
		<a
			class="group block space-y-4 rounded bg-white px-4 py-3 ring-2 ring-blue-900/10 hover:bg-blue-600 hover:ring-blue-600 dark:bg-gray-950 dark:ring-gray-800 dark:hover:bg-blue-700 dark:hover:ring-blue-700"
			href="https://uuskorter.ee"
		>
			<h3 class="font-semibold group-hover:text-white">
				UusKorter <small
					class="block text-sm font-normal text-gray-600 group-hover:text-white dark:text-gray-400"
					>https://uuskorter.ee/</small
				>
			</h3>

			<p class="text-sm text-gray-800 group-hover:text-white dark:text-gray-200">
				Real-estate website that gathers all new developments in Tallinn, Estonia.
			</p>
		</a>

		<a
			class="group block space-y-4 rounded bg-white px-4 py-3 ring-2 ring-blue-900/10 hover:bg-blue-600 hover:ring-blue-600 dark:bg-gray-950 dark:ring-gray-800 dark:hover:bg-blue-700 dark:hover:ring-blue-700"
			href="https://aanndryyyy.github.io/car-sharing-comparison/"
		>
			<h3 class="font-semibold group-hover:text-white">
				Car Sharing Calculator <small
					class="block text-sm font-normal text-gray-600 group-hover:text-white dark:text-gray-400"
					>https://aanndryyyy.github.io/</small
				>
			</h3>

			<p class="text-sm text-gray-800 group-hover:text-white dark:text-gray-200">
				Effortlessly compare car sharing prices between all service providers.
			</p>
		</a>
	</div>
</Card>
