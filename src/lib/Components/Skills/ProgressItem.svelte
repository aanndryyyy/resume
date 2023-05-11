<script lang="ts">
	export let width: number;
</script>

<div class="flex items-center justify-between gap-4">
	<h3><slot /></h3>
	<div class="h-2.5 w-40 rounded-full bg-blue-100">
		<div class="h-2.5 rounded-full bg-blue-500" style="width: {width}%" />
	</div>
</div>
