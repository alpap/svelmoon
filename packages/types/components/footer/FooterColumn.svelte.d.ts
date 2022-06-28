/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface FooterColumnProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default [{ text: '', href: '' }]
   */
  items?: [{ text: ""; href: "" }];

  /**
   * @default ''
   */
  title?: string;
}

export default class FooterColumn extends SvelteComponentTyped<
  FooterColumnProps,
  {},
  {}
> {}
