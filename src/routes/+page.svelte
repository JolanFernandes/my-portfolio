<script>
  import Card from "$lib/components/Card.svelte";
</script>

<section class="max-w-3xl mx-auto p-6">
  <h2
    class="text-2xl font-semibold mb-4 text-center transition-transform duration-300 transform hover:scale-105 active:scale-105"
  >
    Profile Image
  </h2>
  <div
    class="flex flex-col items-center md:flex-row md:items-start md:space-x-6"
  >
    <img
      src="/favicon.png"
      alt="Profile Pic"
      class="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 shadow-lg"
    />
    <p class="text-gray-700 text-base leading-relaxed">
      I am a passionate and self-driven developer specializing in creating
      responsive websites and intuitive mobile applications. With a focus on
      delivering user-friendly experiences, I aim to help businesses establish a
      strong online presence and engage their audience effectively. Committed to
      continuous learning, I stay updated with the latest industry trends to
      provide modern and effective solutions.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card
      title="Fitter"
      description="This project was made for a goan based client which focuses on fitness and health"
    />
    <Card
      title="Pet Vet"
      description="This a veterinary platform for making appointments and keeping pets medical record"
    />
    <Card
      title="Noter"
      description="This is a note taking app made for taking notes"
    />
  </div>
</section>
