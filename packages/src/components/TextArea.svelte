<script lang="ts">
  export let large: boolean = false
  export let small: boolean = false
  export let disabled: boolean = false
  export let invalid: boolean = false
  export let value: boolean = false
</script>

<textarea
  {...$$restProps}
  {disabled}
  class={`form-control ${$$restProps.class ? $$restProps.class : ''}`}
  class:form-control-lg={large}
  class:form-control-sm={small}
  class:is-invalid={invalid}
  bind:value
/>
