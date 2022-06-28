/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface FigureProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["figure"]> {
  /**
   * @default ''
   */
  src?: string;

  /**
   * @default ''
   */
  alt?: string;

  /**
   * @default ''
   */
  caption?: string;

  /**
   * @default ''
   */
  height?: string;

  /**
   * @default ''
   */
  width?: string;

  /**
   * @default false
   */
  squared?: boolean;
}

export default class Figure extends SvelteComponentTyped<FigureProps, {}, {}> {}
