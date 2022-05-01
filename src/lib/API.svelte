<script lang="ts">
  import { type DocEntry, TagType } from "$lib/doc"

  export let doc: DocEntry;
  export let top: boolean
</script>

<div class="{top ? "toplevel" : "child"}" id={doc.name}>
  <span class="name">
    <a href="#{doc.name}">
      {#if doc.name.startsWith("[")}
        <span class="bracket">[</span>{doc.name.substring(1).slice(0, -1)}<span class="bracket">]</span>
      {:else}
        {doc.name}
      {/if}
    </a>
    {#each doc.tags as tag}
      <span class="tag" style="background-color: {TagType[tag]};">{tag}</span>
    {/each}
    {#if doc.example}
      <span class="snippet">{doc.example}</span>
    {/if}
  </span>
  {#if doc.description}
    <p class="description">{@html doc.description}</p>
  {/if}
  {#if doc.warning}
    <span class="warn">{@html doc.warning}</span>
  {/if}
  {#if doc.note}
    <span class="tip">{@html doc.note}</span>
  {/if}
  {#if doc.children && doc.children.length !== 0}
    <div class="children">
      {#each doc.children as child}
        <svelte:self doc={child}></svelte:self>
      {/each}
    </div>
  {/if}
</div>