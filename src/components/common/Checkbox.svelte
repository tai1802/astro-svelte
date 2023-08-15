<script lang="ts">
  export let id: string = "";
  export let value: boolean = false;
  export let ariaLabel: string = "";
  export let label: string = "";

  $: inputValue = value;
  const handleOnchange = () => (value = !value);
</script>

<div class={`svelte-checkbox`}>
  <input {id} type="checkbox" aria-label={ariaLabel} bind:value={inputValue} on:change={handleOnchange} />
  <label for={id} class={``}>{label}</label>
</div>

<style scoped lang="scss">
  .svelte-checkbox {
  }
</style>
