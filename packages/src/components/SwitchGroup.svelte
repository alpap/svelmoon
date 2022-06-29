<script lang="ts">
  import Switch from './Switch.svelte'
  export let inline: boolean = false
  export let disabled: boolean = false
  export let name: string = ''
  export let space: string = ''
  export let items: { label: ''; value: '' }[] = []
  export let selected: string[] = []
  export let single: boolean = false
</script>

<div {...$$restProps}>
  {#each items as item}
    <Switch
      class={`${space ? 'm-' + space : ''}`}
      {inline}
      {disabled}
      {name}
      label={item.label}
      on:click={() => {
        if (single && selected.includes(item.value)) selected.filter((i) => i !== item.value)
        selected.push(item.value)
      }}
    />
  {/each}
</div>
