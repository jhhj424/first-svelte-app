<script>
	let str1 = '';
	let str2 = '';
	let str3 = '';
</script>

<main>
	<div>
		<h3>{str1}</h3>
		<input type="text" value={str1} /> <!-- 단방향 바인딩 -->
	</div>

	<div>
		<h3>{str2}</h3>
		<input type="text" value={str2} on:change={(e) => str2 = e.target.value} /> <!-- 양방향 바인딩 -->
	</div>

	<div>
		<h3>{str3}</h3>
		<input type="text" bind:value={str3} /> <!-- 양방향 바인딩 -->
	</div>
</main>