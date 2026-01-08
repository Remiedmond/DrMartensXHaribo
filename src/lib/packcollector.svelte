<script>
  // Tu peux importer tes images ici
  let bootImage = "BOITE DESIGN.jpg"; 
</script>

<section class="min-h-screen bg-martens-beige relative overflow-hidden font-sans">
  <div class="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  <div class="relative z-10 bg-martens-yellow border-b-4 border-martens-black py-12 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
      <div>
        <span class="bg-martens-black text-white px-3 py-1 text-xs font-black uppercase tracking-tighter">Édition Ultra Limitée</span>
        <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mt-4">
          Le Pack <br/> <span class="text-haribo-red">Collector</span>
        </h1>
      </div>
      <p class="text-xl font-bold max-w-sm leading-tight italic">
        "Une collab' inusitée pour ceux qui ne rentrent pas dans le moule."
      </p>
    </div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto py-20 px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      <div class="relative group">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-haribo-red rounded-full flex items-center justify-center -rotate-12 group-hover:rotate-12 transition-transform duration-500 shadow-xl z-0">
          <span class="text-white font-black text-center leading-none uppercase">Original<br/>Gummy<br/>Sole</span>
        </div>
        
        <img 
          src={bootImage} 
          alt="Dr. Martens x Haribo Boot"   
          class="relative z-10 w-full  drop-shadow-[20px_20px_0px_rgba(0,0,0,1)] group-hover:drop-shadow-[30px_30px_0px_rgba(227,6,19,1)] transition-all duration-500 transform group-hover:-translate-y-2"
        />
      </div>

      <div class="space-y-12">
        <div class="border-l-8 border-martens-black pl-6">
          <h2 class="text-4xl font-black text-martens-black uppercase tracking-tighter mb-4">La Boot "Sweet Riot"</h2>
          <p class="text-lg font-medium leading-relaxed">
            Le cuir classique Smooth noir de Doc' rencontre l'explosion de couleurs Haribo. 
            Lacets dégradés "Rainbow Sugar", surpiqûres multicolores et un badge en métal Goldbear amovible sur la cheville.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6">
          <div class="flex items-center gap-4 bg-white/50 p-4 border-2 border-martens-black rounded-xl">
            
            <div>
              <h4 class="font-black uppercase text-sm">La Paire Exclusive</h4>
              <p class="text-xs opacity-70 italic">Modèle Jadon Max - Cuir embossé</p>
            </div>
          </div>
          <div class="flex items-center gap-4 bg-white/50 p-4 border-2 border-martens-black rounded-xl">
         
            <div>
              <h4 class="font-black uppercase text-sm">Le Sachet de Gélatines EL</h4>
              <p class="text-xs opacity-70 italic">Bonbons en forme de mini-bottines</p>
            </div>
          </div>
          <div class="flex items-center gap-4 bg-white/50 p-4 border-2 border-martens-black rounded-xl">
            
            <div>
              <h4 class="font-black uppercase text-sm">Le Totebag en Toile Cirée</h4>
              <p class="text-xs opacity-70 italic">Design punk-retro années 80</p>
            </div>
          </div>
        </div>

        <button class="w-full bg-martens-black text-martens-yellow py-6 text-2xl font-black uppercase tracking-widest hover:bg-haribo-red hover:text-white transition-colors flex justify-between px-10 items-center">
          S'inscrire au drop <span>→</span>
        </button>
      </div>
    </div>
  </div>

  
</section>

<style>
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* Pour que l'animation soit fluide sur le texte */
  div {
    -webkit-font-smoothing: antialiased;
  }
</style>