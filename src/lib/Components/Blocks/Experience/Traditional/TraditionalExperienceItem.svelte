<script lang="ts">
	export let current: boolean = false;

	export let title: string;
	export let subtitle: string;
</script>

<div 
class="min-w-[20rem] rounded p-4 pr-6 dark:bg-gray-900"
  class:bg-gray-50={!current}
  class:bg-blue-50={current}
>
  <h4 class="font-medium dark:text-white">{title}</h4>
  <p class="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
</div>