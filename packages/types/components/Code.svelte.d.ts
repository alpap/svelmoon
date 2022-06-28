/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CodeProps {
  /**
   * @default ''
   */
  language?: string;

  /**
   * @default false
   */
  fluid?: boolean;
}

export default class Code extends SvelteComponentTyped<
  CodeProps,
  {},
  { default: {} }
> {}
