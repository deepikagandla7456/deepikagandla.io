import React from "react";

function Projects() {
  const projects = [
    { title: "Quiz App with Timer", description: "A quiz app built with HTML, CSS, and JavaScript." },
    { title: "Fake News Detection System", description: "A machine learning model to classify news articles." },
    { title: "Website Blocker", description: "A Python-based tool to block distracting websites." },
    { title: "COVID-19 Dashboard", description: "Interactive Tableau dashboard visualizing COVID-19 data." },
    { title: "College Predictor", description: "A C program to predict college admissions based on rank." },
  ];

  return (
    <section className="container">
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
