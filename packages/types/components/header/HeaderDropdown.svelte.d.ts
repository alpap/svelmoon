/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface HeaderDropdownProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default ''
   */
  text?: string;

  /**
   * @default [{ text: '', href: '' }]
   */
  items?: [{ text: ""; href: "" }];

  /**
   * @default false
   */
  squared?: boolean;
}

export default class HeaderDropdown extends SvelteComponentTyped<
  HeaderDropdownProps,
  { click: WindowEventMap["click"] },
  {}
> {}
