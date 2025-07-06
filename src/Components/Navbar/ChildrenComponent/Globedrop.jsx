import { useState } from "react";
const Globedrop=()=>{
  const regions = [
    { name: 'Australia', language: 'English', native: 'English' },
    { name: 'Brazil', language: 'Português', native: 'Portuguese' },
    { name: 'Canada', language: 'English', native: 'English' },
    { name: 'Canada', language: 'Français', native: 'French' },
    { name: 'China', language: '中文', native: 'Simplified Chinese' },
    { name: 'France', language: 'Français', native: 'French' },
    { name: 'Germany', language: 'Deutsch', native: 'German' },
    { name: 'India', language: 'English', native: 'English' },
    { name: 'Indonesia', language: 'Bahasa', native: 'Indonesian' },
    { name: 'Italy', language: 'Italiano', native: 'Italian' },
    { name: 'Japan', language: '日本語', native: 'Japanese' },
    { name: 'Mexico', language: 'Español', native: 'Spanish' }
  ];

  return (
    <div>
      <div className="fixed right-0 md:right-14 top-13 w-72 max-h-[80vh] overflow-y-auto bg-white shadow-lg rounded-md z-50 p-4">
        {/* Current Region */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">Your current region is:</p>
          <p className="font-medium">United States – English</p>
        </div>

        <hr className="my-3 border-gray-200" />

        {/* Region Selection */}
        <div>
          <p className="text-sm text-gray-600 mb-2">Select a different region:</p>
          <ul className="space-y-2">
            {regions.map((region, index) => (
              <li key={index}>
                <button className="w-full cursor-pointer text-left hover:bg-gray-50 p-2 rounded">
                  <span className="font-medium">{region.name} – {region.language}</span>
                  <span className="text-gray-500 text-sm ml-1">({region.native})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Globedrop