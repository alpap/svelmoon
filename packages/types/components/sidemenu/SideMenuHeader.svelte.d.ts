/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SideMenuHeaderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class SideMenuHeader extends SvelteComponentTyped<
  SideMenuHeaderProps,
  {},
  { default: {} }
> {}
