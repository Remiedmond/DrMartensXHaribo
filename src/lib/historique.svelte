<script>
  import { onMount } from 'svelte';
	import Event from './event.svelte';

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
</script>

<section class="relative w-full h-full bg-martens-black flex flex-col justify-start" style="min-height: 600px;" >
    
    <img 
        bind:this={elements[1]} 
        src="/maison.png" 
        alt="maison d'origine" 
        class="absolute w-full h-full object-cover z-0"
        style="opacity: 0.1;" 
        
    />

    <div class="relative z-10 w-[95%] md:w-[90%] mx:auto flex flex-col items-start ">
        <p 
            bind:this={elements[2]} 
            class="fade-up delay-1  text-xl md:text-3xl  font-black text-martens-yellow pt-20 px-20"
        >
            Le monde bouge, mais nous, nous <br class="hidden md:block"/>sommes toujours là. Pas pour le luxe, <br class="hidden md:block"/>pas pour le paraître. Pour la robustesse <br class="hidden md:block"/> et la joie. Pour les ouvriers, <br class="hidden md:block"/> les punks, les grands et les <br class="hidden md:block"/>petits. Insubmersibles. <br/>Intemporels
        </p>

        <img 
            bind:this={elements[3]} 
            src="/personnage haribo.png" 
            alt="signature" 
            class="fade-up delay-2 w-80 object-contain "
        />
    </div>

    <div class="absolute bottom-10 w-full flex justify-center z-100">
        <span 
            bind:this={elements[0]} 
            class="fade-right delay-3 text-martens-yellow font-bold uppercase text-sm tracking-widest"
        >
            Deutsche Qualität
        </span>
    </div>
   <div class="absolute -bottom-40 right-10 md:-top-0 md:right-0 z-20 pointer-events-none">
        <img 
            src="/guitare.png" 
            alt="guitare" 
            bind:this={elements[5]} 
            class="fade-up delay-3 md:w-111 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        />
    </div>
</section>

<style>.fade-up,
.fade-right{
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* ÉTAT INITIAL */
.fade-up {
  transform: translateY(70px);
}

.fade-right {
  transform: translateX(100px);
}




/* ÉTAT FINAL */
:global(.fade-up.animate-in) {
  opacity: 1;
  transform: translateY(0);
}

:global(.fade-right.animate-in) {
  opacity: 1;
  transform: translateX(0);
}

:global(.fade-right2.animate-in) {
  opacity: 1;
  transform: translateX(0);
}


/* Delays */
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
</style>