import { FC } from "react";

export const Video: FC = (): JSX.Element => (
  <section className="video">
    <div className="video__wrapper">
      <h2 className="content-title content-title_line-height_medium content-title_margin-bottom_small">
        В глубины Земли и в дальний космос
      </h2>
      <p className="content-subtitle">
        Видео от студии Stereotactic о&nbsp;местах в России, где ведутся
        фундаментальные исследования
      </p>
      <div className="video__container">
        <a
          href="https://vimeo.com/81106671"
          target="_blank"
          className="video__link"
          rel="noopener"
        >
          <div className="video__item video__item_hovered video__item_theme_kamchatka">
            <div className="video__icon video__icon_play video__icon_margin_kamchatka" />
            <p className="video__duration">6:30</p>
            <h2 className="video__title" lang="en">
              Colors of Kamchatka
            </h2>
            <p className="video__subtitle" lang="en">
              Director: Pavel Karykhalin
            </p>
          </div>
        </a>
        <a
          href="https://vimeo.com/290675450"
          target="_blank"
          className="video__link"
          rel="noopener"
        >
          <div className="video__item video__item_hovered video__item_theme_observaroty">
            <div className="video__icon video__icon_play video__icon_margin_observatory" />
            <p className="video__duration">24:45</p>
            <h2 className="video__title">
              Обсерватория | <span lang="en">Observatory</span>
            </h2>
            <p className="video__subtitle" lang="en">
              Director: Alexander Khudokon
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
);
