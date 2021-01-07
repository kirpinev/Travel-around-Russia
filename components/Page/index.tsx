import Head from "next/head";
import { FC } from "react";

import { IProps } from "./types";

export const Page: FC<IProps> = ({ children }): JSX.Element => (
  <div className="page">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="author" content="Игорь Кирпинев" />
      <meta name="description" content="Интересные места России" />
      <title>Интересные места России</title>
    </Head>
    {children}
  </div>
);
