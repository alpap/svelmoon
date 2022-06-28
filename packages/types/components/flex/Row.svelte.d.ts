/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface RowProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default true
   */
  space?: boolean;

  /**
   * @default true
   */
  wrap?: boolean;

  /**
   * @default 'stretch' | 'start' | 'center' | 'end' | 'baseline'
   */
  align?: "stretch" | "start" | "center" | "end" | "baseline";

  /**
   * @default 'start' | 'center' | 'end' | 'space-between' | 'around' | 'evenly'
   */
  justify?: "start" | "center" | "end" | "space-between" | "around" | "evenly";
}

export default class Row extends SvelteComponentTyped<
  RowProps,
  {},
  { default: {} }
> {}
