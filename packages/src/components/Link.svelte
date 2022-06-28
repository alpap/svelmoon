<script lang="ts">
  export let href: string = ''
  export let underline: boolean = false
</script>

<a {...$$restProps} {href} class:hyperlink={!underline} class:hyperlink-underline={underline}>
  <slot />
</a>
