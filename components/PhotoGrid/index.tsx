import Image from "next/image";
import { FC } from "react";

export const PhotoGrid: FC = (): JSX.Element => (
  <section className="photo-grid">
    <div className="photo-grid__wrapper">
      <Image
        src="/images/train.jpg"
        alt="Вид из окна поезда"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/mountain.jpg"
        alt="Заснеженная верхушка горы"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/fog.jpg"
        alt="Собака на сене в туманном поле"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/sochi.jpg"
        alt="Туманный лес"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/ice.jpg"
        alt="Колесо машины на льду"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/baikal.jpg"
        alt="Берег Байкала"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/elbrus.jpg"
        alt="Эльбрус в облаках"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/breakwater.jpg"
        alt="Волнорезы на берегу"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/kamchatka.jpg"
        alt="Мутновская сопка"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/kamchatka2.jpg"
        alt="Корякская Сопка"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/baikal2.jpg"
        alt="Берег Байкала"
        className="photo-grid__item"
        width="284"
        height="188"
      />
      <Image
        src="/images/ergaki.jpg"
        alt="Природный парк Ергаки"
        className="photo-grid__item"
        width="284"
        height="188"
      />
    </div>
  </section>
);
