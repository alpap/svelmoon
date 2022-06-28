/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ButtonGroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  fluid?: boolean;

  /**
   * @default 0
   */
  selected?: number;

  /**
   * @default 'primary' | 'transparent' | 'light' | 'dark' | 'black' | 'link' | 'info' | 'success' | 'warning' | 'danger'
   */
  variant?:
    | "primary"
    | "transparent"
    | "light"
    | "dark"
    | "black"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "danger";

  /**
   * @default 'xs' | 'sm' | 'lg' | 'xl'
   */
  size?: "xs" | "sm" | "lg" | "xl";

  /**
   * @default 'circle' | 'square' | 'pill'
   */
  shape?: "circle" | "square" | "pill";

  /**
   * @default true
   */
  grow?: boolean;

  /**
   * @default true
   */
  animated?: boolean;

  /**
   * @default ['']
   */
  buttons?: [""];
}

export default class ButtonGroup extends SvelteComponentTyped<
  ButtonGroupProps,
  {},
  {}
> {}
