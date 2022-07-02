<script lang="ts">
  let id = (Math.random() + 1).toString(36)
  export let text: string = 'Choose a file'
  export let multiple: boolean = false
  export let accept: string = '.jpg,.png,.gif'
  export let disabled: boolean = false
  export let valid: boolean = true
  // data-default-value="<a href='...' class='hyperlink' target='_blank' rel='noopener'>cute-cat.jpg</a>" to display the uploaded files
</script>

<div {...$$restProps} class={`custom-file ${$$restProps.class ? $$restProps.class : ''}`} {multiple} {accept}>
  <input type="file" {id} {disabled} class:is-invalid={!valid} />
  <label for={id}>{text}</label>
</div>
