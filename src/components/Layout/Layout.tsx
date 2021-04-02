import React from "react";
import Head from "../Head";
import { isSSR } from "../../helpers/isSSR";

type Props = {
  title?: string;
  styles?: Partial<CSSStyleDeclaration>;
};

const Layout: React.FC<Props> = ({
  styles = { backgrounColor: "#fff", color: "#555" },
  title = "Brajata Indotrading",
  children,
}) => {
  if (!isSSR) {
    for (const style in styles) {
      document.body.style[style] = styles[style];
    }
  }

  return (
    <>
      <Head title={title} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
