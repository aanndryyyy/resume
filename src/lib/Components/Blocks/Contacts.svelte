<script>
	import Card from '../Card.svelte';
	import LinkedInIcon from '../Icons/LinkedInIcon.svelte';
	import MailIcon from '../Icons/MailIcon.svelte';
	import SmartphoneIcon from '../Icons/SmartphoneIcon.svelte';
</script>

<Card>
	<h2 class="mb-8 text-lg font-semibold">Contact Information</h2>

	<div class="space-y-4">
		<a href="mailto:andry.pedak@gmail.com" class="group flex items-center gap-4">
			<MailIcon
				class="h-5 w-5 fill-none stroke-gray-900 group-hover:stroke-blue-700 dark:stroke-gray-200 dark:group-hover:stroke-blue-500"
			/>
			<div
				class="text-gray-950 group-hover:text-blue-700 dark:text-gray-200 dark:group-hover:text-blue-500"
			>
				andry.pedak@gmail.com
			</div>
		</a>

		<a href="tel:+3725029216" class="group flex items-center gap-4">
			<SmartphoneIcon
				class="h-5 w-5 fill-none stroke-gray-900 group-hover:stroke-blue-700 dark:stroke-gray-200 dark:group-hover:stroke-blue-500"
			/>
			<div
				class="text-gray-950 group-hover:text-blue-700 dark:text-gray-200 dark:group-hover:text-blue-500"
			>
				+372 502 9216
			</div>
		</a>

		<a
			href="https://in.pedak.me"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex items-center gap-4"
		>
			<LinkedInIcon
				class="h-5 w-5 fill-gray-900 group-hover:fill-blue-700 dark:fill-gray-200 dark:group-hover:fill-blue-500"
			/>
			<div
				class="text-gray-950 group-hover:text-blue-700 dark:text-gray-200 dark:group-hover:text-blue-500"
			>
				Andry Pedak
			</div>
		</a>
	</div>
</Card>
