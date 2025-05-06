// DO NOT REMOVE THESE COMMENTS, that'd be cheating ;)
/* eslint-disable */
// @ts-nocheck
import React, { useState } from "react";

var initialVisibility = true;

export const WelcomeToggler: React.FC = () => {
  var [isVisible, setIsVisible] = useState(initialVisibility);

  const handleToggle = () => {
    setIsVisible(isVisible === true ? false : true);
  };

  return (
    <div className="p-5 m-2.5" style={{ border: "1px solid #ccc" }}>
      <div
        onClick={handleToggle}
        className="inline-block py-2.5 px-4 text-white cursor-pointer rounded mb-4"
        style={{
          backgroundColor: "#007bff",
        }}
      >
        Toggle Message
      </div>

      {isVisible && (
        <p className="text-gray-700">Welcome! Thanks for visiting.</p>
      )}
    </div>
  );
};
