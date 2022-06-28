/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface HeaderItemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default ''
   */
  href?: string;

  /**
   * @default ''
   */
  text?: string;

  /**
   * @default true
   */
  center?: boolean;

  /**
   * @default ''
   */
  icon?: string;
}

export default class HeaderItem extends SvelteComponentTyped<
  HeaderItemProps,
  { click: WindowEventMap["click"] },
  {}
> {}
