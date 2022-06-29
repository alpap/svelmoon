<script lang="ts">
  export let inline: boolean = false
  export let disabled: boolean = false
  export let label: string = ''
  export let name: string = ''
  let id = (Math.random() + 1).toString(36)
</script>

<div {...$$restProps} class={`custom-switch ${$$restProps.class ? $$restProps.class : ''}`} class:d-inline-block={inline}>
  <input type="checkbox" {disabled} on:click {id} {name} />
  <label for={id}>{label}</label>
</div>
