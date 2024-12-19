import type { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";

export type HTMLProps<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;
export type HTMLBaseProps = HTMLProps<HTMLElement>;
export type HTMLAnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
