<script>
	import cover from '$lib/assets/cover.jpg';

	import { base } from '$app/paths';
</script>

<header class="overflow-hidden rounded-xl bg-white shadow dark:bg-black">
	<div class="h-32 bg-cover" style="background-image: url({cover});" />

	<div class="relative p-8 pt-14">
		<h1 class="mb-1.5 text-lg font-semibold">Andry Pedak</h1>
		<div class="mb-7 text-sm text-gray-600 dark:text-gray-400">
			Hands-On <span class="font-medium">Technical Lead</span>
		</div>

		<a
			class="flex h-12 items-center justify-center gap-2 rounded-md bg-blue-600 text-center text-white"
			href="{base}/"
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path
					d="M17 21H18C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17H17M14 17H13C11.8954 17 11 17.8954 11 19C11 20.1046 11.8954 21 13 21H14M14 19H17M9 11H4M20 9V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H8M15 3V7M9 3V7"
					stroke="#fff"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
			<div class="download-btn">Let's talk</div>
		</a>
	</div>
</header>
