<script>
  // Tu peux importer tes icônes si tu utilises une bibliothèque, 
  // sinon on utilise des images statiques comme dans ton archi.
</script>

<footer class="relative bg-martens-black text-white px-6 md:px-20 overflow-hidden">
    <div class="max-w-7xl mx-auto">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            <div class="md:col-span-4 space-y-12 pt-12">
                <div class="space-y-6">
                    <h2 class="text-3xl md:text-4xl  uppercase tracking-tighter">
                        Rejoins la meute.
                    </h2>
                    <button class="bg-white text-black  py-3 px-8 uppercase tracking-widest hover:bg-martens-yellow transition-colors">
                        Nous contacter
                    </button>
                </div>

                <div class="flex gap-4">
                    <button class="hover:scale-110 transition-transform"><img src="/tiktok.png" alt="TikTok" class="w-10 h-10 opacity-80 hover:opacity-100" /></button>
                    <button class="hover:scale-110 transition-transform"><img src="/instagram.png" alt="Instagram" class="w-10 h-10 opacity-80 hover:opacity-100" /></button>
                    <button class="hover:scale-110 transition-transform"><img src="/facebook.png" alt="Facebook" class="w-10 h-10 opacity-80 hover:opacity-100" /></button>
                    <button class="hover:scale-110 transition-transform"><img src="/linkedin.png" alt="LinkedIn" class="w-10 h-10 opacity-80 hover:opacity-100" /></button>
                </div>
            </div>

            <div class="md:col-span-4 flex justify-center relative min-h-[400px]">
    <img 
        src="/footer-boots.png" 
        alt="Dr Martens Floral" 
        class="w-[120%] max-w-none md:w-[800px] pt-40 lg:w-[950px] object-contain transform -translate-y-20 md:-translate-y-40  hover:rotate-0 transition-transform duration-700 select-none pointer-events-none z-10"
    />
    
    
</div>

            <div class="md:col-span-4 flex flex-col items-end text-right space-y-12 pt-12">
                <div class="text-[#FF2352] font-bold">
                    <h3 class="text-2xl uppercase italic leading-none">Dr Martens</h3>
                    <h3 class="text-xl uppercase italic leading-none ml-4">X</h3>
                    <h3 class="text-3xl uppercase italic leading-none">Haribo</h3>
                </div>

                <div class="space-y-4">
                    <div>
                        <p class=" text-xs uppercase font-bold">Email</p>
                        <a href="mailto:contact@sweetriot.com" class="text-xl font-bold hover:text-martens-yellow transition-colors">contact@sweetriot.com</a>
                    </div>
                    <div>
                        <p class="text-martens-beige text-xs uppercase font-bold">Numéro de téléphone</p>
                        <p class="text-xl font-bold">+33 6 83 03 29 01</p>
                    </div>
                </div>

                <nav class="flex flex-col gap-2 text-sm font-bold uppercase tracking-widest text-martens-beige">
                    <button class="hover:text-white">Haribo</button>
                    <button class="hover:text-white">Dr. Martens</button>
                    <button class="hover:text-white">À Propos</button>
                </nav>
            </div>
        </div>

        <div class=" flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-widest text-martens-beige mb-6" style="margin-top: -5rem;">
            <p>©2026 dr. martens x haribo</p>
            <div class="flex flex-wrap gap-8" >
                <button class="hover:text-white">Mentions légales</button>
                <button class="hover:text-white">Politique de confidentialité</button>
            </div>
        </div>
    </div>
</footer>

<style>
    .animate-bounce-slow {
        animation: bounce-slow 4s infinite ease-in-out;
    }
    @keyframes bounce-slow {
        0%, 100% { transform: translateY(0) rotate(0); }
        50% { transform: translateY(-15px) rotate(5deg); }
    }
</style>