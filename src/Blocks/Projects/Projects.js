import React from "react";
import "./Projects.css";

const projects = [
  {
    dateStart: "02.2020",
    dateEnd: "05.2020",
    name: "фриланс",
    description: "создание и верстка лендингов, разработка SPA на React.",
    location: "удаленка",
  },
  {
    dateStart: "06.2020",
    dateEnd: "05.2021",
    name: "РТИ",
    description: "Разработка на Angular, много чего делал, и еще немного текста, чуть больше текста",
    location: "калуга",
  },
  {
    dateStart: "06.2021",
    dateEnd: "по настоящее время",
    name: "SENLA",
    description: "Разработка на Angula и React",
    location: "калуга",
  },
]


export default function Projects() {
  return (
    <div className="block">
      <div className="block__wrap projects">
        <div className="block__title">ПРОЕКТЫ:</div>

          {projects.map((projects, i) => (
            <div className="project" key={i}>
                <div className="project__date">
                  {projects.dateStart} — <br />
                  {projects.dateEnd}
                </div>

                <div className="project-description">
                  <div className="project-description__title">
                    {projects.name}
                  </div>
                  <div className="project-description__text">
                    {projects.description}
                  </div>
                </div>

                <div className="project__location">
                  {projects.location}
                </div>
            </div>
          ))}

        <div className="block__number">05</div>
      </div>
    </div>
  );
}
