import { FC } from "react";

export const Footer: FC = (): JSX.Element => (
  <footer className="footer">
    <div className="footer__wrapper">
      <nav className="footer__nav">
        <ul className="footer__links">
          <li>
            <a href="#" className="footer__link">
              Карты
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Погода
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Расписание
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Календарь
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Путешествия
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">
        ©<time dateTime="2019"> 2020</time> Игорь Кирпинев
      </p>
    </div>
  </footer>
);
