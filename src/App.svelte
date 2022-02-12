<script>
	import Child from './Child.svelte';

	let name = '';
	let age = '';

	const childProps = (e) => {
		// 전달받은 데이터는 e.detail에 저장되어 있음
		name = e.detail.name;
		age = e.detail.age;
	}
</script>

<main>
	<Child on:childProps={childProps} /> <!-- on:자식의 dispatch 이름={처리할 부모의 메서드 이름}  -->

	<div class="box">
		<h2>name: {name}</h2>
		<h2>age: {age}</h2>
	</div>
</main>

<style>
    .box {
        border-bottom: 1px solid black;
        margin-bottom: 100px;
    }
</style>