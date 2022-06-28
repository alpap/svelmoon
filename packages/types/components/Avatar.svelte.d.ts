/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AvatarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default ''
   */
  src?: string;

  /**
   * @default 'avatar'
   */
  alt?: string;

  /**
   * @default ''
   */
  text?: string;

  /**
   * @default 'xs' | 'sm' | 'lg' | 'xl'
   */
  size?: "xs" | "sm" | "lg" | "xl";
}

export default class Avatar extends SvelteComponentTyped<AvatarProps, {}, {}> {}
