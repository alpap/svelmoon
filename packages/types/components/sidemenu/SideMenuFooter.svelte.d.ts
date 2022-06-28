/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SideMenuFooterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class SideMenuFooter extends SvelteComponentTyped<
  SideMenuFooterProps,
  {},
  { default: {} }
> {}
