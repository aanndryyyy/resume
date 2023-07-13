<script>
	import Card from '$lib/Components/Card.svelte';
	import Item from './Item.svelte';
</script>

<Card class={$$props.class}>
	<h2 class="mb-8 text-lg font-semibold">Information</h2>

	<div class="space-y-4">
		<Item title="Location" value="London, UK" />
		<Item title="Notice time" value="1 week" />
	</div>
</Card>
