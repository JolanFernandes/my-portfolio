<script>
  import { Indicator, Popover } from "flowbite-svelte";

  let {
    title,
    description = "Default description",
    imgSrc = "/favicon.png",
    imgAlt = "Image",
    languages = [], // Example array of languages
    projectLink = "", // Accept a dynamic link
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

      <!-- Indicator for language used -->
      <div class="flex flex-wrap gap-2 mb-2">
        {#each languages as lang}
          <span class="flex items-center">
            <Indicator size="sm" color="orange" class="me-1.5" />
            <span class="text-black dark:text-white text-sm font-medium"
              >{lang}</span
            >
          </span>
        {/each}
      </div>

      {#if description}
        <p
          class="text-black dark:text-white text-base leading-relaxed max-h-0 overflow-hidden
                 group-hover:max-h-40 transition-max-height duration-500 ease-in-out"
        >
          {description}
        </p>
      {/if}

      <!-- Project Link -->
      {#if projectLink}
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          class="block mt-3 text-blue-500 hover:underline dark:text-blue-400"
        >
          Visit Project →
        </a>
      {:else}
        <p class="mt-3 text-gray-500 dark:text-gray-400">
          No link available for this project.
        </p>
      {/if}

      <slot />
    </div>
  </div>
</div>
