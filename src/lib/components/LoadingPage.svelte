<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { browser } from "$app/environment";

  if (browser) {
    onMount(() => {
      gsap.fromTo(
        ".loading-page",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1.5,
          delay: 2.5,
        }
      );
    });
  }
</script>

<div class="loading-page">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path
      d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
    />
  </svg>
  <div class="name-container">
    <div class="logo-name">Welcome</div>
  </div>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
  }

  .loading-page {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  svg {
    height: 100px;
    width: 100px;
    stroke: #fff;
    fill-opacity: 0;
    stroke-width: 3px;
    stroke-dasharray: 4500;
    animation: draw 8s ease;
  }

  @keyframes draw {
    0% {
      stroke-dashoffset: 4500;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  .logo-name {
    color: #fff;
    font-size: 20px;
    letter-spacing: 12px;
    text-transform: uppercase;
    margin-left: 20px;
  }
</style>
