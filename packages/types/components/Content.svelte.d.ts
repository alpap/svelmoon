/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ContentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class Content extends SvelteComponentTyped<
  ContentProps,
  {},
  { default: {} }
> {}
