<script>
	import Card from '$lib/Components/Card.svelte';

	import taltech from '$lib/assets/taltech.png';
</script>

<div class="overflow-hidden rounded-xl bg-white shadow dark:bg-gray-950 dark:shadow-2xl">
	<h2 class="p-8 text-lg font-semibold">Education</h2>

	<div class="flex flex-col pt-0">
		<article class="flex gap-8 border-t border-gray-200 p-8 dark:border-gray-700">
			<div class="flex h-14 w-14 shrink-0 items-center justify-center">
				<img src={taltech} alt="TalTech" class="h-full w-full object-contain object-center" />
			</div>

			<div class="grow">
				<header class="mb-4 flex items-center justify-between">
					<div>
						<h3 class="font-medium">Business processes management in digital society</h3>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							Master &middot; 2022 &mdash; 2025
						</p>
					</div>

					<div class="text-right">
						<p class="text-sm text-gray-600 dark:text-gray-400" />
					</div>
				</header>

				<div>
					<p class="text-sm text-gray-600 dark:text-gray-400">
						<strong class="font-medium">Field:</strong> Management and Marketing
					</p>
				</div>
			</div>
		</article>

		<article class="flex gap-8 border-t border-gray-200 p-8 dark:border-gray-700">
			<div class="flex h-14 w-14 shrink-0 items-center justify-center">
				<img src={taltech} alt="TalTech" class="h-full w-full object-contain object-center" />
			</div>

			<div class="grow">
				<header class="mb-4 flex items-center justify-between">
					<div>
						<h3 class="font-medium">Computer and Systems Engineering</h3>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							Bachelor &middot; 2019 &mdash; 2022
						</p>
					</div>

					<div class="text-right">
						<p class="text-sm text-gray-600 dark:text-gray-400" />
					</div>
				</header>

				<div>
					<p class="text-sm text-gray-600 dark:text-gray-400">
						<strong class="font-medium">Field:</strong> Hardware Development and Programming
					</p>
				</div>
			</div>
		</article>
	</div>
</div>
