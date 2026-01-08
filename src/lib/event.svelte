<script>
  import { onMount } from 'svelte';

  let elements = [];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });

   let isHover = false; 
</script>

<section class="bg-martens-beige py-12 md:py-24 flex flex-col items-center gap-6 md:gap-12 px-4 overflow-hidden">
  
  <h2 
    bind:this={elements[1]} 
    class="fade-up delay-1 text-4xl sm:text-6xl md:text-8xl font-black bg-martens-black text-martens-beige uppercase py-4 md:py-6 px-4 text-center leading-none"
  >
    L'Événement
  </h2>

  <p 
    bind:this={elements[2]} 
    class="fade-up delay-2 w-full md:w-[60%] text-center text-martens-black text-base md:text-xl font-medium px-2"
  >
    Rejoignez-nous pour célébrer le lancement de la collaboration exclusive entre <span class="font-bold">Dr. Martens</span> et <span class="font-bold text-haribo-red">Haribo</span> ! Découvrez une collection unique alliant style audacieux et gourmandise.
  </p>

  <img 
    bind:this={elements[0]} 
    class="fade-right delay-2 w-full md:w-[90%] rounded-lg shadow-2xl object-cover" 
    src="/event-image.png" 
    alt="Événement" 
  />
  <a href="/itineraire" >
  <img 
    bind:this={elements[3]}
    
    src={isHover ? "/ticket 2.png" : "/ticket 1.png"}
    alt="Lieu de l'événement"
    on:mouseenter={() => isHover = true}
    on:mouseleave={() => isHover = false}
  />
  </a>
  <div class="text-martens-black text-center">
  <h2 class="text-martens-yellow text-center text-[34px] font-black">Cliquez sur le ticket</h2>
  <p class="font-bold"> pour voir le line-up</p>
  </div>
</section>

<style>
  /* 1. État de base masqué pour tout le monde */
  .fade-up {
    opacity: 0;
    will-change: transform, opacity; /* Optimise les performances */
    transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), 
                transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .fade-right {
    opacity: 0;
    will-change: transform, opacity; /* Optimise les performances */
    transition: opacity 2.8s cubic-bezier(0.22, 1, 0.36, 1), 
                transform 2.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* 2. Position de départ spécifique */
  .fade-up {
    transform: translateY(50px);
  }

  .fade-right {
    transform: translateX(-100px);
  }

  /* 3. L'ANIMATION (L'état final) */
  /* On force l'opacité et le reset du transform uniquement quand animate-in est là */
  :global(.fade-up.animate-in), 
  :global(.fade-right.animate-in) {
    opacity: 1 !important;
    transform: translate(0, 0) !important;
  }

  /* Délais */
  .delay-1 { transition-delay: 0.1s; }
  .delay-2 { transition-delay: 0.3s; }
  .delay-3 { transition-delay: 0.5s; }
</style>