<script>
  import { onMount } from 'svelte';

  let scrollPercentage = 0;
  let isDragging = false;
  let scrollbarHeight;

  // Mettre à jour la position au scroll réel
  function updateScroll() {
    if (isDragging) return;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollPercentage = (window.scrollY / totalHeight) * 100;
  }

  // Permettre de scroller en glissant le bonbon
  function handleMouseDown(e) {
    isDragging = true;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    let newPercentage = (e.clientY / window.innerHeight) * 100;
    
    // Limites 0-100%
    newPercentage = Math.max(0, Math.min(100, newPercentage));
    scrollPercentage = newPercentage;
    
    window.scrollTo(0, (newPercentage / 100) * totalHeight);
  }

  function handleMouseUp() {
    isDragging = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }

  onMount(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  });


  let cursor;

function moveCursor(e) {
  cursor.style.transform = `
    translate(${e.clientX}px, ${e.clientY}px)
    rotate(-15deg)
  `;
}

onMount(() => {
  document.addEventListener('mousemove', moveCursor);
});

</script>

<div 
  class="fixed right-0 top-0 h-full w-12 z-[99999] cursor-pointer group"
  on:mousedown|self={handleMouseMove} 
>
  <div 
    class="absolute right-5 top-0 w-2 bg-black border-r border-zinc-800 transition-all duration-75"
    style="height: {scrollPercentage}%"
  ></div>

  <button 
    class="absolute right-1 w-10 h-25 select-none outline-none transition-transform active:scale-90"
    style="top: calc({scrollPercentage}% - 00px); transform: rotate({scrollPercentage * 4}deg);"
    on:mousedown|stopPropagation={handleMouseDown}
  >
    <svg viewBox="0 0 100 100" class="drop-shadow-2xl">
      <circle cx="50" cy="50" r="48" fill="#0a0a0a" />
      <path 
        d="M50,50 C70,30 90,50 50,90 C10,50 30,10 50,50" 
        stroke="#333" 
        stroke-width="6" 
        fill="none" 
      />
      <circle cx="50" cy="50" r="8" fill="#111" />
      <ellipse cx="35" cy="30" rx="10" ry="5" fill="white" fill-opacity="0.2" transform="rotate(-30 35 30)" />
    </svg>
  </button>
</div>

<div class="custom-cursor" bind:this={cursor}></div>

<style>
@media (min-width: 640px) {
  :global(html) {
    scrollbar-width: none; 
  }
  :global(body::-webkit-scrollbar) {
    display: none; /* Chrome, Safari, Edge */
  }
}

:global(html) {
  cursor: none;
}

.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: url('/souris.png') no-repeat center / contain;
  pointer-events: none;
  z-index: 999999999;
  transform-origin: center;
}


  /* Optionnel : changer le curseur au survol des liens ou boutons */
  :global(a, button) {
    cursor: url('/souris-pointer.png'), pointer;
  }
</style>