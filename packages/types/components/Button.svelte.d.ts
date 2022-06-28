/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ButtonProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * @default 'primary' | 'transparent' | 'light' | 'dark' | 'black' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'outline' | ''
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
    | "danger"
    | "outline"
    | "";

  /**
   * @default 'xs' | 'sm' | 'lg' | 'xl'
   */
  size?: "xs" | "sm" | "lg" | "xl";

  /**
   * @default 'circle' | 'square' | 'pill'
   */
  shape?: "circle" | "square" | "pill";

  /**
   * @default false
   */
  loading?: boolean;

  /**
   * @default true
   */
  grow?: boolean;

  /**
   * @default true
   */
  animated?: boolean;

  /**
   * @default false
   */
  fluid?: boolean;

  /**
   * @default false
   */
  right?: boolean;

  /**
   * @default false
   */
  left?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default ''
   */
  text?: string;
}

export default class Button extends SvelteComponentTyped<ButtonProps, {}, {}> {}
