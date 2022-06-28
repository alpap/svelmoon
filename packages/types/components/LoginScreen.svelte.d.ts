/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface LoginScreenProps {
  /**
   * @default ''
   */
  image?: string;
}

export default class LoginScreen extends SvelteComponentTyped<
  LoginScreenProps,
  {},
  { default: {} }
> {}
