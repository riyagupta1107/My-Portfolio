import React, { useRef, useState, useEffect } from "react";
import ProjectCards from "./ProjectCards";

const projects = [
  {
    title: "Hospital Management System",
    techStack: "React, TailwindCSS, Node.js, MySQL",
    description:
      "A web app that manages hospital data like appointments, patient records, staff data & billing.",
    link: "#",
    imageUrl: "",
    bgColor: "#feeede",
  },
  {
    title: "Portfolio Website",
    techStack: "React, TailwindCSS, HTML, CSS, JavaScript",
    description:
      "A personal portfolio website to showcase projects and skills, built with modern web technologies.",
    link: "#",
    imageUrl: "",
    bgColor: "#feeede",
  },
  {
    title: "Car Price Predictor",
    techStack: "Python, Flask, Scikit-learn",
    description:
      "A machine learning model deployed as a web app to predict the resale value of used cars.",
    link: "#",
    imageUrl: "",
    bgColor: "#feeede",
  },
  {
    title: "Personal Budget Tracker",
    techStack: "React, JavaScript, Chart.js",
    description:
      "An application to help users track their income and expenses with visual data representations.",
    link: "#",
    imageUrl: "",
    bgColor: "#feeede",
  },
];

export default function ProjectSection({ projectRef }) {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // function to update active card based on scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const cardWidth = scrollContainerRef.current.firstChild.offsetWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  // add event listener for scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={projectRef}
      className="bg-lightPink min-h-screen py-20 border-t border-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="font-myFont1 text-4xl md:text-5xl">
            TAKE A LOOK AT MY PROJECTS
          </h1>
          <p className="font-textFont text-lg text-center w-full md:w-[60%]">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        {/* horizontal scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex w-full overflow-x-auto py-10 snap-x snap-mandatory px-[40%] hide-scrollbar"
        >
          {projects.map((project, index) => (
            <ProjectCards
              key={index}
              project={project}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
