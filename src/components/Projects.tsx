import "@/style/projets.css";
// import Image1 from "@/assets/Mask group.png";
// import Image2 from "@/assets/Mask group (1).png";
import Projects1Line from "@/assets/projects-1-line.svg";
import Projects2Line from "@/assets/projects-2-line.svg";
// import Projects3Line from "@/assets/prjects-3-line.svg";
// import Video1 from "@/assets/video.mp4";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="projects-main">
      <div className="projects-inner">
        <h1>Projects</h1>
        <div className="projects-all">
          {/* Project 1 */}
          <div className="project-image-section-main">
            <div className="image-text-inner">
              <div className="projects-text">
                <h2>Projects Name</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <div className="image-div">
                {/* <Image src={Image1} alt="Project 1 Image" /> */}
              </div>
            </div>
            <div className="project-video-line-main">
              <div className="project-line">
                <Image src={Projects1Line} alt="Project 1 Line" />
              </div>
              <div className="video-div">
                <video controls>
                  {/* <source src={Video1} type="video/mp4" /> */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="project-image-section-main-2">
            <div className="image-text-inner-2">
              <div className="projects-text">
                <h2>Projects Name</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <div className="image-div">
                {/* <Image src={Image1} alt="Project 1 Image" /> */}
              </div>
            </div>
            <div className="project-video-line-main-2">
              <div className="project-line-2">
                <Image src={Projects2Line} alt="Project 1 Line" />
              </div>
              <div className="video-div">
                <video controls>
                  {/* <source src={Video1} type="video/mp4" /> */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="project-image-section-main">
            <div className="image-text-inner">
              <div className="projects-text">
                <h2>Projects Name</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <div className="image-div">
                {/* <Image src={Image1} alt="Project 1 Image" /> */}
              </div>
            </div>
            <div className="project-video-line-main">
              <div className="project-line">
                <Image src={Projects1Line} alt="Project 1 Line" />
              </div>
              <div className="video-div">
                <video controls>
                  {/* <source src={Video1} type="video/mp4" /> */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
