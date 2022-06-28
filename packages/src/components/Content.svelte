<script lang="ts">
  export let title: string = ''
  export let align: 'left' | 'center' | 'right' | 'justify' = 'left'
</script>

<div {...$$restProps} class={`content ${$$restProps.class ? $$restProps.class : ''}`}>
  <h2
    class="content-title"
    class:text-center={align === 'center'}
    class:text-left={align === 'left'}
    class:text-right={align === 'right'}
    class:text-justify={align === 'justify'}
  >
    {title}
  </h2>
  <slot />
</div>
