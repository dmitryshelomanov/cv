import * as React from "react";
import { ResumeTemplate } from "../templates/resume";
import "./app.css";

const scheme = {
  translations: {
    about: {
      title: "About me",
      description: `
        Frontend Developer with experience in mobile app development with React Native.
        I am fond of new programming languages ​​(from the latest Rust, Haskell, Reason).
        I study computer science. Helping newbies and trying to write articles. I would like to try teaching in the future.
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
  },
  about: [
    {
      company: "Explory (startup)",
      position: "",
      responsibility: ["Created app with React Native"],
      achievements: [
        "I've developed a mobile application with at least 80 screens",
        "Written many interesting solutions inside the application",
        "Created own socket transport",
        "As a new experience I had a lot of responsibility of the result of my team",
      ],
      techonologies: [
        "React Native, Styled-components",
        "Effector",
        "Typescript",
      ],
    },
  ],
  expirience: [
    {
      company: "Olimp Bet",
      position: "Senior Frontend Developer (June 2020 - from now)",
      responsibility: [
        `Development mobile and desktop version of web site`,
        `Developlent Bets SDK \n
      (You can connect logic to own renderer and customize it)`,
        `Implemented code review and feature brunches`,
        `Implemented unit testing`,
      ],
      achievements: [
        "Created configurable SDK",
        "Created design-system",
        "Refactored old code with next sdk",
        "Successfully implemented new architectural solutions",
      ],
      techonologies: [
        "HTML, CSS",
        "JS, ES6",
        "React, Styled Components, Effector, Typescript",
        "Webpack",
      ],
    },
    {
      company: "Dialog (Chat messanger)",
      position: "Senior Frontend Developer (May 2019 - August 2020)",
      responsibility: [
        `UI test coverage`,
        `Dialog-web-platform test coverage`,
        `Development platform's modules`,
        `Participation in the development of architecture`,
        "Participation in code reviews",
      ],
      achievements: [
        "Search module developed for groups and users (locally and globally)",
        "Created settings system",
        "Created virtualized components",
        "Implemented images preview",
        "Implemented architecture",
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
      position: "Senior Frontend Developer (Feb 2018 - May 2019)",
      responsibility: [
        `Development cross-platform application with React native`,
        `Designing an architecture from scratch for an application`,
        `Support for third party libraries`,
        `Development own open source libraries`,
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
      company: `World of Ideas`,
      position: "Web developer (July 2017 - Feb 2018)",
      responsibility: [
        `Landing page layout`,
        `Development SPA with VueJS`,
        `Support current projects`,
        `Development a banner processing platform`,
      ],
      achievements: [],
      techonologies: [
        "HTML, CSS",
        "JS, ES6, PHP",
        "Vue, React, larave",
        "Webpack, redux, redux-thunk",
      ],
    },
  ],
  projects: [
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
      name: "Mobile fight next 🎮",
      description: `Зародыш клона очень старой игры. Пишется на React + NodeJs.
      Очень интересно реализовать систему квестов и систему боя (Pull requests are welcome)`,
    },
    {
      link: "https://dmitryshelomanov.github.io/music-player/",
      name: "Music player 🎹",
      description: `Простенький плеер с визуализацией`,
    },
  ],
};

export default function EnglishPage() {
  return <ResumeTemplate {...scheme} />;
}
