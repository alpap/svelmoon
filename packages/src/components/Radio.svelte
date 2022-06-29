<script lang="ts">
  export let inline: boolean = false
  export let disabled: boolean = false
  export let label: string = ''
  export let name: string = ''
  export let value: string = ''
  let id = (Math.random() + 1).toString(36)
</script>

<div {...$$restProps} class={`custom-radio ${$$restProps.class ? $$restProps.class : ''}`} class:d-inline-block={inline}>
  <input type="radio" {disabled} on:click {id} {name} {value} />
  <label for={id}>{label}</label>
</div>
