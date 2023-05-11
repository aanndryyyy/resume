<script lang="ts">
	export let title: string;
	export let value: string;
</script>

<div class="flex justify-between">
	<div class="dark:text-gray-200">{title}</div>
	<div class="text-right font-medium text-gray-600 dark:text-gray-400">{value}</div>
</div>
