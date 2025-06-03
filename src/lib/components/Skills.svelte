<script>
  let images = [
    { src: "/logofitnik.jpg", alt: "Image 1", text: "Beautiful Sunset" },
    { src: "/robo.png", alt: "Image 2", text: "Serene Forest" },
    { src: "/favicon.png", alt: "Image 3", text: "City Skyline" },
    { src: "/logofitnik.jpg", alt: "Image 4", text: "Majestic Mountains" },
  ];
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 max-w-4xl mx-auto">
  {#each images as image}
    <div
      class="relative group rounded-lg overflow-hidden shadow-md dark:shadow-white/70"
    >
      <img
        src={image.src}
        alt={image.alt}
        class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        {image.text}
      </div>
    </div>
  {/each}
</div>
