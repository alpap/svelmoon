/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface DividerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  vertical?: boolean;
}

export default class Divider extends SvelteComponentTyped<
  DividerProps,
  {},
  {}
> {}
