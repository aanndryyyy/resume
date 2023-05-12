<script>
	import me from '$lib/assets/me.jpeg';
	import cover from '$lib/assets/cover.jpg';

	import { base } from '$app/paths';
</script>

<header
	class={`relative overflow-hidden rounded-xl bg-white shadow dark:bg-black ${$$props.class}`}
>
	<div
		class="bottom-0 left-0 top-0 bg-[url('$lib/assets/cover.jpg')] bg-cover max-lg:absolute max-lg:w-16 lg:block lg:h-32"
	/>

	<div class="relative p-6 max-lg:pl-6 lg:block lg:p-8 lg:pt-20">
		<div class="flex items-center gap-4 sm:gap-8">
			<img
				class="h-20 w-20 rounded border-2 border-white shadow-xl sm:h-24 sm:w-24 lg:absolute lg:-top-10 lg:shadow-md"
				src={me}
				alt="Andry Pedak"
			/>

			<h1 class="text-lg font-semibold">
				Andry Pedak
				<small class="block text-sm text-gray-600 dark:text-gray-400"
					>Hands-On <span class="font-medium max-[400px]:block">Technical Lead</span></small
				>
			</h1>
		</div>

		<a
			class="mt-4 flex h-12 items-center justify-center gap-2 rounded-md bg-blue-600 text-center text-white max-lg:hidden"
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
