<script lang="ts">
  import Badge from './Badge.svelte'
  export let aria: string = ''
  export let items: { label: string; href?: string }[] = []
  export let pill: boolean = false
</script>

<span {...$$restProps} class={`badge-group ${$$restProps.class ? $$restProps.class : ''}`} role="group" aria-label={aria}>
  {#each items as item}
    {#if item.href}
      <Badge randomcolor {pill} label={item.label} href={item.href} />
    {:else}
      <Badge randomcolor {pill} label={item.label} />
    {/if}
  {/each}
</span>
