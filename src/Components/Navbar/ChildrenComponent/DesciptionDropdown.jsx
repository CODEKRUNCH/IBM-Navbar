import React from 'react';
import { Link } from 'react-router-dom';
import { Arrowpointicon } from './Icons';
const MegaDropdownSection = ({ title, children ,arrow=true ,clickable=true}) => (
  <div className="flex flex-col gap-2 min-w-[200px]">
    <Link className=" text-xl text-gray-800 flex items-center gap-1">
   {clickable ? (<span className='cursor-pointer hover:underline'>{title}</span>): (<span className=''>{title}</span>) } {arrow && <span className="text-lg "><Arrowpointicon/></span>}
    </Link>
    <ul className="flex flex-col gap-1 pl-1 text-gray-700">
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className:
            'hover:bg-gray-200 p-1 hover:text-black transition text-sm text-gray-600 cursor-pointer',
        })
      )}
    </ul>
  </div>
);

const MegaDropdownItem = ({ children, className = '' }) => (
  <li className={className}><Link>{children}</Link></li>
);
export { MegaDropdownItem, MegaDropdownSection };