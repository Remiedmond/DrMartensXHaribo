<script>
    export let src = "";
</script>

<div class="w-full h-[10%] overflow-hidden bg-black aspect-video border-y-4 border-martens-yellow" style="height: 600px;">
  

  <video 
    {src}
    autoplay 
    muted 
    loop 
    playsinline
    class="w-full h-full object-cover shadow-2xl"
  >
    <track kind="captions" />
    Votre navigateur ne supporte pas la vidéo.
  </video>
</div>