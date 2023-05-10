<script>
  import Card from '$lib/Components/Card.svelte';

  import taltech from '$lib/assets/taltech.png';
</script>

<div class="shadow rounded-xl overflow-hidden bg-white dark:bg-gray-950 dark:shadow-2xl">
  
  <h2 class="text-lg font-semibold p-8">Education</h2>

  <div class="flex flex-col pt-0">

    <article class="flex gap-8 p-8 border-t border-gray-200 dark:border-gray-700">
    
      <div class="h-14 w-14 flex items-center justify-center shrink-0">
        <img src={taltech} alt="TalTech" class="w-full h-full object-contain object-center" />
      </div>
    
      <div class="grow">
        <header class="flex justify-between items-center mb-4">
          <div>
            <h3 class="font-medium">Business processes management in digital society</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Master &middot; 2022 &mdash; 2025</p>
          </div>
          
          <div class="text-right">
            <p class="text-sm text-gray-600 dark:text-gray-400"></p>
          </div>
        </header>
        
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong class="font-medium">Field:</strong> Management and Marketing</p>
        </div>
      </div>
    </article>

    <article class="flex gap-8 p-8 border-t border-gray-200 dark:border-gray-700">
    
      <div class="h-14 w-14 flex items-center justify-center shrink-0">
        <img src={taltech} alt="TalTech" class="w-full h-full object-contain object-center" />
      </div>
    
      <div class="grow">
        <header class="flex justify-between items-center mb-4">
          <div>
            <h3 class="font-medium">Computer and Systems Engineering</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Bachelor &middot; 2019 &mdash; 2022</p>
          </div>
          
          <div class="text-right">
            <p class="text-sm text-gray-600 dark:text-gray-400"></p>
          </div>
        </header>
        
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong class="font-medium">Field:</strong> Hardware Development and Programming</p>
        </div>
      </div>
    </article>

  </div>
</div>