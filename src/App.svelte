<script>
	let name = '';
	let age = '';

	$: pow = age * age; // age값이 변할때마다 pow값을 age*age로 저장

	const console3 = () => {
		console.log(`3 → name: ${name}, age: ${age}, pow: ${pow}`);
	}

	$: age, (() => {
		console.log(`0 → age`); // age가 변경될 때 마다 출력
	})()

	$: [age, name], (() => {
		console.log(`1 → age, name`); // age, name이 변경될 때 마다 출력
	})()

	$: name, (() => {
		console.log(`2 → name: ${name}, age: ${age}, pow: ${pow}`); // name, age가 변경될 때 마다 출력
	})()

	$: {
		console3(); // 렌더링 될 때만 출력
	}

	$: (() => {
		console.log(`4 → name: ${name}, age: ${age}, pow: ${pow}`); // name, age가 변경될 때 마다 출력
	})()

	$: if(age >= 1) {
		console.log(`5 → name: ${name}, age: ${age}, pow: ${pow}`); // age가 1이상이고 name, age가 변경될 때 마다 출력
	}
</script>

<main>
	<input type="text" bind:value={name} placeholder="name" />
	<input type="number" bind:value={age} placeholder="age" />
</main>

<style>
	input {
		border: 1px solid orange;
	}
</style>