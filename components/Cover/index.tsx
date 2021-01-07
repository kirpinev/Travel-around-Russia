import { FC } from "react";

export const Cover: FC = (): JSX.Element => (
  <section className="cover">
    <div className="cover__wrapper cover__wrapper_hovered">
      <a
        href="https://stampsy.com/na-elektrichkakh-do-baikala"
        target="_blank"
        className="cover__link cover__link_hovered"
      >
        <h2 className="cover__title">До Байкала «на&nbsp;собаках»</h2>
      </a>
      <p className="cover__subtitle">
        По мотивам учебной темы о Транссибе и<span lang="en">iframes</span>—
        путешествие от столицы до Байкала на электричках.
      </p>
    </div>
  </section>
);
