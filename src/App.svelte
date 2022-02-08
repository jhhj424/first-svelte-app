<script>
	export let name;
	import MyComponent from '~/MyComponent.svelte';
	console.log('console 1 ...');
	console.log('console 2 ...');
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div class="outer">
        <div class="box" />
        <div class="box" />
        <div class="box" />
        <div class="box" />
    </div>
	<MyComponent />
	<h2>console 방지 테스트 ...</h2>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.outer {
        display: flex;
        transition: .2s ease-out;
    }

    .box {
        width: 600px;
        height: 200px;
        background-color: orange;
        margin: 20px;
    }
</style>