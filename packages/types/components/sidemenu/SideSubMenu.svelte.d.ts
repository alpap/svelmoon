/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SideSubMenuProps {
  /**
   * @default ''
   */
  title?: string;

  /**
   * @default ''
   */
  icon?: string;

  /**
   * @default [{ href: '', text: '' }]
   */
  values?: [{ href: ""; text: "" }];

  /**
   * @default false
   */
  fluid?: boolean;

  /**
   * @default false
   */
  squared?: boolean;

  /**
   * @default ''
   */
  href?: string;
}

export default class SideSubMenu extends SvelteComponentTyped<
  SideSubMenuProps,
  {},
  {}
> {}
