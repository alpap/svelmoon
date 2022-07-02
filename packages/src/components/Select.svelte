<script lang="ts">
  export let items: { label: string; value: string | number }[] = []
  export let selected: string | number = ''
  export let large: boolean = false
  export let small: boolean = false
  export let valid: boolean = true
  let id = (Math.random() + 1).toString(36)
</script>

<select
  {id}
  {...$$restProps}
  class={`form-control ${$$restProps.class ? $$restProps.class : ''}`}
  class:form-control-lg={large}
  class:form-control-sm={small}
  class:is-invalid={!valid}
>
  {#each items as item}
    <option value={item.value} on:click={() => (selected = item.value)}>{item.label}</option>
  {/each}
</select>
