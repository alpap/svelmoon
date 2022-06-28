/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface FooterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["footer"]> {
  /**
   * @default ''
   */
  title?: string;

  /**
   * @default ''
   */
  subtitle?: string;

  /**
   * @default false
   */
  fixed?: boolean;

  /**
   * @default ''
   */
  logo?: string;
}

export default class Footer extends SvelteComponentTyped<
  FooterProps,
  {},
  { default: {}; social: {} }
> {}
