"use client";
import { useState } from "react";
import Image from "next/image";
import "@/style/ServiceSection.css";
import WebApplication from "@/assets/web-application.webp";
import MobileApplication from "@/assets/mobile-application.webp";
import UserInterface from "@/assets/user-interface.webp";
import RPAImage from "@/assets/rpa.webp";
import MachineLearning from "@/assets/machine-learning.webp";
import GENAI from "@/assets/gen-ai.webp";
import DIGITALMarketing from "@/assets/digital-marketing.webp";
import CloudIntegration from "@/assets/cloud-integration.webp";
import BusinessInteligence from "@/assets/business-intelligence.webp";

import APIimg from "@/assets/Api.svg";
import Cloudimg from "@/assets/cloud-integration-img.svg";
import Database from "@/assets/Database.svg";
import Webimg from "@/assets/webimg.svg";
import DevicePlain from "@/assets/devicon-plain_fastapi-wordmark.svg";
import Mobileimg from "@/assets/mobile-application-img.svg";
import Taskimg from "@/assets/Task.svg";
import UIimg from "@/assets/Ui.svg";

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("first-tabination");

  const services = [
    {
      id: "first-tabination",
      name: "Web Application",
      image: WebApplication,
      imgSrc: APIimg,
    },
    {
      id: "second-tabination",
      name: "Mobile Application",
      image: MobileApplication,
      imgSrc: Cloudimg,
    },
    {
      id: "third-tabination",
      name: "Cloud Integration",
      image: CloudIntegration,
      imgSrc: Database,
    },
    { id: "fourth-tabination", name: "RPA", image: RPAImage, imgSrc: Webimg },
    {
      id: "five-tabination",
      name: "Machine Learning",
      image: MachineLearning,
      imgSrc: DevicePlain,
    },
    {
      id: "six-tabination",
      name: "Digital Marketing",
      image: DIGITALMarketing,
      imgSrc: Mobileimg,
    },
    { id: "seventh-tabination", name: "Gen AI", image: GENAI, imgSrc: Taskimg },
    {
      id: "eighth-tabination",
      name: "Business Intelligence",
      image: BusinessInteligence,
      imgSrc: UIimg,
    },
  ];

  return (
    <section className="augmention-service" id="service">
      <div className="container">
        <div className="slide-text-1">
          <h1>Our Services</h1>
        </div>

        <div className="Slider-and-images-main-div">
          <div className="main">
            <div className="big-circle">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`icon-block item-${index + 1}`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <button
                    className={`nav-link ${
                      activeTab === service.id ? "active" : ""
                    }`}
                    type="button"
                  >
                    <div className="btn-inner-img-div">
                      <Image src={service.imgSrc} alt="Task image" />
                    </div>
                    <p>{service.name}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-image-2">
            <div className="tab-content">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${
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
      </div>
    </section>
  );
};

export default ServiceSection;
