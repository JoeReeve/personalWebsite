"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Saturn Yoga Business Website",
    description:
      "Mobile first website for a local business built using Javascript and Sveltekit.",
    image: "/images/projects/saturn.webp",
    tag: ["All", "Web"],
    previewUrl: "https://saturnyoga.com/",
  },
  {
    id: 3,
    title: "FamilySearch Labs",
    description:
      "A page on FamilySearch.com built from the ground up during my internship where FS users can go to turn on/off beta features for themselves. Mobile-first frontend built with React that integrated with split.io on the backend to control feature flags",
    image: "/images/projects/labs.webp",
    tag: ["All", "Mobile"],
  },
  {
    id: 2,
    title: "Construction business website",
    description:
      "Fun project I used to practicie building a mobile-first website. Built using Javascript and Sveltekit.",
    image: "/images/projects/construction.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JoeReeve/constructionSite",
    previewUrl: "https://construction-site-new.netlify.app/",
  },
  {
    id: 5,
    title: "NBA Stats Visualizer",
    description:
      "Data-vis project built with react to compare stats of the last 10 unique NBA championship teams. Turns out it takes very similar stats to win big..",
    image: "/images/projects/nba.webp",
    tag: ["All", "Web"],
    previewUrl: "https://nbastatsreact.netlify.app/",
  },
  {
    id: 4,
    title: "Etch-a-sketch",
    description:
      "A simple, resizeable etch-a-sketch built using pure javascript",
    image: "/images/projects/etch.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JoeReeve/etch-a-sketch",
    previewUrl: "https://joereeve.github.io/etch-a-sketch/",
  },

  {
    id: 6,
    title: "Mersenne Twister Visualizer",
    description:
      "One of the first projects I ever did to learn js/html/css. Not very pretty, but I'm proud of it. I made a js implementation of the mersenne twister PRNG and used that to create a random canvas",
    image: "/images/projects/mersenne.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JoeReeve/Mersenne-Twister",
    previewUrl: "https://joereeve.github.io/Mersenne-Twister/",
  },
];

function ProjectsSection() {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="inital"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsSection;
