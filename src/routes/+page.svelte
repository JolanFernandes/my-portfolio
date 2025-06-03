<script>
  import Card from "$lib/components/Card.svelte";
  import Skills from "$lib/components/Skills.svelte";
</script>

<section
  class="max-w-4xl mx-auto p-12 bg-white dark:bg-black rounded-xl shadow-lg border border-gray-500 dark:border-gray-400"
>
  <h2 class="text-4xl font-bold mb-10 text-center text-black dark:text-white">
    About Me
  </h2>
  <div class="flex flex-col md:flex-row md:items-start md:space-x-12 mb-12">
    <img
      src="/robo.png"
      alt="Profile Pic"
      class="w-40 h-40 rounded-full object-cover mb-6 md:mb-0 shadow-md border-2 border-gray-500 dark:border-gray-400"
    />
    <p
      class="text-black text-lg leading-relaxed max-w-xl font-light dark:text-white"
    >
      I am a passionate and self-driven developer specializing in creating
      responsive websites and intuitive mobile applications. With a focus on
      delivering user-friendly experiences, I aim to help businesses establish a
      strong online presence and engage their audience effectively. Committed to
      continuous learning, I stay updated with the latest industry trends to
      provide modern and effective solutions.
    </p>
  </div>
</section>

<div class="max-w-5xl mx-auto mt-16">
  <h2 class="text-4xl font-bold mb-8 text-white dark:text-black">
    My Projects
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <Card
      title="Fitnik "
      description="This project was made for a Goan-based client focusing on fitness and health."
      imgSrc="/logofitnik.jpg"
    />
    <Card
      title="Fitter"
      description="A veterinary platform for making appointments and keeping pets' medical records."
    />
    <Card
      title="Plantopia"
      description="A note-taking app designed for efficient note management."
    />
  </div>
</div>

<div class="max-w-5xl mx-auto mt-16">
  <h2 class="text-4xl font-bold mb-8 text-white dark:text-black">
    My Skill Set
  </h2>
  <Skills />
</div>
