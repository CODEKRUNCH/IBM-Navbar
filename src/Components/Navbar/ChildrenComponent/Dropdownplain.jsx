import React, { useState, useEffect, useRef } from 'react'; 
import { ArrowIcon, Arrowpointicon } from './Icons';
import { Link } from 'react-router-dom';
const DropdownSection = ({ title, children, cols}) => {
    const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5'
  }[cols] || 'grid-cols-4';
  return (
    <div className="mb-6 last:mb-0">
      {title && (
        <h3 className="px-4 py-2 font-medium text-gray-500">
          {title}
        </h3>
      )}
      <div className={`grid ${gridCols} gap-y-12 text-xl  pb-10`}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            className: "block px-4 py-2 p-4 hover:bg-gray-50 text-gray-700 "
          })
        )}
      </div>
    </div>
  );
}

const NavOption = ({ label, children, isOpen, onClick }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        left: 0,
        top: rect.bottom + window.scrollY,
      });
    }
  }, [isOpen]);

  return (
    <>
      <li className="relative md:shrink-0">
        <button
          ref={buttonRef}
          onClick={onClick}
          className={`Navbutton md:cursor-pointer md:p-3 md:flex md:items-center md:hover:bg-gray-100 md:gap-2 ${
            isOpen ? 'md:bg-gray-100 md:border-2 md:border-blue-600' : ''
          }`}
        >
          <span className="md:block hidden">{label}</span>
          <ArrowIcon isOpen={isOpen} />
        </button>
      </li>

      {isOpen && (
        <div
          className="md:fixed md:bg-white md:border md:border-gray-200 md:p-8 md:shadow-lg md:z-50 md:w-screen md:left-0"
          style={{
            top: `${position.top}px`,
          }}
        >
          <div className="md:container md:mx-auto md:mt-5">{children}</div>
        </div>
      )}
    </>
  );
};

const DropdownItem = ({ children }) => {
  return (
    <Link className="md:flex md:w-fit md:flex-row md:items-center md:hover:underline">
      <span className="md:underline-offset-2">{children}</span>
      <span className="md:ml-2 md:no-underline">
        <Arrowpointicon />
      </span>
    </Link>
  );
};
export{NavOption, DropdownSection,DropdownItem}

