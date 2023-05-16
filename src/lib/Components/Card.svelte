<script lang="ts">
	let tag: string = 'section';
</script>

<svelte:element this={tag} class={`card ${$$props.class || ''}`} id={$$props.id || ''}>
	<slot />
</svelte:element>

<style lang="postcss">
	.card {
		@apply overflow-hidden rounded-xl bg-white bg-cover bg-center bg-no-repeat p-6 shadow md:p-8;
		@apply dark:bg-gray-950 dark:bg-none dark:shadow-2xl;
		@apply print:bg-transparent print:shadow-none;
	}
</style>
