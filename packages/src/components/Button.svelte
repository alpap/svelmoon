<script lang="ts">
  export let icon = ''
  export let text: string = ''
  export let href: string = ''
  export let primary: boolean = false
  export let link: boolean = false
  export let danger: boolean = false
  export let secondary: boolean = false
  export let success: boolean = false
  export let small: boolean = false
  export let large: boolean = false
  export let block: boolean = false
  export let disabled = false
  export let square: boolean = false
  export let rounded: boolean = false
  export let circle: boolean = false
</script>

{#if href}
  <button
    {...$$restProps}
    class={`btn ${$$restProps.class ? $$restProps.class : ''}`}
    class:btn-primary={primary}
    class:btn-link={link}
    class:btn-secondary={secondary}
    class:btn-danger={danger}
    class:btn-success={success}
    class:btn-sm={small}
    class:btn-lg={large}
    class:btn-block={block}
    class:btn-square={square}
    class:btn-rounded={rounded}
    class:rounded-circle={circle}
    {disabled}
    on:click
  >
    {text}
  </button>
{:else}
  <button
    {...$$restProps}
    class={`btn ${$$restProps.class ? $$restProps.class : ''}`}
    class:btn-primary={primary}
    class:btn-link={link}
    class:btn-secondary={secondary}
    class:btn-danger={danger}
    class:btn-success={success}
    class:btn-sm={small}
    class:btn-lg={large}
    class:btn-block={block}
    class:btn-square={square}
    class:btn-rounded={rounded}
    class:rounded-circle={circle}
    {disabled}
    {href}
    on:click
  >
    {text}
  </button>
{/if}
