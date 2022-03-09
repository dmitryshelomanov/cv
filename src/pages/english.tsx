import * as React from "react";
import { ResumeTemplate } from "../templates/resume";

export default function EnglishPage() {
  return (
    <ResumeTemplate
      translations={{
        about: {
          title: "About me",
          description: `
            Frontend Developer с опытом разработки мобильных приложений на React Native.
            Увлекаюсь новыми языками программирования (из последних Rust, Haskell, Reason).
            Изучаю Computer Science. Помогаю новичкам и пытаюсь писать статьи. В дальнейшем хотел бы попробовать вести курсы.
          `,
        },
        skils: {
          lang: "Languages",
          tech: "Technologies",
          title: "Skills",
        },
        projects: "Pet projects",
        name: "Shelomanov Dmitry",
        expirience: "Work expirience",
        responsibility: "Responsibility",
        achievements: "Achievements",
        techonologies: "Technologies used",
      }}
      about={[
        {
          company: "Explory (совместный стартап)",
          position: "",
          responsibility: ["Разработка приложения на React Native"],
          achievements: [
            "Написано большое приожения (порядка 80 экранов)",
            "Написано много интенесных решений внутри приложения",
            "Написано решение для сокетного апи",
            "Выступал в роли лида в мобильной разработке",
          ],
          techonologies: [
            "React Native, Styled-components",
            "Effector",
            "Typescript",
          ],
        },
      ]}
      expirience={[
        {
          company: "ООО БК «Олимп»",
          position:
            "Senior Frontend Developer (Июнь 2020 - по настоящее время)",
          responsibility: [
            `Разработка мобильной и десктопной версии сайта`,
            `Разработка SDK для написания таких же букмекерских контор \n
          (Можно подключать логику и кастомизировать, не важно что отвечает за рендер)`,
            `Внедрил ревью кода и фиче бранчи`,
            `Внедрил тестирование`,
          ],
          achievements: [
            "Разработан гибкий SDK",
            "Разработана система компонентов",
            "Переписал старый код с использованием SDK",
            "Успешно внедрены новые архитектурные решения",
          ],
          techonologies: [
            "HTML, CSS",
            "JS, ES6",
            "React, Styled Components, Effector, Typescript",
            "Webpack",
          ],
        },
        {
          company: "ООО «Диалог»",
          position: "Senior Frontend Developer (Май 2019 - Август 2020)",
          responsibility: [
            `Покрытие тестами ui кита`,
            `Покрытие тестами платформу (dialog-web-platform)`,
            `Разработка модулей для платформы`,
            `Участие в разработке архитектуры`,
            "Участие в ревью кода",
          ],
          achievements: [
            "Разработан модуль поиска групп и пользователей (локально плюс глобально)",
            "Разработана система настроек",
            "Созданы компоненты для виртуализации и мульти селекта",
            "Внедрен просмотрщик изображений",
            "Внедрены решения по архитектуре (работа с браузерной бд плюс локальный стейт)",
          ],
          techonologies: [
            "HTML, CSS",
            "JS, ES6",
            "React, AstroTurf, RxJs, RxDb, Flow, Testing-library",
            "Webpack, Lerna",
          ],
        },
        {
          company: "Unitemp",
          position: "Старший разработчик (Февраль 2018 - Май 2019)",
          responsibility: [
            `Написание кроссплатформенного приложения на React native`,
            `Разработка архитектуры с нуля для приложения`,
            `Поиск багов и форк сторонних библиотек`,
            `Написание собственных библиотек в open source`,
          ],
          achievements: [],
          techonologies: [
            "HTML, CSS",
            "JS, ES6",
            "React Native",
            "redux, redux-thunk, recompose, нативные библиотеки",
          ],
        },
        {
          company: `ООО "Мир Идей"`,
          position: "Web developer (Июль 2017 - Февраль 2018)",
          responsibility: [
            `Верстка лендингов`,
            `Разработка spa на vue js`,
            `Поддержка существующих проектов`,
            `Разработка платформы для обработки баннеров`,
          ],
          achievements: [],
          techonologies: [
            "HTML, CSS",
            "JS, ES6, PHP",
            "Vue, React, larave",
            "Webpack, redux, redux-thunk",
          ],
        },
      ]}
      projects={[]}
    />
  );
}
