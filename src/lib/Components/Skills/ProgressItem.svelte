<script lang="ts">
	export let width: number;
</script>

<div class="flex gap-4 items-center justify-between">
  <h3><slot /></h3>
  <div class="w-40 bg-blue-100 rounded-full h-2.5">
    <div class="bg-blue-500 h-2.5 rounded-full" style="width: {width}%"></div>
  </div>
</div>