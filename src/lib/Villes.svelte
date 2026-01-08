<script>
  const itinerary = [
    { 
      city: "Londres", 
      date: "18 Juillet", 
      artists: ["The Damned", "X"], 
      flag: "angleterre.png",
      desc: "Berceau du mouvement, là où tout a commencé."
    },
    { 
      city: "Paris", 
      date: "20 Juillet", 
      artists: ["The Dickies"], 
      flag: "france.png",
      desc: "Une effervescence électrique au cœur de la capitale."
    },
    { 
      city: "Bruxelles", 
      date: "22 Juillet", 
      artists: ["The Cure"], 
      flag: "belgique.png",
      desc: "Le cœur de l'Europe vibre au son du post-punk."
    },
    { 
      city: "Amsterdam", 
      date: "24 Juillet", 
      artists: ["Willow Smith"], 
      flag: "pays bas.png", 
      desc: "Session rebelle le long des canaux."
    },
    { 
      city: "Bonn", 
      date: "27 Juillet", 
      artists: ["Public Image Ltd", "Olivia Rodrigo"], 
      flag: "allemagne.png",
      desc: "Final magistral sur les rives du Rhin."
    }
  ];
</script>

<section class="min-h-screen bg-martens-beige relative py-16 px-6 overflow-hidden font-sans uppercase text-martens-black">
  <div class="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
 
  <div class="relative z-10 max-w-4xl mx-auto text-center mb-20">
    <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
      L'Odyssée <br/> <span class="text-haribo-red italic">Sweet Riot</span>
    </h1>
    <p class="text-lg font-bold max-w-2xl mx-auto normal-case leading-tight opacity-80">
      Ce n’est pas qu’une simple tournée, c’est un voyage à travers les bastions de la culture alternative européenne. 10 jours de route, 5 capitales, une seule meute.
    </p>
  </div>
 <img src="affiche teaser.png" alt="Affiche Tournée Sweet Riot" class="w-full max-w-xl mx-auto mb-10"/>
  <div class="relative z-10 max-w-5xl mx-auto">
    
    <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-martens-black hidden md:block -translate-x-1/2 opacity-20 border-l border-dashed border-black"></div>

    <div class="space-y-24">
      {#each itinerary as step, i}
        <div class="relative flex flex-col md:flex-row items-center gap-8 {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
          
          <div class="flex-1 w-full text-center {i % 2 === 0 ? 'md:text-right' : 'md:text-left'}">
            <div class="flex items-center gap-4 justify-center {i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}">
               {#if i % 2 !== 0}<img src={step.flag} alt="flag" class="h-8 shadow-sm border border-martens-black/10"/>{/if}
               <h2 class="text-4xl md:text-6xl font-black tracking-tighter">{step.city}</h2>
               {#if i % 2 === 0}<img src={step.flag} alt="flag" class="h-8 shadow-sm border border-martens-black/10"/>{/if}
            </div>
            <p class="text-haribo-red text-2xl font-black mt-1">{step.date}</p>
          </div>

          <div class="relative z-20 w-16 h-16 bg-martens-black rounded-full flex items-center justify-center border-4 border-martens-yellow shadow-[0_0_20px_rgba(255,242,0,0.5)]">
            <span class="text-white text-xs font-black">Étape {i + 1}</span>
          </div>

          <div class="flex-1 w-full bg-white/40 border-2 border-martens-black p-6 rounded-xl hover:bg-martens-yellow transition-colors duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 class="text-xs font-black mb-3 text-haribo-red tracking-widest">Line-up :</h3>
            <div class="space-y-1">
              {#each step.artists as artist}
                <p class="text-2xl font-black leading-none">{artist}</p>
              {/each}
            </div>
            <p class="text-[10px] mt-4 font-bold normal-case opacity-70 leading-tight">
              {step.desc}
            </p>
          </div>

        </div>
      {/each}
    </div>
  </div>

  <div class="relative z-10 mt-32 text-center max-w-3xl mx-auto border-t-4 border-martens-black py-2">
    <h4 class="text-3xl font-black mb-6">Trait d'union générationnel</h4>
    <p class="text-sm font-bold leading-relaxed normal-case">
      En faisant cohabiter des piliers tels que <span class="text-haribo-red">Public Image Ltd</span> avec les nouvelles icônes comme <span class="text-haribo-red">Olivia Rodrigo</span>, nous offrons un espace où les générations se retrouvent autour d’un répertoire devenu mythique.
    </p>
    
    <button class="w-full bg-martens-black text-martens-yellow py-6 text-2xl font-black uppercase tracking-widest hover:bg-haribo-red hover:text-white transition-colors flex justify-between px-10 items-center">
      REJOINDRE LE CONVOI
    </button>
  </div>

<img src="riot.png" alt="Sweet Riot Bus" class="w-full max-w-[200px] md:max-w-2xl mx-auto"/>
  </section>

