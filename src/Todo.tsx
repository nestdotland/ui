import React, { FC, HTMLAttributes, ReactChild } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'TODO(@maximousblk): create components' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Todo component. Neat!
 */
export const Todo: FC<Props> = ({ children }) => {
  return <div>{children || `TODO(@maximousblk): create components`}</div>;
};
