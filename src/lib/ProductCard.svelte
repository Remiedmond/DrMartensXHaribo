<script>
  // On peut passer des props pour changer la couleur du bonbon
  export let title = "Classic 1460 x Goldbear";
  export let colorClass = "bg-haribo-red";
</script>

<div class="max-w-sm rounded-xl overflow-hidden shadow-xl bg-martens-black border-2 border-martens-yellow transition-transform hover:scale-105">
  <div class="h-64 {colorClass} flex items-center justify-center relative overflow-hidden group">
  <div class="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50"></div>
  
  <span class="text-7xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-transform group-hover:scale-110 duration-300">
    🥾
  </span>
  
  <span class="absolute top-4 right-4 text-3xl animate-bounce">
    🍬
  </span>
</div>
  <div class="p-6">
    <h2 class="text-white text-2xl font-bold mb-2">{title}</h2>
    <p class="text-martens-yellow">Découvrez le mélange parfait entre robustesse et douceur avec cette édition limitée Dr. Martens x Haribo.</p>
  </div>
  <button class="mt-6 w-full py-3 bg-martens-yellow text-black font-extrabold uppercase tracking-widest hover:bg-white transition-all active:scale-95">
    Ajouter au panier
</button>
</div>