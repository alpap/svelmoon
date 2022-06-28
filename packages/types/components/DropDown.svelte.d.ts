/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface DropDownProps {
  /**
   * @default false
   */
  transparent?: boolean;

  /**
   * @default false
   */
  light?: boolean;

  /**
   * @default false
   */
  dark?: boolean;

  /**
   * @default false
   */
  black?: boolean;

  /**
   * @default false
   */
  primary?: boolean;

  /**
   * @default false
   */
  link?: boolean;

  /**
   * @default false
   */
  info?: boolean;

  /**
   * @default false
   */
  success?: boolean;

  /**
   * @default false
   */
  warning?: boolean;

  /**
   * @default false
   */
  danger?: boolean;

  /**
   * @default false
   */
  outline?: boolean;

  /**
   * @default false
   */
  xsmall?: boolean;

  /**
   * @default false
   */
  small?: boolean;

  /**
   * @default false
   */
  large?: boolean;

  /**
   * @default false
   */
  xlarge?: boolean;

  /**
   * @default false
   */
  squared?: boolean;

  /**
   * @default false
   */
  animated?: boolean;

  /**
   * @default false
   */
  fluid?: boolean;

  /**
   * @default [{ text: '', href: '' }] | ['']
   */
  values?: [{ text: ""; href: "" }] | [""];

  /**
   * @default ''
   */
  selected?: string;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default ''
   */
  text?: string;
}

export default class DropDown extends SvelteComponentTyped<
  DropDownProps,
  {},
  {}
> {}
