<script>
	let toggle = false;
	$: box = toggle; // box값을 toggle값과 반응성을 띄며 동일하게 하기
</script>

<main>
	<!-- style box가 항상 적용 -->
	<div class="box">
		<h2>current toggle is {toggle}</h2>
		<button on:click={() => toggle = !toggle}>Toggle</button>
	</div>

	<!-- toggle이 true일때만 style box 적용 -->
	<div class={toggle ? 'box' : ''}>
		<h2>3항 연산자 (toggle)</h2>
	</div>

	<!-- toggle이 true일때만 style box 적용 -->
	<div class:box={toggle}>
		<h2>Class 지시어 바인딩 (toggle)</h2>
	</div>

	<!-- box가 true일때만 style box 적용 -->
	<div class:box={box}>
		<h2>Class 지시어 바인딩 (box)</h2>
	</div>

	<!-- box가 true일때만 style box 적용 -->
	<div class:box>
		<h2>Class 지시어 바인딩 생략 (box)</h2>
	</div>
</main>

<style>
	.box {
		border-bottom: 6px solid orange;
		margin-bottom: 10px;
	}
</style>