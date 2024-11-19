"use client";
import { useState } from "react";
import Image from "next/image";
import BookmeetingIcon from "@/assets/Book-meetiing.svg";
import BookmeetingIconWhite from "@/assets/Book-meeting-white.svg";
import CallIcon from "@/assets/Call-icon.svg";
import CallIconWhite from "@/assets/Call-icon-white.svg";
import UploadIcon from "@/assets/Upload Icon.svg";
import UploadIconWhite from "@/assets/Upload Icon-white.svg";
import "@/style/BookMeetingCallNow.css";

export default function BookmeetingandCallNow() {
  const [isMeetingHovered, setIsMeetingHovered] = useState(false);
  const [isCallHovered, setIsCallHovered] = useState(false);
  const [isUploadHovered, setIsUploadHovered] = useState(false);

  return (
    <div className="bookmeeting-main">
      <div className="bookmeeting-inner">
        <h2 className="heading">
          Get Free Premium Audit/Feasibility study of your project ( Share your
          Project detail Exclusively ){" "}
        </h2>

        <div className="buttons-wrapper">
          {/* Book A Meeting Button */}
          <div className="button-container">
            <a
              href="https://calendly.com/sales-gun"
              className="Bookmeeting-a-tag"
              target="blank"
            >
              <button
                className="meeting-button"
                onMouseEnter={() => setIsMeetingHovered(true)}
                onMouseLeave={() => setIsMeetingHovered(false)}
              >
                <span className="icon">
                  <Image
                    src={
                      isMeetingHovered ? BookmeetingIconWhite : BookmeetingIcon
                    }
                    alt="Book Meeting Icon"
                  />
                </span>
                Book A Meeting
              </button>
            </a>
          </div>

          {/* Call Now Button */}
          <div className="button-container">
            <button
              className="call-button"
              onMouseEnter={() => setIsCallHovered(true)}
              onMouseLeave={() => setIsCallHovered(false)}
            >
              <span className="icon">
                <Image
                  src={isCallHovered ? CallIconWhite : CallIcon}
                  alt="Call Icon"
                />
              </span>
              Call Now
            </button>
          </div>
          <div className="button-container">
            <button
              className="call-button"
              onMouseEnter={() => setIsUploadHovered(true)}
              onMouseLeave={() => setIsUploadHovered(false)}
            >
              <span className="icon">
                <Image
                  src={isUploadHovered ? UploadIconWhite : UploadIcon}
                  alt="Call Icon"
                />
              </span>
              (drop the link or File or doc or resume)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
