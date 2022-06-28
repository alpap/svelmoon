/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ImageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["img"]> {
  /**
   * @default false
   */
  contain?: boolean;

  /**
   * @default false
   */
  cover?: boolean;

  /**
   * @default false
   */
  stretch?: boolean;

  /**
   * @default false
   */
  height?: boolean;

  /**
   * @default false
   */
  width?: boolean;

  /**
   * @default ''
   */
  src?: string;

  /**
   * @default ''
   */
  alt?: string;

  /**
   * @default true
   */
  lazy?: boolean;

  /**
   * @default false
   */
  squared?: boolean;
}

export default class Image extends SvelteComponentTyped<ImageProps, {}, {}> {}
