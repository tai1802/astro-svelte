<script lang="ts">
  interface IOption {
    label: string;
    value: string | number;
  }
  export let id: string = "";
  export let value: string = "";
  export let label: string = "";
  export let options: IOption[] = [];

  let isShowOption = false;
  let displayValue = "";

  const handleShowOption = (e: Event) => {
    isShowOption = true;
    const element = e.target as HTMLElement;
    if (element.tagName.toLowerCase() === "input" || element.tagName.toLowerCase() === "div") {
      (e.target as HTMLElement).focus();
    }
  };

  const handleHidenOption = () => (isShowOption = false);

  const handleChangeOption = (e: Event) => {
    value = (e.target as HTMLDivElement).getAttribute("data-value") || "";
    displayValue = (e.target as HTMLDivElement).innerText || "";
    handleHidenOption();
  };

  const handleOnbur = () => (isShowOption = false);
</script>

<div class={`select-box ${value ? "border-black" : ""}`}>
  <label
    for={id}
    class={`${value ? "-top-3 left-3 bg-white !text-current !px-1 text-sm !py-0" : "cursor-text"} ${
      value ? "!text-current" : ""
    }`}>{label}</label
  >
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div class="px-3 py-2 input" role="presentation" tabindex="0" on:click={handleShowOption} on:blur={handleOnbur}>
    <input {id} bind:value={displayValue} readonly />
  </div>
  {#if isShowOption}
    <div class="options">
      <div class="item" role="presentation" data-value="" on:mousemove={handleShowOption} on:click={handleChangeOption}>
        {" "}
      </div>
      {#each options as otp}
        <div
          class="item"
          role="presentation"
          data-value={otp.value}
          on:mousemove={handleShowOption}
          on:click={handleChangeOption}
        >
          {otp.label}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style scoped lang="scss">
  .select-box {
    @apply border border-gray-400 relative rounded-md cursor-pointer;
    &:hover {
      @apply border-black;
      > label {
        @apply -top-3 left-3 bg-white text-current px-1 text-sm py-0;
      }
    }
    label {
      @apply absolute z-20 text-gray-400 px-3 py-2;
    }
    input {
      outline: none;
      border: none;
      width: 100%;
      cursor: pointer;
    }

    .options {
      @apply absolute bg-white w-full left-0 top-[41px] border rounded;
      .item {
        @apply cursor-pointer px-2 py-1 min-h-[24px];
        &:hover {
          @apply bg-slate-100;
        }
        &:first-child {
          @apply mt-1;
        }
        &:last-child {
          @apply mb-1;
        }
      }
    }
  }
</style>
