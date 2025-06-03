<script>
  let {
    title,
    description = "Default description",
    imgSrc = "/favicon.png",
    imgAlt = "Image",
  } = $props();
</script>

<div class="container mx-auto px-4 pt-4">
  <div
    class="relative p-6 rounded-xl shadow-md flex items-center space-x-6
           bg-white dark:bg-black
           border border-gray-500 dark:border-gray-400
           transition-shadow duration-300 group hover:shadow-lg dark:hover:shadow-gray-700"
  >
    <!-- Image on the left -->
    <img
      src={imgSrc}
      alt={imgAlt}
      class="w-24 h-24 object-cover rounded-md shadow-md border border-gray-500 dark:border-gray-400"
    />

    <!-- Text content -->
    <div class="flex-1">
      {#if title}
        <h3 class="text-2xl font-semibold text-black dark:text-white mb-2">
          {title}
        </h3>
      {/if}
      {#if description}
        <p
          class="text-black dark:text-white text-base leading-relaxed max-h-0 overflow-hidden
                 group-hover:max-h-40 transition-max-height duration-500 ease-in-out"
        >
          {description}
        </p>
      {/if}
      <slot />
    </div>
  </div>
</div>
