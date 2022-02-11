<script>
	import { tick } from 'svelte';

	let str = 'String!!';
	let divEl;
	let h3El;

	const changeStyle = async () => {
		await tick(); // 화면에 요소들이 모두 그려질 때까지 대기
		divEl.style.border = '1px solid #000';
		h3El.style.backgroundColor = 'orange';
	}

	changeStyle();
</script>

<main>
	<div bind:this={divEl}>
		<h3 bind:this={h3El}>{str}</h3>
	</div>
</main>