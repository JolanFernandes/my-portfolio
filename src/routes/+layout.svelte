<script>
  import "../app.css";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import LoadingPage from "$lib/components/LoadingPage.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let isLoading = true;

  onMount(() => {
    // Simulate loading duration
    setTimeout(() => {
      isLoading = false;
    }, 3000);
  });
</script>

{#if isLoading}
  <div transition:fade>
    <LoadingPage />
  </div>
{:else}
  <div transition:fade>
    <header
      class="bg-black border-b border-gray-500 shadow-md sticky top-0 z-50 transition-colors duration-500 pl-4 pr-4
           dark:bg-white dark:border-gray-400"
    >
      <div
        class="flex items-center justify-between h-20 space-x-4 sm:space-x-6 max-w-7xl mx-auto"
      >
        <!-- Profile Image -->

        <!-- Navigation Links -->
        <nav class="flex items-center space-x-4 sm:space-x-8">
          <a
            href="/"
            class="flex items-center space-x-3 cursor-pointer group transition-transform duration-300 hover:scale-105"
            aria-label="Home"
          >
            <span class="text-lg font-bold text-white dark:text-black">
              Profile
            </span>
          </a>
          <a
            href="/projects"
            class="text-white px-4 py-2 rounded-md
                 hover:bg-gray-700 hover:text-white transition-colors duration-300
                 font-semibold tracking-wide dark:text-black dark:hover:bg-gray-300 dark:hover:text-black"
          >
            Projects
          </a>
          <a
            href="/skills"
            class="text-white px-4 py-2 rounded-md
                 hover:bg-gray-700 hover:text-white transition-colors duration-300
                 font-semibold tracking-wide dark:text-black dark:hover:bg-gray-300 dark:hover:text-black"
          >
            Skills
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>

    <div
      class="min-h-screen bg-black text-white lg:pt-6
           dark:bg-white dark:text-black transition-colors duration-500"
    >
      <slot />
    </div>
  </div>
{/if}
