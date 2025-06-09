import React, { useState } from "react";

// Section component for each editable policy block
const Section = ({ title, initialContent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => setIsEditing(false);
  const handleEdit = () => setIsEditing(true);

  return (
    <section className="mb-6 bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      {isEditing ? (
        <>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 text-gray-700 border rounded-lg mb-2"
            rows={4}
          />
          <button
            onClick={handleSave}
            className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p className="text-gray-600 mb-2">{content}</p>
          <button
            onClick={handleEdit}
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit
          </button>
        </>
      )}
    </section>
  );
};

// Main PrivacyPolicy component
const PrivacyPolicy = () => {
  const [heading, setHeading] = useState("Privacy Policy");
  const [isEditingHeading, setIsEditingHeading] = useState(false);

  const sections = [
    {
      title: "1. Introduction",
      content:
        "We respect your privacy and are committed to protecting the personal information you share with us.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We may collect personal information such as your name, email address, phone number, and usage data through forms or cookies.",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "Your information is used to provide and improve our services, communicate with you, and ensure legal compliance.",
    },
    {
      title: "4. Sharing Your Information",
      content:
        "We do not share your personal information with third parties, except as required by law or to provide you with our services.",
    },
    {
      title: "5. Data Retention",
      content:
        "We retain your data only as long as necessary for the purposes outlined in this policy.",
    },
    {
      title: "6. Security",
      content:
        "We implement reasonable security measures to protect your personal information.",
    },
    {
      title: "7. Your Rights",
      content:
        "You have the right to access, update, or delete your personal data. You can also opt-out of marketing communications.",
    },
    {
      title: "8. Cookies",
      content:
        "Our website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings.",
    },
    {
      title: "9. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
    },
    {
      title: "10. Contact Us",
      content:
        "If you have any questions or concerns about this Privacy Policy, please contact us at: support@example.com",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-xl rounded-2xl mt-10">
      {isEditingHeading ? (
        <input
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          onBlur={() => setIsEditingHeading(false)}
          className="text-3xl font-bold m-6 w-full text-center bg-gray-100 p-2 rounded-lg"
          autoFocus
        />
      ) : (
        <h1
          className="text-3xl font-bold m-6 text-center cursor-pointer"
          onClick={() => setIsEditingHeading(true)}
        >
          {heading}
        </h1>
      )}

      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          initialContent={section.content}
        />
      ))}
    </div>
  );
};

export default PrivacyPolicy;
