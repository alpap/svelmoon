/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface HeroProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  fullscreen?: boolean;

  /**
   * @default false
   */
  parallax?: boolean;

  /**
   * @default ''
   */
  src?: string;

  /**
   * @default 'auto' | 'length' | 'cover' | 'contain' | 'initial' | 'inherit'
   */
  fit?: "auto" | "length" | "cover" | "contain" | "initial" | "inherit";
}

export default class Hero extends SvelteComponentTyped<
  HeroProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
