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
            Изучаю Computer Science.
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
          responsibility: [
            "Разработка приложения на React Native (iOS,android)",
          ],
          achievements: [
            "Написано большое приложения (порядка 80 экранов)",
            "Написано много сложных решений внутри приложения",
            "Написано решение для сокет апи",
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
          company: "Цум",
          position:
            "Senior Frontend Developer / Team lead (Сентябрь 2021 - по настоящее время)",
          responsibility: [
            {
              type: "paragraph",
              payload: `Участие в проектах tsum / tsum collect
                Разработка с нуля обоих проектов. Так же разработка внутренних сервисов.`,
            },
            {
              type: "paragraph",
              payload: `Как Team Lead:`,
            },
            {
              type: "list",
              payload: [
                "Управление командой из пяти человек (tsum) и двоих в (tsum collect).",
                "Дизайн команды.",
                "Перфоманс ревью.",
                "Помощь в усилении компетенций членов команды.",
                "Оценка и декомпозиция задач.",
                "Постановка и делегирование задач.",
              ],
            },
            {
              type: "paragraph",
              payload: `Как Tech Lead:`,
            },
            {
              type: "list",
              payload: [
                "Курирование процесса разработки основного продукта и внутренних.",
                "Написание не тривиальных фич.",
                "Составление задач по тех долгу и обновления кодовой базы.",
                "Внедрение новых практик и контроль текущих задач.",
                "Обеспечение отказоустойчивости и повышение метрик таких как FCP, FID и других.",
              ],
            },
          ],
          achievements: [],
          techonologies: [
            "HTML, CSS",
            "JS, ES6",
            "React, Styled Components, Effector/Redux, Typescript",
            "Webpack",
            "gRpc",
          ],
        },
        {
          company: "ООО БК «Олимп»",
          position:
            "Senior Frontend Developer (Июнь 2020 - Сентябрь 2021, 1 год 2 месяца)",
          responsibility: [
            `Разработка мобильной и десктопной версии сайта (2 полноценных проекта)`,
            `Разработка SDK для написания таких же букмекерских контор \n
          (Можно подключать логику и кастомизировать, не важно что отвечает за рендер)`,
            `Внедрил ревью кода и фиче бранчи`,
            `Внедрил тестирование (статическое)`,
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
          position:
            "Senior Frontend Developer (Май 2019 - Август 2020, 1 год 4 месяца)",
          responsibility: [
            `Покрытие тестами ui кита`,
            `Покрытие тестами платформу (dialog-web-platform)`,
            `Разработка модулей для платформы`,
            `Участие в разработке архитектуры`,
          ],
          achievements: [
            "Разработан модуль поиска групп и пользователей (локально плюс глобально)",
            "Разработана система настроек",
            "Созданы компоненты для виртуализации и мульти селекта",
            "Создана полно-экранная галлерея",
            "Внедрены решения по архитектуре которые ускоряют работу сервиса и упрощают взаимодействия ui с браузерной БД",
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
          position:
            "Старший разработчик (Февраль 2018 - Май 2019, 1 год 3 месяца)",
          responsibility: [
            `Написание приложения по поиску работы ios & android (React native)`,
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
          position: "Web developer (Июль 2017 - Февраль 2018, 8 месяцев)",
          responsibility: [
            `Верстка лендингов`,
            `Разработка spa на vue js`,
            `Поддержка существующих проектов`,
            `Разработка платформы для обработки баннеров (react + свой бекенд на NodeJs)`,
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
          name: "Game of Live 🎲",
          description: `Классическая игра жизнь. Написана на языке программирования Reason`,
        },
        {
          link: "https://dmitryshelomanov.github.io/tower_of_hanoi/",
          name: "Towers of Hanoi 👜",
          description: `Было интересно рассмотреть этот алгоритм. Задачу можно решить с помощью бота или самому (перетягивая кольца)`,
        },
        {
          link: "https://dmitryshelomanov.github.io/snake/",
          name: "Snake AI 🐍",
          description: `
            В процессе разработке проекта я научился работать с графами.
            В этом проекте можно увидеть визуализацию алгоритмов поиска пути (A*, Дейкстра и другие).
            Визуализация в игровой форме - классическая змейка, так же можно поиграть против ботов
          `,
        },
        {
          link: "https://github.com/mobileFight",
          name: "Мобитва next 🎮",
          description: `Зародыш клона очень старой игры. Пишется на React + NodeJs.
          Очень интересно реализовать систему квестов и систему боя (Pull requests are welcome)`,
        },
        {
          link: "https://dmitryshelomanov.github.io/music-player/",
          name: "Музыкальный плеер 🎹",
          description: `Простенький плеер с визуализацией`,
        },
      ]}
    />
  );
}
