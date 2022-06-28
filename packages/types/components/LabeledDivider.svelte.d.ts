/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface LabeledDividerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  vertical?: boolean;

  /**
   * @default ''
   */
  label?: string;
}

export default class LabeledDivider extends SvelteComponentTyped<
  LabeledDividerProps,
  {},
  {}
> {}
