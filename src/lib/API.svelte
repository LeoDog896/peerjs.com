<script lang="ts">
  import { type DocEntry, TagType } from "$lib/doc"

  export let doc: DocEntry;
  export let top: boolean
</script>

<div class="{top ? "toplevel" : "child"}" id={doc.name}>
  <span class="name">
    <a href="#{doc.name}">{doc.name}</a>
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