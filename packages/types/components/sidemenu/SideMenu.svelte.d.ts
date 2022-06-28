/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SideMenuProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default true
   */
  fluid?: boolean;

  /**
   * @default true
   */
  squared?: boolean;

  /**
   * @default true
   */
  show?: boolean;

  /**
   * @default '20%'
   */
  width?: string;
}

export default class SideMenu extends SvelteComponentTyped<
  SideMenuProps,
  {},
  { default: {} }
> {}
