<script>
  import Card from '$lib/Components/Card.svelte';

  import OKIAIcon from '$lib/Components/Icons/OKIA.svelte';
  import WebSystemsIcon from '$lib/Components/Icons/WebSystems.svelte';
  import UusKorterIcon from '$lib/Components/Icons/UusKorter.svelte';
  import storaenso from '$lib/assets/storaenso.png';
  import taltech from '$lib/assets/taltech.png';

  let activeTab = 'storaenso';
</script>

<Card>
  <h2 class="text-lg font-semibold mb-8">Achievements</h2>

  <div class="flex justify-around mb-8">
    <button on:mouseenter={() => activeTab='storaenso'} class="w-24 h-24 p-4 rounded-lg hover:bg-gray-100" class:bg-gray-100={activeTab=='storaenso'}>
      <img src={storaenso} alt="Stora Enso" class="w-full h-full object-contain object-center" />
    </button>
    <button on:mouseenter={() => activeTab='okia'} class="w-24 h-24 p-4 rounded-lg hover:bg-gray-100" class:bg-gray-100={activeTab=='okia'}>
      <OKIAIcon />
    </button>
    <button on:mouseenter={() => activeTab='websys'} class="w-24 h-24 p-4 rounded-lg hover:bg-gray-100" class:bg-gray-100={activeTab=='websys'}>
      <WebSystemsIcon />
    </button>
    <button on:mouseenter={() => activeTab='uk'} class="w-24 h-24 p-4 rounded-lg hover:bg-gray-100" class:bg-gray-100={activeTab=='uk'}>
      <UusKorterIcon />
    </button>
    <button on:mouseenter={() => activeTab='you'} class="w-24 h-24 p-4 rounded-lg hover:bg-gray-100" class:bg-gray-100={activeTab=='you'}>
      <UusKorterIcon />
    </button>
  </div>

  <div class:hidden={activeTab!='storaenso'}>
    <p>Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.</p>
  </div>

  <div class:hidden={activeTab!='okia'}>
    <p>Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.</p>
  </div>

  <div class:hidden={activeTab!='websys'}>
    <p>Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.</p>
  </div>

  <div class:hidden={activeTab!='uk'}>
    <p>Praesentium ipsa magnam ut quia explicabo voluptates.</p>
  </div>

  <div class:hidden={activeTab!='you'}>
    <p>Praesentium ipsa magnam ut quia explicabo voluptates.</p>
  </div>
</Card>