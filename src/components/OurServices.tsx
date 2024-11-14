"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "@/style/ServiceSection.css";
import WebApplication from "@/assets/web-application.webp";
import MobileApplication from "@/assets/mobile-application.webp";
import CloudIntegration from "@/assets/cloud-integration.webp";
import DIGITALMarketing from "@/assets/digital-marketing.webp";
import RPAImage from "@/assets/rpa.webp";
import MachineLearning from "@/assets/machine-learning.webp";
import GENAI from "@/assets/gen-ai.webp";
import BusinessInteligence from "@/assets/business-intelligence.webp";

import WebAplication2 from "@/assets/Api.svg";
import MobileAplication2 from "@/assets/mobile-application-img.svg";
import CloudIntegration2 from "@/assets/cloud-integration-img.svg";
import DigitalMarkiting2 from "@/assets/Database.svg";
import RPAImage2 from "@/assets/webimg.svg";
import MachineLearning2 from "@/assets/devicon-plain_fastapi-wordmark.svg";
import GENAIimg2 from "@/assets/Task.svg";
import BuisnessInteligence from "@/assets/Ui.svg";

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("first-tabination");
  const [angles, setAngles] = useState<number[]>(
    Array(8)
      .fill(0)
      .map((_, i) => i * 45) // Start each icon 45 degrees apart
  );

  const services = [
    {
      id: "first-tabination",
      name: "Web Application",
      image: WebApplication,
      imgSrc: WebAplication2,
    },
    {
      id: "second-tabination",
      name: "Mobile Application",
      image: MobileApplication,
      imgSrc: CloudIntegration2,
    },
    {
      id: "third-tabination",
      name: "Cloud Integration",
      image: CloudIntegration,
      imgSrc: DigitalMarkiting2,
    },
    {
      id: "fourth-tabination",
      name: "RPA",
      image: RPAImage,
      imgSrc: RPAImage2,
    },
    {
      id: "five-tabination",
      name: "Machine Learning",
      image: MachineLearning,
      imgSrc: MachineLearning2,
    },
    {
      id: "six-tabination",
      name: "Digital Marketing",
      image: DIGITALMarketing,
      imgSrc: MobileAplication2,
    },
    {
      id: "seventh-tabination",
      name: "Gen AI",
      image: GENAI,
      imgSrc: GENAIimg2,
    },
    {
      id: "eighth-tabination",
      name: "Business Intelligence",
      image: BusinessInteligence,
      imgSrc: BuisnessInteligence,
    },
  ];

  // Update icon positions every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAngles((prevAngles) => prevAngles.map((angle) => angle + 45)); // Move each icon +45 degrees
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="augmention-service" id="service">
      <div className="container">
        <div className="slide-text-1">
          <h2>Our Services</h2>
        </div>

        <div className="Slider-and-images-main-div">
          <div className="main">
            <div className="big-circle">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`icon-block item-${index + 1}`}
                  style={{
                    transform: `rotate(${angles[index]}deg) translate(200px) rotate(-${angles[index]}deg)`,
                  }}
                  onClick={() => setActiveTab(service.id)}
                >
                  <button
                    className={`nav-link ${
                      activeTab === service.id ? "active" : ""
                    }`}
                    type="button"
                  >
                    <div
                      className={`btn-inner-img-div ${
                        activeTab === service.id ? "activeBorder" : ""
                      }`}
                    >
                      <Image src={service.imgSrc} alt={service.name} />
                    </div>
                    <p>{service.name}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-image-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`tab-pane ${
                  activeTab === service.id ? "show active" : ""
                }`}
                id={service.id}
              >
                {activeTab === service.id && (
                  <div className="service-img">
                    <Image
                      src={service.image}
                      alt={service.name}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
