<script lang="ts">
	import { getDurationText } from '$lib/utilities';

	export let title: string;
	export let duration: number = 0;
</script>

<article class="border-t border-gray-200 p-6 dark:border-gray-700 md:p-8">
	<header class="space-y-4 md:space-y-6">
		<div class="flex justify-between">
			<h3 class="font-medium">{title}</h3>
			<p class="text-right text-sm text-gray-600 dark:text-gray-400">
				{getDurationText(duration)}
			</p>
		</div>

		<div class="flex gap-4 overflow-x-scroll">
			<slot />
		</div>
	</header>
</article>
