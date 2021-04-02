import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type BaseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type SubMenu = {
  text: React.ReactNode;
  link: string;
};

export type Menu<T extends number = number> = SubMenu & {
  sub?: (MenuDecrementCounter extends Record<T, infer C> ? C : SubMenu)[];
};

interface MenuDecrementCounter {
  0: undefined;
  1: Menu<0>;
  2: Menu<1>;
  3: Menu<2>;
  4: Menu<3>;
}

export interface Menus extends Array<Menu<2>> {}
