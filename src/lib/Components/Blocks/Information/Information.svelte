<script>
  import Card from '$lib/Components/Card.svelte';
	import Item from './Item.svelte';
</script>

<Card>
  <h2 class="text-lg font-semibold mb-8">Information</h2>

  <div class="space-y-4">
    <Item title="Location" value="UK & Estonia" />
    <Item title="Notice time" value="1 week" />
    <Item title="Relocation" value="Yes" />
  </div>
</Card>