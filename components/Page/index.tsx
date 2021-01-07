import Head from "next/head";
import { FC } from "react";

import { IProps } from "./types";

const title = "Интересные места России";
const description = "Настоящая страна не в выпусках новостей, а здесь.";
const image = "/images/compas.webp";

export const Page: FC<IProps> = ({ children }): JSX.Element => (
  <div className="page">
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="author" content="Игорь Кирпинев" />
      <meta name="description" content={title} />
      {Boolean(description) && (
        <meta property="og:description" content={description} />
      )}
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
      {Boolean(description) && (
        <meta name="description" content={description} />
      )}
      {Boolean(description) && (
        <meta property="twitter:description" content={description} />
      )}
      {Boolean(image) && <meta property="og:image" content={image} />}
    </Head>
    {children}
  </div>
);
