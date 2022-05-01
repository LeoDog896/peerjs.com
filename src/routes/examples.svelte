<script lang="ts">
  import Default from "./default.svelte"

  interface Example {
    title: string;
    description: string;
    link: string;
    github: string;
  }

  const exampleList: Example[] = [{
    title: "Starvie Space Shooters",
    description: "A multiplayer serverless space shooter game built with PeerJS.",
    link: "https://starviee.github.io",
    github: "https://github.com/starviee/starviee.github.io"
  }, {
    title: "Peer-to-Peer Cue System",
    description: "Cue system for simple two-way communication and visual signaling built with PeerJS.",
    link: "https://jmcker.github.io/Peer-to-Peer-Cue-System/",
    github: "https://github.com/jmcker/Peer-to-Peer-Cue-System"
  }]
</script>

<Default>
  <div id="examples">
    <h2>PeerJS in the wild</h2>
    {#each exampleList as example}
      <div>
        <a style="font-size: 1.3em" href={example.link}
          >{example.title}</a
        >
        <p style="font-size: 1.2em">
          {example.description}
        </p>
        <a target="_blank" href={example.github}
          >Github</a
        >
      </div>
      <br/>
    {/each}
  </div>
</Default>