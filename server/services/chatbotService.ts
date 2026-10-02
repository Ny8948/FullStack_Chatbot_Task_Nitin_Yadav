interface ChatbotResponse {
  message: string;
  suggestions: string[];
}

const chatbotRules = [
  {
    keywords: ["hello", "hi", "hey", "hii"],
    response:
      "Hello! 👋 Welcome to our Support Assistant. How can I help you today?",
    suggestions: [
      "Drone Services",
      "Training",
      "GIS & Mapping",
      "Business Enquiry",
    ],
  },

  {
    keywords: ["drone", "drones", "uav"],
    response:
      "We can help you with drone technology, drone services, applications and industry-related information.",
    suggestions: [
      "Drone Services",
      "Drone Training",
      "Business Enquiry",
    ],
  },

  {
    keywords: ["training", "course", "learn", "student"],
    response:
      "We can help students and professionals explore drone technology and training opportunities.",
    suggestions: [
      "Training Enquiry",
      "Student Enquiry",
      "Career",
    ],
  },

  {
    keywords: ["gis", "mapping", "map", "survey", "geospatial"],
    response:
      "GIS and mapping technologies can support surveying, mapping, spatial analysis and geospatial applications.",
    suggestions: [
      "GIS Enquiry",
      "Drone Services",
      "Business Enquiry",
    ],
  },

  {
    keywords: ["ai", "artificial intelligence", "machine learning"],
    response:
      "AI can be used with drone and geospatial technologies for automation, analysis and intelligent decision-making.",
    suggestions: [
      "AI Solutions",
      "Business Enquiry",
    ],
  },

  {
    keywords: [
      "business",
      "partner",
      "partnership",
      "advertise",
      "company",
    ],
    response:
      "For business or partnership opportunities, you can submit an enquiry and our team can contact you.",
    suggestions: [
      "Business Enquiry",
      "Contact Team",
    ],
  },

  {
    keywords: ["career", "job", "jobs", "internship"],
    response:
      "You can submit a career-related enquiry and provide your details so our team can guide you.",
    suggestions: [
      "Career Enquiry",
      "Student Enquiry",
    ],
  },

  {
    keywords: ["contact", "support", "help"],
    response:
      "Sure! Please tell me what you need help with, or submit an enquiry so our team can contact you.",
    suggestions: [
      "Submit Enquiry",
      "Talk to Team",
    ],
  },
];

export const getChatbotResponse = (
  message: string
): ChatbotResponse => {
  const text = message.toLowerCase().trim();

  if (!text) {
    return {
      message: "Please type a message so I can help you.",
      suggestions: [
        "Drone Services",
        "Training",
        "GIS & Mapping",
      ],
    };
  }

  const matchedRule = chatbotRules.find((rule) =>
    rule.keywords.some((keyword) => text.includes(keyword))
  );

  if (matchedRule) {
    return {
      message: matchedRule.response,
      suggestions: matchedRule.suggestions,
    };
  }

  return {
    message:
      "I'm here to help with drone technology, training, GIS & mapping, AI, career and business enquiries. Please choose an option below or describe your requirement.",
    suggestions: [
      "Drone Services",
      "Training",
      "GIS & Mapping",
      "Business Enquiry",
    ],
  };
};