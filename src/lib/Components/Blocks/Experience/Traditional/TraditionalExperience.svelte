<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let occupancy: string;
</script>

<article class="flex gap-6 border-t border-gray-200 p-6 dark:border-gray-700 md:gap-8 md:p-8">
	<div class="flex h-14 w-14 shrink-0 items-center justify-center">
		<slot name="logo" />
	</div>

	<div class="min-w-0">
		<header class="mb-4 flex h-12 items-center justify-between">
			<div>
				<h3 class="font-medium">{title}</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
			</div>

			<div class="text-right">
				<p class="text-sm text-gray-600 dark:text-gray-400">{occupancy}</p>
			</div>
		</header>

		<div class="flex gap-4 overflow-x-scroll pb-4">
			<slot />
		</div>
	</div>
</article>
