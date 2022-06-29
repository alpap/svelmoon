<script lang="ts">
  export let inline: boolean = false
  export let disabled: boolean = false
  export let checked: boolean = false
  export let label: string = ''
  let id = (Math.random() + 1).toString(36)
</script>

<div {...$$restProps} class={`custom-checkbox ${$$restProps.class ? $$restProps.class : ''}`} class:d-inline-block={inline}>
  <input type="checkbox" {disabled} on:click {id} value="" bind:checked />
  <label for={id}>{label}</label>
</div>
