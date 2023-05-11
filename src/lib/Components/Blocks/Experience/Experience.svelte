<script>
	import NewExperienceItems from './New/NewExperienceItems.svelte';
	import TraditionalExperienceItems from './Traditional/TraditionalExperienceItems.svelte';

	let experience = false;
</script>

<div
	class={`overflow-hidden rounded-xl bg-white shadow dark:bg-gray-950 dark:shadow-2xl ${$$props.class}`}
>
	<div class="flex items-center justify-between p-8">
		<h2 class="text-lg font-semibold">
			{#if experience}
				Experience
				<small class="block font-normal leading-normal text-gray-600 dark:text-gray-400"
					>Traditional CV style experience</small
				>
			{:else}
				Experience
				<small class="block font-normal leading-normal text-gray-600 dark:text-gray-400"
					>Grouped by skills to show enabling positions</small
				>
			{/if}
		</h2>

		<label class="relative inline-flex cursor-pointer items-center">
			<input type="checkbox" class="peer sr-only" bind:checked={experience} />

			<span class="mr-3 text-sm text-gray-900 dark:text-gray-300">Traditional</span>
			<div
				class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:right-[22px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
			/>
		</label>
	</div>

	<div class="flex flex-col pt-0">
		{#if experience}
			<TraditionalExperienceItems />
		{:else}
			<NewExperienceItems />
		{/if}
	</div>
</div>
