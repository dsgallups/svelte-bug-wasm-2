<script lang="ts">
  import { foo } from "$lib/wasm/pkg/frontend_wasm";
  import "../app.css";
  import { onMount } from "svelte";

  let { children } = $props();

  onMount(async () => {
    console.log("mounting wasm");
    //let res = init();
    //foo();

    foo();
    console.log("mounted");
  });
</script>

<div class="app">
  <main>
    {@render children()}
  </main>
</div>
