<script lang="ts">
  export let col: string = ''
  export let sm: string = ''
  export let md: string = ''
  export let lg: string = ''
  export let xl: string = ''
</script>

<div
  {...$$restProps}
  class={`${col ? 'col-' + col : 'col'} ${sm ? 'col-sm-' + sm : ''} ${md ? 'col-md-' + md : ''} ${lg ? 'col-lg-' + lg : ''} ${xl ? 'col-xl-' + xl : ''} ${
    $$restProps.class ? $$restProps.class : ''
  }`}
>
  <slot />
</div>
