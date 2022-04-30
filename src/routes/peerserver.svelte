<script lang="ts">
  import Default from "./default.svelte"
  
  const gratitude = false;
</script>

<Default>
  <h2>PeerServer Cloud service</h2>
  <p>If you DON'T specify 'host' and 'key' options, you will automatically connect to PeerServer Cloud service. Please be aware
    that you will be sharing it with other people and IDs may collide if you set them manually.
    <br/>
    Problems? View our <a href="https://stats.uptimerobot.com/B7Ww3sDBVz" target="_blank">status page!</a></p>


  {#if gratitude}
    <p class="tagline">Thanks for your support! :)</p>
  {:else}
    <h3>Help us keep our servers running :)</h3>
    <button on:click={() => window.open('https://opencollective.com/peer', '_blank')} class="download">Donate!</button>
  {/if}
</Default>