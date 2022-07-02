<script lang="ts">
  import Button from './Button.svelte'
  export let selected: number = 0
  export let small: boolean = false
  export let large: boolean = false
  export let items = []
  export let vertical: boolean = false
</script>

<div
  {...$$restProps}
  class={`${vertical ? 'btn-group-vertical' : 'btn-group'} ${$$restProps.class ? $$restProps.class : ''}`}
  role="group"
  aria-label="seletion group"
  class:btn-group-lg={large}
  class:btn-group-sm={small}
>
  {#each items as item, index}
    <Button primary={selected === index} text={item} on:click={() => (selected = index)} />
  {/each}
</div>
