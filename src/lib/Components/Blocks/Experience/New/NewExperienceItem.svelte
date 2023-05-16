<script lang="ts">
	import { getDurationText } from '$lib/utilities';
	import CalendarUserIcon from '$lib/Components/Icons/CalendarUserIcon.svelte';
	import SuitcaseIcon from '$lib/Components/Icons/SuitcaseIcon.svelte';

	export let current: boolean = false;
	export let title: string = 'IT Service Lead';
	export let subtitle: string = 'Stroa Enso';
	export let duration: number = 0;
</script>

<div
	class="flex min-w-[24rem] shrink-0 items-center gap-4 rounded p-4 pr-6 dark:bg-gray-900"
	class:bg-gray-50={!current}
	class:bg-blue-50={current}
	class:pl-6={!$$slots.logo}
>
	{#if $$slots.logo}
		<div class="flex h-12 w-12 shrink-0 items-center justify-center">
			<slot name="logo" />
		</div>
	{/if}

	<div class="space-y-0.5">
		<h4 class="dark:text-white">{title}</h4>

		<div class="flex gap-4">
			<div class="flex items-center gap-1">
				<SuitcaseIcon class="h-3.5 w-3.5 fill-none stroke-gray-600 dark:stroke-gray-400" />
				<p class="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
			</div>

			{#if duration}
				<div class="flex items-center gap-1">
					<CalendarUserIcon class="h-3.5 w-3.5 fill-none stroke-gray-600 dark:stroke-gray-400" />
					<p class="text-sm text-gray-600 dark:text-gray-400">{getDurationText(duration)}</p>
				</div>
			{/if}
		</div>
	</div>
</div>
