<script lang="ts">
  export let placeholder: string = ''
  export let large: boolean = false
  export let small: boolean = false
  export let disabled: boolean = false
  export let valid: boolean = true
  export let readonly: boolean = false
</script>

<input
  {...$$restProps}
  class={`class="form-control" ${$$restProps.class ? $$restProps.class : ''}`}
  {placeholder}
  {readonly}
  {disabled}
  class:is-invalid={!valid}
  class:form-control-lg={large}
  class:form-control-sm={small}
/>
