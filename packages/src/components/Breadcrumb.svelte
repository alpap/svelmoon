<script lang="ts">
  export let center: boolean = false
  export let right: boolean = false
  export let items: { label: string; href: string }[] = []
</script>

<nav {...$$restProps} aria-label="breadcrumb navigation">
  <ul class="breadcrumb" class:text-center={center} class:text-right={right}>
    {#each items as item, index}
      {#if index === items.length - 1}
        <li class={`breadcrumb-item active ${$$restProps.class ? $$restProps.class : ''}`} aria-current="page"><a href={item.href}>{item.label}</a></li>
      {:else}
        <li class={`breadcrumb-item ${$$restProps.class ? $$restProps.class : ''}`}><a href={item.href}>{item.label}</a></li>
      {/if}
    {/each}
  </ul>
</nav>
