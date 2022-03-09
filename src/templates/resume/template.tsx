import * as React from "react";
import cn from "classnames";
import avatar from "../../assets/avatar.jpg";
import * as styles from "./style.module.css";

type Props = {
  expirience: {
    company: string;
    position: string;
    responsibility: string[];
    achievements: string[];
    techonologies: string[];
  }[];
  about: {
    company: string;
    position: string;
    responsibility: string[];
    achievements: string[];
    techonologies: string[];
  }[];
  projects: {
    link: string;
    name: string;
    description: string;
  }[];
  translations: {
    skils: {
      title: string;
      lang: string;
      tech: string;
    };
    about: {
      title: string;
      description: string;
    };
    projects: string;
    name: string;
    expirience: string;
    responsibility: string;
    achievements: string;
    techonologies: string;
  };
};

export function ResumeTemplate({
  expirience,
  translations,
  about,
  projects,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.bio}>
        <img src={avatar} draggable="false" />
        <div className={styles.position}>
          <h1>{translations.name}</h1>
          <p>Frontend engineer</p>
          <div className={styles.social}>
            <a href="https://vk.com/dmitryshelomanov" target="_blank">
              vk
            </a>
            <a href="malito:dmitryshelomanov@mail.ru" target="_blank">
              email
            </a>
            <a href="https://github.com/dmitryshelomanov" target="_blank">
              github
            </a>
          </div>
          <div className={styles.langs}>
            <a href="/">ru</a>
            <a href="/english">eng</a>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={cn(styles.col, styles.production)}>
          <h2>{translations.expirience}</h2>

          {expirience.map((it) => (
            <div className={styles.expirience}>
              <h3>{it.company}</h3>
              <p className={styles.title}>- {it.position}</p>
              <p>{translations.responsibility}:</p>

              <ul>
                {it.responsibility.map((it, index) => (
                  <li key={index}>{it}</li>
                ))}
              </ul>

              <p>{translations.achievements}:</p>
              <ul>
                {it.achievements.map((it, index) => (
                  <li key={index}>{it}</li>
                ))}
              </ul>

              <p>{translations.techonologies}:</p>
              <ul>
                {it.techonologies.map((it, index) => (
                  <li key={index}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={cn(styles.col, styles.pet)}>
          <h2>{translations.about.title}</h2>
          <p>{translations.about.description}</p>

          {about.map((it) => (
            <div className={styles.expirience}>
              <h3>{it.company}</h3>
              <p className={styles.title}>- {it.position}</p>
              <p>{translations.responsibility}:</p>

              <ul>
                {it.responsibility.map((it, index) => (
                  <li key={index}>{it}</li>
                ))}
              </ul>

              <p>{translations.achievements}:</p>
              <ul>
                {it.achievements.map((it, index) => (
                  <li key={index}>{it}</li>
                ))}
              </ul>

              <p>{translations.techonologies}:</p>
              <ul>
                {it.techonologies.map((it, index) => (
                  <li key={index}>{it}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3>{translations.projects}</h3>

          <div className="projects">
            {projects.map((it) => (
              <div key={it.link}>
                <a href={it.link} target="_blank">
                  {it.name}
                </a>
                <p>{it.description}</p>
              </div>
            ))}
          </div>

          <h2>{translations.skils.title}</h2>

          <div className={styles.skills}>
            <div>
              <p>{translations.skils.lang}</p>
              <ul>
                <li>HTML, CSS</li>
                <li>JS</li>
                <li>Reason</li>
                <li>Rust</li>
              </ul>
            </div>
            <div>
              <p>{translations.skils.tech}</p>
              <ul>
                <li>React, Vue</li>
                <li>Reason React</li>
                <li>React Native</li>
                <li>Webpack, gulp</li>
                <li>Node js</li>
                <li>Koa, Express</li>
                <li>RxJs, RxDb</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
