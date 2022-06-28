/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ListProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["ol"]> {
  /**
   * @default false
   */
  numbered?: boolean;

  /**
   * @default false
   */
  plain?: boolean;

  /**
   * @default false
   */
  detailed?: boolean;

  /**
   * @default ''
   */
  title?: string;

  /**
   * @default []
   */
  values?: [];
}

export default class List extends SvelteComponentTyped<ListProps, {}, {}> {}
