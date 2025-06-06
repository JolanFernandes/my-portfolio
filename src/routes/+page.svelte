<script>
  import Card from "$lib/components/Card.svelte";
  import Skills from "$lib/components/Skills.svelte";
</script>

<section
  id="profile"
  class="max-w-4xl mx-auto p-12 bg-white dark:bg-black rounded-xl shadow-lg border border-gray-500 dark:border-gray-400"
>
  <h2
    class="text-5xl font-extrabold tracking-wide mb-12 text-center text-black dark:text-white"
  >
    About Me
  </h2>
  <div class="flex flex-col md:flex-row md:items-center md:space-x-16 mb-16">
    <img
      src="/robo.png"
      alt="Profile Pic"
      class="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-gray-500 dark:border-gray-400"
    />
    <p
      class="text-black text-lg leading-loose max-w-xl font-light dark:text-white space-y-6"
    >
      <span class="text-3xl font-bold text-black dark:text-white block mb-2"
        >Hi, I'm Jolan Fernandes!</span
      >
      <span class="text-xl font-semibold block"
        >A Bachelor of Computer Applications (BCA) graduate, passionate about
        web development and design.</span
      >

      <span class="block">
        I specialize in crafting <strong>responsive, modern websites</strong>
        that are both visually stunning and highly functional. My goal is to help
        businesses build a
        <strong>strong online presence</strong> with
        <em>intuitive and user-friendly digital experiences</em>.
      </span>

      <span class="block">
        As a <strong>creative thinker</strong>, I love bringing ideas to life
        through <em>thoughtful design and smooth interactions</em>. Attention to
        <strong>detail, aesthetics, and user experience</strong>
        is at the core of everything I create—ensuring each website not only looks
        amazing but also delivers a seamless experience.
      </span>

      <span class="block">
        I'm constantly <strong>learning and evolving</strong>, staying ahead of
        the latest <em>industry trends and technologies</em> to provide innovative
        solutions that stand out.
      </span>

      <span class="block text-xl font-semibold">
        If you're looking for a <strong
          >fresh perspective, great design, and efficient web/app solutions</strong
        >, let's connect and create something amazing together!
      </span>
    </p>
  </div>
</section>

<div id="projects" class="max-w-5xl mx-auto mt-16">
  <h2
    class="text-5xl font-extrabold tracking-wide mb-12 text-center text-white dark:text-black"
  >
    My Projects
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    <Card
      title="Fitnik "
      description="This website is for a Goan-based client focusing on fitness and health."
      imgSrc="/logofitnik.jpg"
      languages={["Svelte", "Tailwind", "Supabase"]}
      projectLink="https://www.fitnik.life/"
    />
    <Card
      title="Fitter"
      description="A Mobile app built for a personal trainer to manage users progress and as a guide ."
      imgSrc="/fitter_logo.png"
    />
    <Card
      title="Plantopia"
      description="Prototype Nursery management app made for a local nusery."
      imgSrc="/plantopia_logo.png"
    />
  </div>
</div>

<div id="skills" class="max-w-5xl mx-auto mt-16">
  <h2
    class="text-5xl font-extrabold tracking-wide mb-12 text-center text-white dark:text-black"
  >
    My Skill Set
  </h2>
  <Skills />
</div>
