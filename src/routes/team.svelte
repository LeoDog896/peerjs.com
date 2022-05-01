<script lang="ts">
  import Default from "./default.svelte";

  // any contributor that may stumble upon this array, please add your own favorite things.
  const tagList = ["rice", "hotdogs"]

  $: randomTag = tagList[Math.floor(Math.random() * tagList.length)];
</script>

<Default>
  <div id="team">
    <h2>The peering team</h2>
    <p>We're more excited about WebRTC and peer-to-peer communication in the browser than about
      <span class="random_tagline">{randomTag}</span>.</p>
    <br>
    <div class="person">
      <div class="img" id="michelle"></div>
      <div class="text">
        <h3>
          <a href="http://github.com/michellebu">Michelle Bu</a>
        </h3>
        <p>I mostly build silly Javascript web applications. I am working on this Javascript library so I can build more silly
          Javascript web applications.</p>
      </div>
    </div>
    <div class="person">
      <a href="http://twitter.com/reallyez">
        <div class="img" id="eric"></div>
      </a>
      <div class="text">
        <h3>
          <a href="http://github.com/ericz">Eric Zhang</a>
        </h3>
        <p>I'm not going to lie, I am addicted to writing Javascript libraries.
          <br>Please stop me.
          <br>Previously I've built
          <a href="http://binaryjs.com">BinaryJS</a> and before that I was a founder of Y Combinator startup Flotype, building, you guessed it, Javascript
          (among others) libraries.</p>
      </div>
    </div>

  </div>
</Default>