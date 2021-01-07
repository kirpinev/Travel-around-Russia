import { FC } from "react";

export const Intro: FC = (): JSX.Element => (
  <section className="intro">
    <div className="intro__wrapper">
      <h2 className="intro__title">Чего мы там не&nbsp;видели?</h2>

      <div className="intro__content-row">
        <p className="intro__quote">
          По опросам ВЦИОМ, 95% россиян мечтают&nbsp;куда-нибудь поехать,
          но&nbsp;только 36% планируют провести отпуск в родной стране. Мол,
          чего мы тут, дома, не видели? На самом деле, Россия — это целая
          вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами
          плато Путорана. А ещё увидеть все эти красоты можно без&nbsp;миллионов
          на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера
          Башмакова — смелая молодая мама, которая взяла в охапку троих детей,
          усадила их в свою «Ладу» и&nbsp;проехала 20 тысяч километров по родной
          стране. Мы выбрали и&nbsp;описали некоторые интересные места,
          достойные вашего отпуска.
        </p>
      </div>
      <div className="intro__info-container">
        <p className="intro__info-paragraph">
          <span className="intro__span-accent">Часовых поясов</span> 11
        </p>
        <p className="intro__info-paragraph">
          <span className="intro__span-accent">
            Объектов природного наследия ЮНЕСКО
          </span>
          12
        </p>
        <p className="intro__info-paragraph">
          <span className="intro__span-accent">
            Объектов культурного наследия ЮНЕСКО
          </span>
          16
        </p>
        <p className="intro__info-paragraph">
          <span className="intro__span-accent">Природных заповедников</span> 105
        </p>
        <p className="intro__info-paragraph">
          <span className="intro__span-accent">Аэропортов</span> 241
        </p>
      </div>
    </div>
  </section>
);
