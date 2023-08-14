<script lang="ts">
  // decrare
  type INPUT_TYPE = "text" | "number";

  export let id: string = "";
  export let value: string = "";
  export let type: INPUT_TYPE = "text";
  export let ariaLabel: string = "";
  export let label: string = "";
  export let autocompleted: string = "off";

  let isFocus: boolean = false;

  const typeAction = (node: any) => {
    node.type = type;
  };
  const handleFocusin = () => (isFocus = true);
  const handleFocusout = () => (isFocus = false);
</script>

<div class={`text-field ${value || isFocus ? "border-black" : ""}`}>
  <label
    for={id}
    class={`${
      value || isFocus
        ? " -top-3 bg-white !text-current px-1 text-sm"
        : "cursor-text"
    } ${value ? "!text-current" : ""}`}>{label}</label
  >
  <input
    {id}
    aria-label={ariaLabel}
    autocomplete={autocompleted}
    use:typeAction
    bind:value
    on:focusin={handleFocusin}
    on:focusout={handleFocusout}
  />
</div>

<style scoped lang="scss">
  .text-field {
    @apply border border-gray-400 px-3 py-2 relative rounded-md cursor-text;
    &:hover {
      @apply border-black;
      > label {
        @apply -top-3 bg-white text-current px-1 text-sm;
      }
    }
    label {
      @apply absolute z-20 text-gray-400;
    }
    input {
      outline: none;
      border: none;
      width: 100%;
    }
  }
</style>
