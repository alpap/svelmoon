/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface HeaderPositionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  left?: boolean;

  /**
   * @default false
   */
  right?: boolean;

  /**
   * @default false
   */
  center?: boolean;
}

export default class HeaderPosition extends SvelteComponentTyped<
  HeaderPositionProps,
  {},
  { default: {} }
> {}
