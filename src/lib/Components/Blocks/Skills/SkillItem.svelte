<script lang="ts">
	export var content: string;
</script>

<li class="item">
	{content}
</li>

<style lang="postcss">
	.item {
		@apply rounded-md border border-gray-400 bg-gray-50 px-2 py-1 text-sm font-medium text-gray-950;
		@apply dark:border-gray-500 dark:bg-gray-950 dark:text-white;
	}
</style>
