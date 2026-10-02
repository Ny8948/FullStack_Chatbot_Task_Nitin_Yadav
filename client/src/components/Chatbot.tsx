import { useState } from "react";

import "./Chatbot.css";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hi! 👋 Welcome to our Support Assistant. How can I help you today?",
    },
  ]);

  const options = [
    "Training",
    "Drone Services",
    "GIS & Mapping",
    "AI & Technology",
    "Career",
    "Business",
    "General Enquiry",
  ];

  const getBotResponse = (option: string) => {
    switch (option) {
      case "Training":
        return "We provide training programs for students and professionals. Would you like to submit a training enquiry?";

      case "Drone Services":
        return "We can help with professional drone-related services. Please submit your requirement so our team can contact you.";

      case "GIS & Mapping":
        return "We provide GIS, mapping and geospatial solutions. You can submit your project requirement through our enquiry form.";

      case "AI & Technology":
        return "We can help with AI and technology-based solutions. Please tell us about your requirement.";

      case "Career":
        return "For career-related enquiries, please submit your details and our team can guide you.";

      case "Business":
        return "For business or corporate requirements, please submit your requirement and contact details.";

      default:
        return "Sure! Please submit your enquiry and our team will get back to you.";
    }
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: option,
    };

    const botMessage: Message = {
      id: Date.now() + 1,
      sender: "bot",
      text: getBotResponse(option),
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      botMessage,
    ]);
  };

  const openEnquiryForm = () => {
    window.location.href = "/enquiry";
  };

  return (
    <>
      {isOpen && (
        <div className="chatbot-window">

          <div className="chatbot-header">
            <div>
              <strong>Support Assistant</strong>
              <span>Online</span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="chatbot-close"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">

            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${
                  message.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }`}
              >
                {message.text}
              </div>
            ))}

            <div className="chat-options">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() =>
                    handleOptionClick(option)
                  }
                >
                  {option}
                </button>
              ))}
            </div>

          </div>

          <div className="chatbot-footer">

            <button
              onClick={openEnquiryForm}
              className="enquiry-button"
            >
              Submit an Enquiry
            </button>

          </div>

        </div>
      )}

      <button
        className="chatbot-floating-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open support chatbot"
      >
        💬
      </button>
    </>
  );
};

export default Chatbot;