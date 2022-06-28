<script lang="ts">
  export let large: boolean = false
  export let small: boolean = false
</script>

<div {...$$restProps} class={`form-control ${$$restProps.class ? $$restProps.class : ''}`} class:form-control-lg={large} class:form-control-sm={small}>
  <slot />
</div>
