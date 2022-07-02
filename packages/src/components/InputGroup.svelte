<script lang="ts">
  export let prepend: string = ''
  export let append: string = ''
  export let placeholder: string = ''
  export let large: boolean = false
  export let small: boolean = false
  export let custom: boolean = false
</script>

<div {...$$restProps} class={`input-group ${$$restProps.class ? $$restProps.class : ''}`} class:input-group-lg={large} class:input-group-sm={small}>
  {#if prepend}
    <div class="input-group-prepend">
      <span class="input-group-text">{prepend}</span>
    </div>
  {/if}
  <input type="text" value="0.00" {placeholder} class="form-control" />
  {#if custom}
    <div class="input-group-append">
      <slot><button class="btn btn-primary" type="button">Search</button></slot>
    </div>
  {/if}
  {#if append && !custom}
    <div class="input-group-append">
      <span class="input-group-text">{append}</span>
    </div>
  {/if}
</div>
