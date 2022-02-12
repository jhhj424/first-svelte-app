<script>
    export let name; // name으로 전달받은 props 저장
    export let age; // age로 전달받은 props 저장
    export let otherName; // otherName으로 전달받은 props 저장
</script>

<div class="box">
    <h2>name: {name}</h2>
    <h2>age: {age}</h2>
    <h2>otherName: {otherName}</h2>
</div>

<style>
    .box {
        border-bottom: 1px solid black;
        margin-bottom: 100px;
    }
</style>