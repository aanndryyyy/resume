<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let occupancy: string;
</script>

<article class="flex gap-8">
  
  <div class="h-14 w-14 flex items-center justify-center shrink-0">
    <slot name="logo" />
  </div>

  <div class="min-w-0">
    <header class="h-12 flex justify-between items-center mb-4">
      <div>
        <h3 class="font-medium">{title}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
      </div>

      <div class="text-right">
        <p class="text-sm text-gray-600 dark:text-gray-400">{occupancy}</p>
      </div>
    </header>

    <div class="flex gap-4 overflow-x-scroll pb-4">
      <slot />
    </div>
  </div>
</article>