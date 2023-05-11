<script lang="ts">
	export let current: boolean = false;

	export let title: string;
	export let subtitle: string;
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

	<div>
		<h4 class="dark:text-white">{title}</h4>
		<p class="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
	</div>
</div>
