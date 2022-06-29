<script lang="ts">
  import Radio from './Radio.svelte'
  export let inline: boolean = false
  export let disabled: boolean = false
  export let name: string = ''
  export let items: { label: ''; value: '' }[] = []
  export let selected: string = ''
</script>

<div {...$$restProps} class={` ${$$restProps.class ? $$restProps.class : ''}`}>
  {#each items as item}
    <Radio {inline} {disabled} {name} label={item.label} on:click={() => (selected = item.value)} />
  {/each}
</div>
