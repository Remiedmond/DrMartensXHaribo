<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  let elements = [];
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    // Bloque le scroll du corps quand le menu est ouvert
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  });
</script>

<nav class="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-6 md:px-12 uppercase font-bold text-[13px] tracking-widest bg-martens-beige/90 backdrop-blur-sm">
  <div class="flex items-center gap-2"><a href="/">
    <span class="font-black text-[18px]">DR MARTENS X HARIBO</span></a>
  </div>

  <div class="hidden md:flex gap-8">
    <a href="https://www.haribo.com/" class="hover:underline">Haribo</a>
    <a href="https://www.drmartens.com/" class="hover:underline">Dr Martens</a>
    <a href="/apropos" class="hover:underline">À Propos</a>
  </div>

  <button 
    class="md:hidden flex flex-col gap-1.5 z-[110]" 
    on:click={toggleMenu}
    aria-label="Menu"
  >
    <div class="w-8 h-1 bg-black transition-transform {isOpen ? 'rotate-45 translate-y-2.5' : ''}"></div>
    <div class="w-8 h-1 bg-black transition-opacity {isOpen ? 'opacity-0' : 'opacity-100'}"></div>
    <div class="w-8 h-1 bg-black transition-transform {isOpen ? '-rotate-45 -translate-y-2.5' : ''}"></div>
  </button>
</nav>


  {#if isOpen}
    <div 
      transition:fade
      class="fixed inset-0 bg-martens-beige z-40 flex flex-col items-center justify-center gap-8 text-martens-yellow hover:text-black"
    >
      <a href="https://www.haribo.com/" on:click={toggleMenu} class="text-3xl font-black hover:text-martens-yellow">Haribo</a>
      <a href="https://www.drmartens.com/" on:click={toggleMenu} class="text-3xl font-black hover:text-martens-yellow">Dr Martens</a>
      <a href="/apropos" on:click={toggleMenu} class="text-3xl font-black hover:text-martens-yellow">À Propos</a>
      
    </div>
  {/if}


  <div class="bg-martens-beige" style="width:100%;height:4rem;"></div>
   



<style> 
 

  button div {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  /* Pour éviter le scroll quand le menu est ouvert */
  :global(body.menu-open) {
    overflow: hidden;
  }
  /* Animation d'entrée existante */
  .fade-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  :global(.fade-up.animate-in) {
    opacity: 1;
    transform: translateY(0);
  }

  /* Animation de flottement Riot */
  .riot-float {
    animation: riot-wiggle 4s infinite ease-in-out;
  }

  @keyframes riot-wiggle {
    0%, 100% {
      transform: translateY(0) rotate(-2deg) scale(1);
    }
    50% {
      transform: translateY(-20px) rotate(2deg) scale(1.05);
    }
  }

  /* Optionnel : Ajout d'un filtre néon Haribo au survol */
  .riot-float:hover {
    filter: drop-shadow(0 0 15px #E30613);
    cursor: pointer;
  }

  .delay-2 { transition-delay: 0.3s; }
</style>