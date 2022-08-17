import * as React from "react";
import { ResumeTemplate } from "../templates/resume";
import "./app.css";

export default function ResumePage() {
  return (
    <ResumeTemplate
      translations={{
        about: {
          title: "О себе",
          description: `
            Frontend Developer с опытом разработки мобильных приложений на React Native.
            Увлекаюсь новыми языками программирования (из последних Rust, Haskell, Reason).
            Изучаю Computer Science. Помогаю новичкам и пытаюсь писать статьи. В дальнейшем хотел бы попробовать вести курсы.
          `,
        },
        skils: {
          lang: "Языки",
          tech: "Технологии",
          title: "Скилы",
        },
        projects: "Демо проекты",
        name: "Шеломанов Дмитрий",
        expirience: "Опыт работы",
        responsibility: "Обязанности",
        achievements: "Достижения",
        techonologies: "Используемые технологии",
      }}
      about={[
        {
          company: "Explory (совместный стартап)",
          position: "",
          responsibility: ["Разработка приложения на React Native"],
          achievements: [
            "Написано большое приожения (порядка 80 экранов)",
            "Написано много интересных решений внутри приложения",
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
      projects={[
        {
          link: "https://dmitryshelomanov.github.io/reason-game-of-life/",
          name: "Game of Live",
          description: `Классическая игра жизнь. Написана на языке программирования Reason`,
        },
        {
          link: "https://dmitryshelomanov.github.io/tower_of_hanoi/",
          name: "Towers of Hanoi",
          description: `Было интересно рассмотреть этот алгоритм. Задачу можно решить с помощью бота или самому (перетягивая кольца)`,
        },
        {
          link: "https://dmitryshelomanov.github.io/snake/",
          name: "Snake AI",
          description: `
            В процессе разработке проекта я научился работать с графами.
            В этом проекте можно увидеть визуализацию алгоритмов поиска пути (A*, Дейкстра и другие).
            Визуализация в игровой форме - классическая змейка, так же можно поиграть против ботов
          `,
        },
        {
          link: "https://github.com/mobileFight",
          name: "Мобитва next",
          description: `Зародыш клона очень старой игры. Пишется на React + NodeJs.
          Очень интересно реализовать систему квестов и систему боя (Pull requests are welcome)`,
        },
        {
          link: "https://dmitryshelomanov.github.io/music-player/",
          name: "Музыкальный плеер",
          description: `Простенький плеер с визуализацией`,
        },
      ]}
    />
  );
}
