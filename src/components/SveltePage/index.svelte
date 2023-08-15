<script lang="ts">
  import Checkbox from "../common/Checkbox.svelte";
  import Selectbox from "../common/Selectbox.svelte";
  import TextField from "../common/TextField.svelte";

  interface IFormData {
    firstname: string;
    lastname: string;
    telephone: string;
    isChecked: boolean;
  }

  let formData: IFormData = {
    firstname: "",
    lastname: "",
    telephone: "",
    isChecked: false,
  };
</script>

<div class="cart-page">
  <div class="w-1/2 mx-5 border border-gray-400 rounded-md h-full p-4">
    <div class="mb-4">
      <div>
        <span>firstname: </span><span>{formData.firstname}</span>
      </div>
      <div>
        <span>lastname: </span><span>{formData.lastname}</span>
      </div>
      <div>
        <span>telephone: </span><span>{formData.telephone}</span>
      </div>
      <div>
        <span>isChecked: </span><span>{formData.isChecked}</span>
      </div>
    </div>
    <form class="flex flex-col gap-4">
      <TextField bind:value={formData.firstname} type="text" id="firstname" label="First name" ariaLabel="First name" />
      <TextField bind:value={formData.lastname} type="text" id="lastname" label="Last name" ariaLabel="Last name" />
      <TextField
        bind:value={formData.telephone}
        type="number"
        id="telephone"
        label="Phone Number"
        ariaLabel="Phone Number"
      />
      <Checkbox bind:value={formData.isChecked} id="is-checked" label="Is checked" />
      <Selectbox
        label="Selectbox"
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
