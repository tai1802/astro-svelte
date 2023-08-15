<script lang="ts">
  export let id: string = "";
  export let value: boolean = false;
  export let label: string = "";

  $: inputValue = value;
  const handleOnchange = () => (value = !value);
</script>

<label class="container"
  >{label}
  <input {id} type="checkbox" bind:value={inputValue} on:change={handleOnchange} />
  <span class="checkmark" />
</label>

<style scoped lang="scss">
  .container {
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: auto;
    margin-bottom: auto;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ .checkmark {
        background-color: #2196f3;
        &:after {
          display: block;
        }
      }
    }

    .checkmark {
      position: absolute;
      top: 2px;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #eee;

      &:after {
        content: "";
        position: absolute;
        display: none;

        left: 6px;
        top: 3px;
        width: 8px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    // &:hover {
    //   input ~ .checkmark {
    //     background-color: #ccc;
    //   }
    // }
  }
</style>
