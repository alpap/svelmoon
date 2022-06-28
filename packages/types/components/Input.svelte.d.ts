/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface InputProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["input"]> {
  /**
   * @default 'xs' | 'sm' | 'lg' | 'xl'
   */
  size?: "xs" | "sm" | "lg" | "xl";

  /**
   * @default false
   */
  fluid?: boolean;

  /**
   * @default false
   */
  grow?: boolean;

  /**
   * @default 100
   */
  max?: number;

  /**
   * @default 0
   */
  min?: number;

  /**
   * @default 'square' | 'pill'
   */
  shape?: string;

  /**
   * @default ''
   */
  value?: string;

  /**
   * @default true
   */
  valid?: boolean;

  /**
   * @default false
   */
  required?: boolean;

  /**
   * @default ''
   */
  label?: string;
}

export default class Input extends SvelteComponentTyped<InputProps, {}, {}> {
  id: undefined;
}
