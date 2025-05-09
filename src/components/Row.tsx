import { ReactNode } from "react";
interface IRow {
  children: ReactNode;
}
export const Row = ({ children }: IRow) => {
  return <div>{children}</div>;
};
