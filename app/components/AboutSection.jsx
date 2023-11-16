"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        <li>Javascript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
        <li>Sveltekit</li>
        <li>Next.js</li>
        <li>ZionUI</li>
        <li>Tailwind</li>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <li>BS in Computer Science</li>
        <li>BA in Intercultural Peacebuilding</li>
        <li>3.95 GPA</li>
      </>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <li>FamilySearch Internship</li>
        <li>Freelance web developer</li>
        <li>
          Certifications
          <ul>
            <li> - Docker</li>
          </ul>
        </li>
      </>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section
      className="text-white"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/ai_me.webp"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            JavaScript, React, Express, HTML, CSS, and Git. I am a quick learner
            and am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications
          </p>
          <div className="flex flex-row mt-8">
            {TAB_DATA.map((tabs, id) => (
              <TabButton
                key={id}
                selectTab={() => handleTabChange(`${tabs.id}`)}
                active={tab === tabs.id}
              >
                {" "}
                {`${tabs.title}`}{" "}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            <ul className="list-disc pl-2">
              {TAB_DATA.find((t) => t.id === tab).content}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
