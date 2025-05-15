<script>
  let { title, description = "Default desciption" } = $props();
</script>

<div class="container mx-auto px-4 pt-4">
  <div
    class="relative p-4 border rounded shadow-lg bg-white group h-48 overflow-hidden"
  >
    {#if title}
      <h3 class="text-xl font-bold">{title}</h3>
    {/if}
    {#if description}
      <p
        class="text-gray-700 transition-all duration-300 max-h-0 overflow-hidden group-hover:max-h-40"
      >
        {description}
      </p>
    {/if}
    <slot />
  </div>
</div>
