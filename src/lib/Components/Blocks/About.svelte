<script>
	import Card from '$lib/Components/Card.svelte';
</script>

<Card class={$$props.class}>
	<h2 class="mb-4 text-lg font-semibold">About me</h2>

	<div class="prose dark:prose-invert">
		<p>
			Hi, I'm Andry, a technical lead seeking a new challenge in London, UK. While in secondary
			school, I developed an interest in programming and taught myself web development. Later, I
			decided to expand my knowledge by pursuing a formal degree in <a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://taltech.ee/sisseastuja/bakalaureuseoppe-erialad/riistvara-arendus-ja-programmeerimine"
				>Computer Science</a
			>
			from TalTech University. Since then, I have worked at several local tech companies, where I have
			mastered multiple technologies. Over the past three years, I have been dedicated to my IT career,
			progressing from a Service Specialist to an IT Service Lead in a global
			<a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.storaenso.com/en/">renewable materials company</a
			>. A desire to further enhance my leadership skills led me to pursue
			<a
				class="underline"
				target="_blank"
				rel="noopener noreferrer"
				href="https://taltech.ee/sisseastuja/magistrioppe-erialad/juhtimine-ja-turundus"
				>management</a
			> studies at the same university, which are currently on hold until 2024.
		</p>
		<p>
			When I'm not coding, I enjoy hiking, taking film photographs, and playing tennis. I firmly
			believe that technology has the power to change the world, and I derive joy from breaking down
			complex problems into simple technical solutions.
		</p>
	</div>
</Card>
