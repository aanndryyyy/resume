<script>
  import Card from '$lib/Components/Card.svelte';
</script>

<Card>
  <h2 class="text-lg font-semibold mb-8">Projects</h2>

  <div class="grid grid-cols-2 gap-8">
    <a class="group rounded px-4 py-3 bg-white ring-2 ring-blue-900/10 space-y-4 hover:bg-blue-600 hover:ring-blue-600 dark:hover:bg-blue-700 dark:hover:ring-blue-700 dark:bg-gray-950 dark:ring-gray-800" href="https://uuskorter.ee">
      <h3 class="font-semibold group-hover:text-white">UusKorter <small class="block font-normal text-sm text-gray-600 dark:text-gray-400 group-hover:text-white">https://uuskorter.ee/</small></h3>

      <p class="text-sm text-gray-800 dark:text-gray-200 group-hover:text-white">Real-estate website that gathers all new developments in Tallinn, Estonia.</p>
    </a>

    <a class="group rounded px-4 pt-3 bg-white ring-2 ring-blue-900/10 space-y-4 hover:bg-blue-600 hover:ring-blue-600 dark:hover:bg-blue-700 dark:hover:ring-blue-700 dark:bg-gray-950 dark:ring-gray-800" href="https://aanndryyyy.github.io/car-sharing-comparison/">
      <h3 class="font-semibold group-hover:text-white">Car Sharing Calculator <small class="block font-normal text-sm text-gray-600 dark:text-gray-400 group-hover:text-white">https://aanndryyyy.github.io/</small></h3>

      <p class="text-sm text-gray-800 dark:text-gray-200 group-hover:text-white">Effortlessly compare car sharing prices between all service providers.</p>
    </a>
  </div>
</Card>