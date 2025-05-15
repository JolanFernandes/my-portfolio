<script>
  import "../app.css";
</script>

<header class="bg-gray-100 shadow-md sticky top-0 z-50">
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
  >
    <!-- Profile Image -->
    <a href="/" class="flex items-center space-x-3">
      <img
        src="/favicon.png"
        alt="Profile Pic"
        class="w-12 h-10 rounded-full shadow-lg ring-2 ring-gray-300 transition-transform duration-300 hover:scale-150"
      />
      <span class="text-lg font-semibold text-gray-800">Profile</span>
    </a>
    <!-- Navigation Links -->
    <nav class="flex space-x-6">
      <a
        href="/projects"
        class="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors duration-200"
        >Projects</a
      >
      <a
        href="/skills"
        class="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors duration-200"
        >Skills</a
      >
    </nav>
  </div>
</header>

<slot></slot>
