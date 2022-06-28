/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface FooterSocialProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class FooterSocial extends SvelteComponentTyped<
  FooterSocialProps,
  {},
  { default: {} }
> {}
