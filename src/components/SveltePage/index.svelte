<script lang="ts">
  import Checkbox from "../common/Checkbox.svelte";
  import Selectbox from "../common/Selectbox.svelte";
  import TextField from "../common/TextField.svelte";
  import { formData } from "../../formStore";
  import { onMount } from "svelte";

  interface IFormData {
    firstname: string;
    lastname: string;
    telephone: string;
    isChecked: boolean;
    options: string;
  }

  let form: IFormData = {
    firstname: "",
    lastname: "",
    telephone: "",
    isChecked: false,
    options: "",
  };

  $: formData.set({ ...form });

  onMount(() => {
    formData.set({
      firstname: "firstname",
      lastname: "",
      isChecked: false,
      options: "",
      telephone: "",
    });
  });
</script>

<div class="cart-page">
  <a href="/">Home</a>
  <a href="/test">TEST</a>
  <div class="w-1/2 mx-5 border border-gray-400 rounded-md h-full p-4">
    <div class="mb-4">
      <div>
        <span>firstname: </span><span>{$formData.firstname}</span>
      </div>
      <div>
        <span>lastname: </span><span>{$formData.lastname}</span>
      </div>
      <div>
        <span>telephone: </span><span>{$formData.telephone}</span>
      </div>
      <div>
        <span>isChecked: </span><span>{$formData.isChecked}</span>
      </div>
      <div>
        <span>options: </span><span>{$formData.options}</span>
      </div>
    </div>
    <form class="flex flex-col gap-4">
      <TextField bind:value={form.firstname} type="text" id="firstname" label="First name" ariaLabel="First name" />
      <TextField bind:value={form.lastname} type="text" id="lastname" label="Last name" ariaLabel="Last name" />
      <TextField
        bind:value={form.telephone}
        type="number"
        id="telephone"
        label="Phone Number"
        ariaLabel="Phone Number"
      />
      <Checkbox bind:value={form.isChecked} id="is-checked" label="Is checked" />
      <Selectbox
        label="Selectbox"
        bind:value={form.options}
        options={[
          { label: "test", value: "1" },
          { label: "test 2", value: "2" },
        ]}
      />
    </form>
  </div>
  <div class="w-1/2" />
</div>

<style scoped lang="scss">
  .cart-page {
    @apply flex justify-between gap-5 mx-auto pt-8;
  }
</style>
