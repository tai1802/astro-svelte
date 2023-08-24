<script lang="ts">
  interface IArray {
    id: string;
    name: string
  }
  let mutableVar = 'hello';
  const immutableVar = "hello";
  const things: IArray[] = [];
  let a: boolean, b: boolean, c: boolean;
  let src = "tutorial/image.gif"
  let red = 'red';
  $: computed3 = fn1(immutableVar);
  $: computed4 = fn2();
  $: console.log(immutableVar);
  $: arrowFn = () => {
    /* ... */
  };
  $: func = function () {
    /* ... */
  };
  function fn1(v: any) {
    return v + ' ' + v;
  }
  function fn2() {
    return mutableVar + ' ' + mutableVar;
  }
</script>

<button>Hello World</button>
<div class="first-class" />
<div data-text="Lorem ipsum" />
<div style="background: green; background: {red};">...</div>
<img {src}  alt="Rick Astley dances."/>

{#if a}
  <div>foo</div>
{:else if b}
  <div>bar</div>
{:else}
  baz
  {#if b}
    <div>qux</div>
  {/if}
{/if}

{#if a && b}
  1
{:else if a && b && c}
  2
{/if}

{#each things as thing (thing.id)}
  <div>{thing.name}</div>
{/each}

<style scoped lang="scss">
  .first-class {
    color: red;
  }
</style>
