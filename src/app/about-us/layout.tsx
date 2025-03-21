import { ReactNode } from "react";

const Layout = ({
  children
}: {
  children: Readonly<ReactNode>
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout;
