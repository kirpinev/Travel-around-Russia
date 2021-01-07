import Image from "next/image";
import { FC } from "react";

export const Lead: FC = (): JSX.Element => (
  <section className="lead">
    <div className="lead__wrapper">
      <h1 className="lead__title">Путешествия по&nbsp;России</h1>
      <p className="lead__subtitle">
        Настоящая страна не в выпусках новостей, а здесь.
      </p>
      <Image
        src="/images/lead-image.jpg"
        alt="Фотография спящего человека в плацкарте"
        className="lead__image"
        width="1968"
        height="1108"
      />
      <p className="lead__caption">Ваша полка — верхняя</p>
    </div>
  </section>
);
