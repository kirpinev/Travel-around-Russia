import { FC } from "react";

import { Logo } from "Icons";

export const Header: FC = (): JSX.Element => (
  <header className="header">
    <div className="header__wrapper">
      <Logo />
      <ul className="header__langs">
        <li>
          <a href="#" lang="en" className="header__lang header__lang_active">
            Ru
          </a>
        </li>
        <li>
          <a href="#" lang="en" className="header__lang">
            En
          </a>
        </li>
      </ul>
    </div>
  </header>
);
