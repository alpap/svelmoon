<script lang="ts">
  export let primary: boolean = false
  export let success: boolean = false
  export let secondary: boolean = false
  export let danger: boolean = false
  export let pill: boolean = false
  export let href: string = ''
  export let label: string = ''
  export let randomcolor: boolean = false

  const color = () => {
    const colors = ['badge-primary', 'badge-success', 'badge-secondary', 'badge-danger', '']
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
  }
</script>

{#if href}
  <a
    {href}
    {...$$restProps}
    class={`badge ${$$restProps.class ? $$restProps.class : ''} ${randomcolor ? color() : ''}`}
    class:badge-primary={primary}
    class:badge-success={success}
    class:badge-secondary={secondary}
    class:badge-danger={danger}
    class:badge-pill={pill}>{label}</a
  >
{:else}
  <span
    {...$$restProps}
    class={`badge ${$$restProps.class ? $$restProps.class : ''}`}
    class:badge-primary={primary}
    class:badge-success={success}
    class:badge-secondary={secondary}
    class:badge-danger={danger}
    class:badge-pill={pill}>{label}</span
  >
{/if}
