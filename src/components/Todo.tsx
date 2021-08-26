import React, { FC, HTMLAttributes, ReactChild } from "react";

export interface TodoProps extends HTMLAttributes<HTMLDivElement> {
  /** default: 'create components' */
  children?: ReactChild;
}

/**
 * Add Custom Components
 */
export const Todo: FC<TodoProps> = ({ children }) => {
  return (
    <p>
      TODO(@maximousblk): {children || `TODO(@maximousblk): create components`}
    </p>
  );
};
