<script lang="ts">
  import { onMount } from "svelte";

  let isDark = false;

  // Initialize theme based on localStorage or system preference
  onMount(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      isDark = true;
      document.documentElement.classList.add("dark");
    } else {
      isDark = false;
      document.documentElement.classList.remove("dark");
    }
  });

  function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
</script>

<button
  on:click={toggleTheme}
  class="
    p-2 rounded-full shadow-md cursor-pointer flex items-center justify-center w-10 h-10
    bg-white border border-gray-500 text-black
    hover:shadow-gray-500 transition duration-300

    dark:bg-black dark:border-gray-400 dark:text-white
    dark:hover:shadow-gray-400
  "
  aria-label="Toggle Theme"
>
  {#if isDark}
    💡 <!-- Light bulb ON -->
  {:else}
    🔅 <!-- Light bulb OFF -->
  {/if}
</button>
