<script>
	import Child from './Child.svelte';
	
	let name = '';
	let age = '';
</script>

<main>
	<input type="text" bind:value={name} /> <!-- 양방향 바인딩 -->
	<input type="number" bind:value={age} /> <!-- 양방향 바인딩 -->

	<Child name={name} age={age} otherName={name} /> <!-- child의 변수 명 = 부모의 변수 명 -->
	<Child {name} {age} otherName={name}/> <!-- 변수 명이 동일한 경우 생략 가능 -->
</main>