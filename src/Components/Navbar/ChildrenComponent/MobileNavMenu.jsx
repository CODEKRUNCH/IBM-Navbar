import { useState } from "react";
const MobileMenu= ({close}) =>{
 const [activeMenu, setActiveMenu] = useState("root");

const MENU_TREE = {
  root: [
    { id: "ai",           label: "AI" },
    { id: "hybridCloud",  label: "Hybrid Cloud" },
    { id: "products",     label: "Products" },
    { id: "consulting",   label: "Consulting" },
    { id: "support",      label: "Support" },
    { id: "think",        label: "Think" },
  ],

  ai: [
    { label: "Overview" },
    { label: "watsonx" },
    { label: "Granite models" },
    { label: "Agents" },
    { label: "Consulting" },
    { label: "Research" },
    { label: "Ethics and governance" },
  ],

  hybridCloud: [
    { label: "Overview" },
    { label: "Cloud platform" },
    { label: "IT infrastructure" },
    { label: "Quantum computing" },
    { label: "Consulting" },
    { label: "Research" },
   
  ],

  products: [
    { label: "Featured" },
    { label: "Data & AI" },
    { label: "Automation" },
    { label: "Security" },
    { label: "Sustainability" },
    { label: "Infrastructure" },
    { label: "Cloud" },
    { label: "All Products" },
  ],

  consulting: [
    { label: "Overview" },
    { label: "Strategy" },
    { label: "Experience" },
    { label: "Technology" },
    { label: "Operations" },
    { label: "Business Transformation" },

  ],

  support: [
    { label: "Documentation" },
    { label: "Downloads" },
    { label: "Licensing" },
    { label: "Cases" },
    { label: "Support plans" },
    { label: "Training" },
    { label: "Lifecycle services" },
  ],

  think: [
    { label: "IBM Blog" },
    { label: "Case studies" },
    { label: "Events" },
    { label: "Research" },
    { label: "Newsroom" },
  ],
};


const handleClick = (item) => {
    if (item.isBack) {
      setActiveMenu("root");
    } else if (MENU_TREE[item.id]) {
      setActiveMenu(item.id);
    } else {
      console.log("Navigate to:", item.label);
      close?.(); // Close the menu when navigating
    }
  };

  return (
    <div className="md:hidden absolute inset-0 bg-white z-50 overflow-y-auto">
      {/* Back button (only in sub‑menus) */}
      {activeMenu !== "root" && (
        <button
          onClick={() => setActiveMenu("root")}
          className="cursor-pointer flex items-center gap-2 p-4 text-lg font-medium hover:bg-gray-100"
        >
          ← Back
        </button>
      )}

      {/* Render current menu level */}
      <ul className="space-y-1 p-4">
        {MENU_TREE[activeMenu].map((item) => (
          <li key={item.label} className="w-full">
            <button
              onClick={() => handleClick(item)}
              className="w-full border-b border-b-gray-400 cursor-pointer text-left p-3 text-lg font-medium hover:bg-gray-100"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu