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
import TaskImage from "@/assets/Task.png";

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("first-tabination");

  const services = [
    {
      id: "first-tabination",
      name: "Web Application",
      image: WebApplication,
    },
    {
      id: "second-tabination",
      name: "Mobile Application",
      image: MobileApplication,
    },
    {
      id: "third-tabination",
      name: "Cloud Integration",
      image: CloudIntegration,
    },
    { id: "fourth-tabination", name: "RPA", image: RPAImage },
    {
      id: "five-tabination",
      name: "Machine Learning",
      image: MachineLearning,
    },
    {
      id: "six-tabination",
      name: "Digital Marketing",
      image: DIGITALMarketing,
    },
    { id: "seventh-tabination", name: "Gen AI", image: GENAI },
    {
      id: "eighth-tabination",
      name: "Business Intelligence",
      image: BusinessInteligence,
    },
    {
      id: "ninth-tabination",
      name: "User Interface",
      image: UserInterface,
    },
  ];

  return (
    <section className="augmention-service" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="text-center">Our Services</h2>
        </div>

        <div className="row">
          {/* Circular Tab Navigation */}
          <div className="circle-images-main">
            <ul className="nav-tabs service-tabs" role="tablist">
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`nav-item item-${index + 1}`}
                  role="presentation"
                >
                  <button
                    className={`nav-link ${
                      activeTab === service.id ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => setActiveTab(service.id)}
                  >
                    {service.name}
                    <div className="button-img-div">
                      <Image src={TaskImage} alt="Task iamge" />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
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
                  {/* Display the image only for the active tab */}
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
