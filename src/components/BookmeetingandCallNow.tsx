import { useState } from "react";
import Image from "next/image";
import BookmeetingIcon from "@/assets/Book-meetiing.svg";
import BookmeetingIconWhite from "@/assets/Book-meeting-white.svg";
import CallIcon from "@/assets/Call-icon.svg";
import CallIconWhite from "@/assets/Call-icon-white.svg";
import UploadIcon from "@/assets/Upload Icon.svg";
import UploadIconWhite from "@/assets/Upload Icon-white.svg";
import MainImaeg from "@/assets/meeting-and-call-main-image.svg";
import ClosedIcon from "@/assets/Close-svg.svg";
import "@/style/BookMeetingCallNow.css";

export default function BookmeetingandCallNow() {
  const [isMeetingHovered, setIsMeetingHovered] = useState(false);
  const [isCallHovered, setIsCallHovered] = useState(false);
  const [isUploadHovered, setIsUploadHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file); // Store the file
    }
  };

  const handleLinkSubmit = () => {
    if (link.trim() !== "") {
      alert(`Link "${link}" submitted successfully!`);
      setLink(""); // Clear input field
    } else {
      alert("Please enter a valid link.");
    }
  };

  return (
    <div className="bookmeeting-main">
      <div className="bookmeeting-inner">
        <div className="meeting-inpus-main">
          <h2 className="heading">
            Get Free Premium Audit/Feasibility study of your project ( Share
            your Project detail Exclusively ){" "}
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
                        isMeetingHovered
                          ? BookmeetingIconWhite
                          : BookmeetingIcon
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
              <a href="tel:+923488406670" className="Bookmeeting-a-tag">
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
              </a>
            </div>

            {/* Drop the Docs Button */}
            <div className="button-container">
              <button
                className="call-button"
                onMouseEnter={() => setIsUploadHovered(true)}
                onMouseLeave={() => setIsUploadHovered(false)}
                onClick={() => setIsModalOpen(true)}
              >
                <span className="icon">
                  <Image
                    src={isUploadHovered ? UploadIconWhite : UploadIcon}
                    alt="Upload Icon"
                  />
                </span>
                Drop the Links / Docs
              </button>
            </div>
          </div>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <Image
                  className="close-button"
                  onClick={() => setIsModalOpen(false)}
                  style={{ color: "#000", width: "24px", height: "24px" }}
                  src={ClosedIcon}
                  alt="Close Icon"
                />
                <h3>Upload Documents or Submit a Link</h3>

                <div className="upload-section">
                  <label htmlFor="file-upload" className="file-upload-label">
                    <Image
                      src={UploadIcon}
                      alt="Upload Icon"
                      width={50}
                      height={50}
                    />
                    <input
                      type="file"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.png,.jpg"
                      onChange={handleFileUpload}
                      className="file-input"
                    />
                    <span className="upload-text">Upload or Drop</span>
                  </label>
                  {uploadedFile && (
                    <div className="preview-section">
                      <p>Uploaded File: {uploadedFile.name}</p>
                    </div>
                  )}
                </div>

                <div className="link-section">
                  <label htmlFor="link-upload">Submit a Link:</label>
                  <input
                    type="text"
                    id="link-upload"
                    placeholder="Enter your link here"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                  <button onClick={handleLinkSubmit} className="modal-submit">
                    Submit Link
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="Meeting-main-image">
          <h1>High-impact services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <Image src={MainImaeg} alt="Main Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
