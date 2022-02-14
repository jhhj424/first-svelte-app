<script>
	let array = ['first', 'second', 'third']
	let toggle1 = false;
	let toggle2 = false;
</script>

<main>
	<div class='box'>
		<button on:click={() => toggle1 = !toggle1}>Toggle1</button>
		<button on:click={() => toggle2 = !toggle2}>Toggle2</button>
	</div>

	<!-- 조건문 -->
	<div class='box'>
		{#if toggle1 === true}
			<h2>toggle1 is true</h2>
		{:else if toggle2}
			<h2>toggle1 is false and toggle2 is true</h2>
		{:else}
			<h2>toggle1 is false and toggle2 is false</h2>
		{/if}
	</div>

	<!-- 반복문 -->
	<div class='box'>
		<h3>Array...</h3>
		{#each array as data, index} <!-- #each {배열} as {요소}, {인덱스} -->
			 <p>{index}: {data}</p>
		{:else}
			 <h4>Array is empty...</h4>
		{/each}
	</div>
</main>

<style>
	.box {
		border-bottom: 2px solid orange;
	}
</style>