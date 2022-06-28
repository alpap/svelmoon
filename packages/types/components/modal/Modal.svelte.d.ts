/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ModalProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  show?: boolean;

  /**
   * @default ''
   */
  title?: string;

  /**
   * @default false
   */
  dropdown?: boolean;

  /**
   * @default false
   */
  zoomin?: boolean;

  /**
   * @default false
   */
  zoomout?: boolean;

  /**
   * @default false
   */
  small?: boolean;

  /**
   * @default false
   */
  large?: boolean;
}

export default class Modal extends SvelteComponentTyped<
  ModalProps,
  {},
  { default: {} }
> {}
