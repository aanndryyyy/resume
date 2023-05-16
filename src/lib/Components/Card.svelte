<aside class={`card ${$$props.class || ''}`} id={$$props.id || ''}>
	<slot />
</aside>

<style lang="postcss">
	.card {
		@apply overflow-hidden rounded-xl bg-white bg-cover bg-center bg-no-repeat p-6 shadow md:p-8;
		@apply dark:bg-gray-950 dark:bg-none dark:shadow-2xl;
	}
</style>
