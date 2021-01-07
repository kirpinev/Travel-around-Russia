import Image from "next/image";
import { FC } from "react";

export const Places: FC = (): JSX.Element => (
  <section className="places">
    <div className="places__wrapper">
      <div className="place place_margin-bottom_kosa">
        <h2 className="place__title">Куршская коса</h2>
        <div className="place__website">
          <p className="place__url-heading" lang="en">
            URL
          </p>
          <a
            href="http://park-kosa.ru/"
            className="place__url place__url_hovered"
            target="_blank"
            rel="noopener"
          >
            park-kosa.ru
          </a>
        </div>
        <Image
          src="/images/curonian-spit.jpg"
          alt="Берег Куршской косы"
          className="place__image"
          width="460"
          height="460"
        />
        <div className="place__paragraph-wrapper">
          <p className="place__paragraph">
            Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных
            горизонта — спокойного Куршского залива с одной стороны и
            подёрнутого рябью волн Балтийского моря с другой. Уникальная
            природная зона на&nbsp;краю российского анклава.
          </p>
          <p className="place__paragraph">
            На этом Калининградская область не заканчивается.
            Для&nbsp;путешественника и исследователя&nbsp;там же
            по&nbsp;соседству — самая западная точка России, Балтийская коса, —
            и&nbsp;немецкое наследие россыпи небольших приморских городов.
            Атмосфера здешних мест исключает суету, окуная в&nbsp;спокойствие
            природы и запах стального, прохладного моря.
          </p>
        </div>
      </div>
      <div className="place place_margin-bottom_kolski">
        <h2 className="place__title">Кольский</h2>
        <div className="place__website">
          <p className="place__url-heading" lang="en">
            URL
          </p>
          <a
            href="#"
            className="place__url place__url_hovered"
            target="_blank"
            rel="noopener"
          >
            National Geographic
          </a>
        </div>
        <Image
          src="/images/kola-peninsula.jpg"
          alt="Берег Кольского полуострова"
          className="place__image"
          width="460"
          height="460"
        />
        <div className="place__paragraph-wrapper">
          <p className="place__paragraph">
            Почти весь полуостров находится за Полярным кругом. Саамская тундра,
            от которой на юг — тайга, а&nbsp;на север — Ледовитый океан,
            прикидывающийся Баренцевым морем.
          </p>
          <p className="place__paragraph">
            Возможно, вы смотрели Звягинцева и&nbsp;даже слышали историю
            арктического фестиваля в Териберке. Возможно, слово «Хибины» не
            осталось под снегом школьных воспоминаний об уроках географии.
            Возможно, вы не интересовались пронизывающей земную кору
            сверхглубокой скважиной, а от апатитов вас давно накрывает апатия.
            Но&nbsp;ваша мечта увидеть северное сияние начинает сбываться с
            билетом в&nbsp;Мурманск.
          </p>
        </div>
      </div>
      <div className="place place_margin-bottom_altay">
        <h2 className="place__title">Алтай</h2>
        <div className="place__website">
          <p className="place__url-heading" lang="en">
            URL
          </p>
          <a
            href="#"
            target="_blank"
            className="place__url place__url_hovered"
            rel="noopener"
          >
            Facebook
          </a>
        </div>
        <Image
          src="/images/forest.jpg"
          alt="Вид на лес с крыльца"
          className="place__image"
          width="460"
          height="460"
        />
        <div className="place__paragraph-wrapper">
          <p className="place__paragraph">
            Алтай — одно из красивейших мест в&nbsp;России. В первую очередь
            из-за гор: если&nbsp;ехать вдоль хребта, вы увидите склоны,
            усыпанные соснами, горные реки и озёра. А&nbsp;если вы откроете в
            автомобиле окна, сможете познакомиться с&nbsp;невидимым чудом
            здешних мест — горным воздухом.
          </p>
          <p className="place__paragraph">
            Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так
            вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая
            бродят лоси, над хребтами летают орлы, а&nbsp;на равнинах пасутся
            косули. И&nbsp;знаменитые манулы — тоже обитатели Алтайского края.
          </p>
        </div>
      </div>
      <div className="place place_margin-bottom_baikal">
        <h2 className="place__title">Зимний Байкал</h2>
        <div className="place__website">
          <p className="place__url-heading" lang="en">
            URL
          </p>
          <a
            href="https://vk.com/baikalmile"
            target="_blank"
            className="place__url place__url_hovered"
            rel="noopener"
          >
            https://vk.com/baikalmile
          </a>
        </div>
        <Image
          src="/images/baikal-ice.jpg"
          alt="Замерзшее озеро Байкал"
          className="place__image"
          width="460"
          height="460"
        />
        <div className="place__paragraph-wrapper">
          <p className="place__paragraph">
            Всем известен Байкал как крупнейшее озеро в мире. Многие также
            знают, что это самый большой источник пресной воды и&nbsp;одно из
            красивейших мест в&nbsp;России.
          </p>
          <p className="place__paragraph">
            Конечно, это всё так. Но Байкал ещё идеальное место для соревнований
            по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к
            мотоциклу,&nbsp;и&nbsp;тандем старается развить как можно бóльшую
            скорость на льду. В марте 2019 года на фестивале «Байкальская миля»
            был поставлен мировой рекорд — 197.011 км/ч.
          </p>
        </div>
      </div>
      <div className="place place_margin-bottom_karel">
        <h2 className="place__title">Карелия</h2>
        <div className="place__website">
          <p className="place__url-heading" lang="en">
            URL
          </p>
          <a
            href="http://vodlozero.ru/"
            target="_blank"
            className="place__url place__url_hovered"
            rel="noopener"
          >
            http://vodlozero.ru/
          </a>
        </div>
        <Image
          src="/images/vodlozero.jpg"
          alt="Водлозеро на закате"
          className="place__image"
          width="460"
          height="460"
        />
        <div className="place__paragraph-wrapper">
          <p className="place__paragraph">
            Сибирь заканчивается не на Урале, а&nbsp;в&nbsp;Карелии: образующая
            тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь
            она вымахивает на 30 метров — леса карельских национальных парков
            из-за непроходимых болот никогда не знали топора. Некоторым соснам
            уже больше чем полтысячелетия. Прикоснитесь к живому существу,
            видевшему солнце раньше, чем увидал его Иван Грозный. В девственном
            лесу на сотню километров не встретишь тропы. А на редких тропинках
            деревья в паре метров от земли помечены медвежьими когтями. Чтобы
            все знали, кто тут хозяин.
          </p>
        </div>
      </div>
    </div>
  </section>
);
