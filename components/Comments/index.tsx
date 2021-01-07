import Image from "next/image";
import { FC } from "react";

export const Comments: FC = (): JSX.Element => (
  <section className="comments">
    <div className="comments__wrapper">
      <h2 className="content-title content-title_line-height_small content-title_margin-bottom_medium">
        Фотографы, снимающие Россию
      </h2>
      <p className="content-subtitle">
        Природа и люди вдохновили их работы, удостоенные наград на международных
        конкурсах
      </p>
      <div className="comments__container">
        <div className="comment">
          <Image
            src="/images/viktor.jpg"
            alt="Фотография Виктора Лягушкина"
            className="comment__image"
            width="97"
            height="97"
          />
          <p className="comment__quote">
            «Если вам кажется, что в России ничего не происходит, то просто
            выгляньте “наружу”…»
          </p>
          <p className="comment__author">Виктор Лягушкин</p>
        </div>
        <div className="comment">
          <Image
            src="/images/ivan.jpg"
            alt="Фотография Ивана Хафизова"
            className="comment__image"
            width="97"
            height="97"
          />
          <p className="comment__quote">
            «Если в город едут туристы — неважно за чем они туда едут: за
            шамбалой или фрески Рублева искать, или на родину Тарковского —
            туристы обеспечивают любой город молодёжью, рабочими местами и в
            конечном счёте наполняют его жизнью.»
          </p>
          <p className="comment__author">Иван Хафизов</p>
        </div>
        <div className="comment">
          <Image
            src="/images/sergey.jpg"
            alt="Фотография Сергея Максимишина"
            className="comment__image"
            width="97"
            height="97"
          />
          <p className="comment__quote">
            «Ты приезжаешь, и люди рассказывают тебе, как им плохо. А когда ты
            покажешь, как им плохо, то ты сволочь и всё очернил.»
          </p>
          <p className="comment__author">Сергей Максимишин</p>
        </div>
      </div>
    </div>
  </section>
);
