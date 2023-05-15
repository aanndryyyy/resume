<script>
	import Card from '$lib/Components/Card.svelte';

	import OKIAIcon from '$lib/Components/Icons/OKIA.svelte';
	import WebSystemsIcon from '$lib/Components/Icons/WebSystems.svelte';
	import UusKorterIcon from '$lib/Components/Icons/UusKorter.svelte';
	import storaenso from '$lib/assets/storaenso.png';
	import taltech from '$lib/assets/taltech.png';

	let activeTab = 'storaenso';
</script>

<Card class={$$props.class}>
	<h2 class="mb-8 text-lg font-semibold">Achievements</h2>

	<div class="mb-8 flex justify-around">
		<button
			on:mouseenter={() => (activeTab = 'storaenso')}
			class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 sm:h-16 sm:w-16 md:h-24 md:w-24 md:p-4"
			class:bg-gray-100={activeTab == 'storaenso'}
		>
			<img src={storaenso} alt="Stora Enso" class="h-full w-full object-contain object-center" />
		</button>
		<button
			on:mouseenter={() => (activeTab = 'okia')}
			class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 sm:h-16 sm:w-16 md:h-24 md:w-24 md:p-4"
			class:bg-gray-100={activeTab == 'okia'}
		>
			<OKIAIcon />
		</button>
		<button
			on:mouseenter={() => (activeTab = 'uk')}
			class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 sm:h-16 sm:w-16 md:h-24 md:w-24 md:p-4"
			class:bg-gray-100={activeTab == 'uk'}
		>
			<UusKorterIcon />
		</button>
		<button
			on:mouseenter={() => (activeTab = 'websys')}
			class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 sm:h-16 sm:w-16 md:h-24 md:w-24 md:p-4"
			class:bg-gray-100={activeTab == 'websys'}
		>
			<WebSystemsIcon />
		</button>
	</div>

	<div class="prose prose-slate dark:prose-invert" class:hidden={activeTab != 'storaenso'}>
		<ol>
			<li>
				<b>Saved over €70k</b> in development costs by being hands-on with the ERP system to develop
				in C, X++ and, Bash resulting in the resolution of bugs in hours.
			</li>
			<li>
				Improved user satisfaction survey results from <b>2.67 to 3.82 points</b> (max 5) in six months
				by implementing common division way of working to streamline service management across all IT
				operations in Baltic and Nordic countries.
			</li>
		</ol>
	</div>

	<div class="prose prose-slate dark:prose-invert" class:hidden={activeTab != 'okia'}>
		<ol>
			<li>
				Developing a deep tehcnical understanding of the
				<a href="https://wordpress.org/">WordPress</a> content management system to implement simple
				optimisations and utilise existing, bloat-free plugins, therefor freeing up developer time.
			</li>
			<li>
				Implement a new front-end solution for <a href="https://www.teliacompany.com/en">Telia</a> agent
				call management platform. Quickly understanding the existing backend soltuion to implement a
				modern front-end soltuion.
			</li>
		</ol>
	</div>

	<div class="prose prose-slate dark:prose-invert" class:hidden={activeTab != 'uk'}>
		<ol>
			<li>
				Successfully <a
					href="https://www.figma.com/file/QiJrsWHZJwWSIkF8G7WKBp/UusKorter?type=design&node-id=1638%3A5543&t=dujzacOR0Ot9Uv9p-1"
					>design</a
				>
				and <a href="https://uuskorter.ee/">develop</a> a real-estate website with the focus of SEO optimisation
				and natural search exposure.
			</li>
		</ol>
	</div>

	<div class="prose prose-slate dark:prose-invert" class:hidden={activeTab != 'websys'}>
		<ol>
			<li>
				Participated in a successful internship after which I continued as a full time employee
				while studying in high-school. Establishing my passion for web software development and
				design.
			</li>
		</ol>
	</div>
</Card>
