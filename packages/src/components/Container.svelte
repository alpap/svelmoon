<script lang="ts">
  let container: 'sm' | 'md' | 'lg' | 'xl' | 'fluid' | '' = ''
  // https://www.gethalfmoon.com/docs/containers/
</script>

<div
  {...$$restProps}
  class:container={container === ''}
  class:container-sm={container === 'sm'}
  class:container-md={container === 'md'}
  class:container-lg={container === 'lg'}
  class:container-xl={container === 'xl'}
  class:container-fluid={container === 'fluid'}
>
  <slot />
</div>
