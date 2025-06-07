<script>
  import Card from "$lib/components/Card.svelte";
  import Skills from "$lib/components/Skills.svelte";
</script>

<section
  id="profile"
  class="max-w-3xl mx-auto px-6 md:px-12 py-10 bg-white dark:bg-black rounded-xl shadow-lg border border-gray-500 dark:border-gray-400"
>
  <h2
    class="text-4xl font-extrabold tracking-wide mb-8 text-center text-black dark:text-white"
  >
    About Me
  </h2>

  <div class="flex flex-col md:flex-row md:items-center md:space-x-10">
    <img
      src="/robo.png"
      alt="Profile Pic"
      class="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-gray-500 dark:border-gray-400 mx-auto md:mx-0"
    />

    <div class="text-center md:text-left mt-6 md:mt-0">
      <h1 class="text-2xl font-bold text-blue-600 mb-3">
        Hey, I'm Jolan Fernandes!
      </h1>

      <p class="text-md text-gray-700 dark:text-gray-300 mb-3">
        I'm a <span class="font-semibold text-blue-600">BCA graduate</span>
        passionate about web development and design. I create
        <span class="font-semibold text-blue-600"
          >modern, responsive websites</span
        > that are visually stunning, functional, and help businesses grow online.
      </p>

      <p class="text-md text-gray-700 dark:text-gray-300 mb-3">
        With a strong focus on intuitive user experience, I transform ideas into
        sleek, seamless interfaces that enhance brands.
      </p>

      <p class="text-md text-gray-700 dark:text-gray-300 mb-5">
        Constantly learning and evolving, I stay updated with <span
          class="font-semibold text-blue-600"
          >industry trends and technologies</span
        > to deliver high-quality digital solutions.
      </p>

      <div class="flex justify-center md:justify-start">
        <a
          href="https://www.linkedin.com/in/jolan-fernandes-ds2920"
          target="_blank"
          class="flex items-center gap-2 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          <svg
            class="w-4 h-4 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.98 3.5C3.31 3.5 2 4.81 2 6.48s1.31 2.98 2.98 2.98c1.67 0 2.98-1.31 2.98-2.98S6.65 3.5 4.98 3.5zM2 9.5h5.96V22H2V9.5zm7.99 0h5.53v1.71h.08c.77-1.46 2.66-3 5.47-3 5.85 0 6.93 3.85 6.93 8.87V22h-5.96v-7.79c0-1.86-.03-4.24-2.58-4.24-2.58 0-2.97 2.02-2.97 4.1V22h-5.96V9.5z"
            />
          </svg>
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </div>
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
