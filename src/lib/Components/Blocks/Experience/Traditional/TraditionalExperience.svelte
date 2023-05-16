<script lang="ts">
	import { getDurationText } from '$lib/utilities';

	export let title: string;
	export let subtitle: string;
	export let occupancy: string;
	export let duration: number = 0;
</script>

<article class="item">
	<div class="flex h-14 w-14 shrink-0 items-center justify-center">
		<slot name="logo" />
	</div>

	<div class="min-w-0 print:grow">
		<header class="mb-4 flex h-12 items-center justify-between">
			<div>
				<h3 class="font-medium">{title}</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					{subtitle} &middot; {getDurationText(duration)}
				</p>
			</div>

			<div class="text-right">
				<p class="text-sm text-gray-600 dark:text-gray-400">{occupancy}</p>
			</div>
		</header>

		<div class="flex gap-4 overflow-x-scroll print:flex-col print:gap-2">
			<slot />
		</div>
	</div>
</article>

<style lang="postcss">
	.item {
		@apply flex gap-6 border-t border-gray-200 p-6 md:gap-8 md:p-8;
		@apply dark:border-gray-700;
		@apply print:border-gray-800;
	}
</style>
