<script lang="ts">
	import { getDurationText } from '$lib/utilities';
	import CalendarUserIcon from '$lib/Components/Icons/CalendarUserIcon.svelte';

	export let current: boolean = false;
	export let title: string;
	export let subtitle: string;
	export let duration: number;
</script>

<div class="item" class:bg-gray-50={!current} class:bg-blue-50={current}>
	<h4 class="font-medium dark:text-white">{title}</h4>

	{#if duration}
		<div class="flex items-center gap-1">
			<CalendarUserIcon class="h-3.5 w-3.5 fill-none stroke-gray-600 dark:stroke-gray-400" />
			<p class="text-sm text-gray-600 dark:text-gray-400">
				{subtitle} &middot; {getDurationText(duration)}
			</p>
		</div>
	{/if}
</div>

<style lang="postcss">
	.item {
		@apply min-w-[20rem] space-y-0.5 rounded p-4 pr-6 dark:bg-gray-900;
		@apply print:flex print:min-w-full print:justify-between print:space-y-0 print:bg-transparent print:p-0;
	}
</style>
