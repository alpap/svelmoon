<script lang="ts">
  import Radio from './Radio.svelte'
  export let inline: boolean = false
  export let disabled: boolean = false
  export let name: string = ''
  export let space: string = ''
  export let items: { label: string; value: string | number }[] = []
  export let selected: string | number = ''
</script>

<div {...$$restProps}>
  {#each items as item}
    <Radio class={`${space ? 'm-' + space : ''}`} {inline} {disabled} {name} label={item.label} on:click={() => (selected = item.value)} />
  {/each}
</div>
