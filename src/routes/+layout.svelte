<script lang="ts">
  import { foo } from "$lib/wasm/pkg/frontend_wasm";
  import "../app.css";
  import { onMount } from "svelte";

  let { children } = $props();

  let mountState = $state("mounting");

  onMount(async () => {
    console.log("mounting wasm");
    foo();
    console.log("mounted");
    mountState = "mounted";
  });
</script>

<div class="app">
  <main>
    <div>{mountState}</div>
    <div>{@render children()}</div>
  </main>
</div>
