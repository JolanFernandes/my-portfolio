<script>
  let images = [
    { src: "/SvelteLogo.png", alt: "Image 1", text: "Svelte" },
    { src: "/ReactNativelogo.png", alt: "Image 2", text: "React Native" },
    { src: "/TailwindLogo.png", alt: "Image 3", text: "Tailwind" },
    { src: "/SupabaseLogo.png", alt: "Image 4", text: "Supabase" },
    { src: "/firebaseLogo.png", alt: "Image 3", text: "Firebase" },
    { src: "/javascriptLogo.png", alt: "Image 3", text: "Javascript" },
  ];
</script>

<div class="bg-gray-100 dark:bg-gray-900 py-10 transition duration-300">
  <div class="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-4xl mx-auto">
    {#each images as image}
      <div
        class="relative group rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 p-4 transition duration-300"
      >
        <img
          src={image.src}
          alt={image.alt}
          class="w-3/4 h-auto object-cover mx-auto transition-transform duration-300 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold text-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          {image.text}
        </div>
      </div>
    {/each}
  </div>
</div>
