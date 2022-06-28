/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface HeaderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default true
   */
  animated?: boolean;

  /**
   * @default true
   */
  fixed?: boolean;

  /**
   * @default false
   */
  dark?: boolean;

  /**
   * @default ''
   */
  href?: string;

  /**
   * @default ''
   */
  title?: string;

  /**
   * @default ''
   */
  src?: string;

  /**
   * @default false
   */
  expander?: boolean;
}

export default class Header extends SvelteComponentTyped<
  HeaderProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
