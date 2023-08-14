<script lang="ts">
  export let value: string = "";
  export let id: string = "";
</script>

<div class="text-field">
  <label for={id} />
  <input {id} type="text" bind:value />
</div>

<style scoped lang="scss">
  .text-field {
    @apply border;
    input {
      border: none;
      outline: none;
    }
  }
</style>
