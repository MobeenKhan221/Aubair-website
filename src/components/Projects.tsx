import "@/style/projets.css";
import Image1 from "@/assets/Mask group.png";
import Image2 from "@/assets/Mask group (1).png";
import Image from "next/image";

const projects = [
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    imageSrc: Image1,
  },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    imageSrc: Image2,
  },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    imageSrc: Image1,
  },
];

export default function Projects() {
  return (
    <div className="projects-main">
      <div className="projects-inner">
        <h1>Projects</h1>
        <div className="projects-all">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-image-section ${
                index === 1 ? "reverse" : ""
              }`}
            >
              <div className="projects-text">
                <p>{project.description}</p>
              </div>
              <div className="image-div">
                <Image src={project.imageSrc} alt="project image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
