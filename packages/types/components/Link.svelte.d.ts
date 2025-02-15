/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface LinkProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default ''
   */
  href?: string;

  /**
   * @default false
   */
  underline?: boolean;

  /**
   * @default false
   */
  square?: boolean;

  /**
   * @default false
   */
  crisscross?: boolean;

  /**
   * @default false
   */
  center?: boolean;

  /**
   * @default false
   */
  ltr?: boolean;

  /**
   * @default ''
   */
  text?: string;

  /**
   * SvelteKit attribute to enable data prefetching
   * if a link is hovered over or touched on mobile.
   * @see https://kit.svelte.dev/docs/a-options#sveltekit-prefetch
   * @default false
   */
  "sveltekit:prefetch"?: boolean;

  /**
   * SvelteKit attribute to trigger a full page
   * reload after the link is clicked.
   * @see https://kit.svelte.dev/docs/a-options#sveltekit-reload
   * @default false
   */
  "sveltekit:reload"?: boolean;

  /**
   * SvelteKit attribute to prevent scrolling
   * after the link is clicked.
   * @see https://kit.svelte.dev/docs/a-options#sveltekit-noscroll
   * @default false
   */
  "sveltekit:noscroll"?: boolean;
}

export default class Link extends SvelteComponentTyped<LinkProps, {}, {}> {}
