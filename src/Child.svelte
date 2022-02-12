<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let name = '';
    let age = '';

    // 함수에서 사용되는 변수들(name, age)이 변경될 때마다 실행 (반응성)
    $: (() => {
        // childProps로 name과 age를 전달
        dispatch('childProps', {
            name, // 이름이 동일해서 name: name,을 name,으로 변경
            age // 이름이 동일해서 age: age를 age로 변경
        })
    })();
</script>

<div>
    <input type="text" bind:value={name} /> <!-- 양방향 바인딩 -->
    <input type="number" bind:value={age} /> <!-- 양방향 바인딩 -->
</div>