import { FC } from "react";

import { IProps } from "./types";

export const Page: FC<IProps> = ({ children }): JSX.Element => (
  <div className="page">{children}</div>
);
