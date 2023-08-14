<script lang="ts">
  import TextField from "./TextField.svelte";

  let inputValue: string = "";
</script>

<div>
  <div>{inputValue}</div>
  <TextField id="test" value={inputValue} />
</div>
