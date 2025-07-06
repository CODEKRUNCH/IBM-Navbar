import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/ibm-plex-sans';
import ProductsDropdown from './ChildrenComponent/Productdropdown.jsx';
import {NavOption, DropdownSection,DropdownItem } from './ChildrenComponent/Dropdownplain.jsx';
import { MegaDropdownItem,MegaDropdownSection } from './ChildrenComponent/DesciptionDropdown.jsx';
import { Searchicon,IBMicon, Hamburgericon, Closeicon } from './ChildrenComponent/Icons.jsx';
import MobileMenu from './ChildrenComponent/MobileNavMenu.jsx';



const Navbar = () => {

    const navListRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const [searchbox,setsearchbox]=useState(false)
    const [activeCategory, setActiveCategory] = useState('featured');
    const [hasScrolled, setHasScrolled] = useState(false); // New state
    const [mobile,setMobile]=useState(false)

  const toggleMenu = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const toggleMobile = () => setMobile(prev => !prev);


  const handleSearch=()=>{
    setsearchbox((prev)=>!prev)
  }
  
   const scrollLeft = () => {
        if (navListRef.current) {
            navListRef.current.scrollBy({ left: -150, behavior: 'smooth' });
            // Check if we're back at start
            setTimeout(() => {
                if (navListRef.current.scrollLeft <= 0) {
                    setHasScrolled(false);
                }
            }, 2);
        }
    };

    const scrollRight = () => {
        if (navListRef.current) {
            navListRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            setHasScrolled(true);
        }
    };

    const checkOverflow = () => {
        const el = navListRef.current;
        if (el) {
            setIsOverflowing(el.scrollWidth > el.clientWidth);
            // Reset scroll state if content fits
            if (el.scrollWidth <= el.clientWidth) {
                setHasScrolled(false);
            }
        }
    };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    
    <nav className="text-black h-fit md:shadow-sm">
      <div className='flex md:pl-[2rem]'>
     <button onClick={toggleMobile}   className={`md:hidden relative cursor-pointer p-3 ${
    mobile ? 'bg-white z-[60]' : ''
  } fixed`}
  style={{ zIndex: 60 }}  > 
      {mobile?(<Closeicon/>): (<Hamburgericon/>) }
        </button>
      <Link to={"/home"} className={searchbox?'hidden md:flex pl-0' :'flex'}>
                <IBMicon className="hover:bg-gray-200 px-2" color={"black"} width={70} height={50} />
      </Link>
      <div className='flex relative w-full md:border-l border-l-gray-200 items-center'>
       {searchbox ? (
          <div className='border-b h-12 border-b-blue-700 flex-1'>
            <input
              type="text"
              placeholder="Search all of IBM"
              className="w-full h-12 outline-none px-4"
            />
          </div>
        ) : (
          <div className='hidden md:flex relative items-center w-full overflow-hidden'>
            {isOverflowing && hasScrolled && (
              <button
                onClick={scrollLeft}
                className="shrink-0 p-2 hover:bg-gray-100 rounded-r"
                aria-label="Scroll Left"
              >
                ←
              </button>
            )}
            
            <div    ref={navListRef} className="flex-1 relative overflow-hidden mx-2 ">
              <ul 
            //  whitespace-nowrap
                className="flex  ml-5 pl-5 space-x-1 text-black"
              >
          <NavOption hovershadow={false}
                label="AI"
                isOpen={openIndex === 0}
                onClick={() => toggleMenu(0)}
              >
                <DropdownSection cols={4} >
                  <DropdownItem href="#">Overview</DropdownItem>
                  <DropdownItem href="#">watsonx</DropdownItem>
                  <DropdownItem href="#">Agents</DropdownItem>
                  <DropdownItem href="#">Granite models</DropdownItem>
                  <DropdownItem href="#">Consulting</DropdownItem>
                  <DropdownItem href="#">Research</DropdownItem>
                  <DropdownItem href="#">Ethics and governance</DropdownItem>
                </DropdownSection>
              </NavOption>
          <NavOption
                label="Hybrid Cloud"
                isOpen={openIndex === 1}
                onClick={() => toggleMenu(1)}
              >
                <DropdownSection cols={3} >
                  <DropdownItem href="#">Overview</DropdownItem>
                  <DropdownItem href="#">Consulting</DropdownItem>
                  <DropdownItem href="#">Cloud platform</DropdownItem>
                  <DropdownItem href="#">IT infrastructure</DropdownItem>
                  <DropdownItem href="#">Quantum computing</DropdownItem>
                  <DropdownItem href="#">Research</DropdownItem>
                </DropdownSection>
        </NavOption>
        
         
       <NavOption
        label="Products"
        isOpen={openIndex === 2}
        onClick={() => toggleMenu(2)}
      >
        <ProductsDropdown 
          activeCategory={activeCategory}
          onCategorySelect={(category) => setActiveCategory(category)}
        />
      </NavOption>

        <li>
          <a href="#" className="Navbutton shrink-0 block p-3 hover:bg-gray-100">Consulting</a></li>
   
    <NavOption
      label="Support"
      isOpen={openIndex === 3}
      onClick={() => toggleMenu(3)}
          >
       <div className="absolute left-0 top-7  w-full bg-white shadow-md h-[70vh] overflow-auto">
       <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mx-auto p-6 gap-8">
          <div className="flex flex-col space-y-8 gap-8">
            <MegaDropdownSection title="What's New">
            </MegaDropdownSection>
            <MegaDropdownSection title="Community">
            </MegaDropdownSection>
            <MegaDropdownSection title="Developer">
              <MegaDropdownItem>Call for Code</MegaDropdownItem>
              <MegaDropdownItem>Generative AI</MegaDropdownItem>
              <MegaDropdownItem>Hackathons</MegaDropdownItem>
              <MegaDropdownItem>Open Source @ IBM</MegaDropdownItem>
              <MegaDropdownItem>Technologies</MegaDropdownItem>
            </MegaDropdownSection>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-8 gap-8">
            <MegaDropdownSection title="Documentation">
              <MegaDropdownItem>All product documentation</MegaDropdownItem>
              <MegaDropdownItem>IBM Cloud documentation</MegaDropdownItem>
              <MegaDropdownItem>IBM Redbooks</MegaDropdownItem>
            </MegaDropdownSection>

            <MegaDropdownSection title="IBM Cloud platform support">
            </MegaDropdownSection>
            
            <MegaDropdownSection title="Implementation" clickable={false} arrow={false}>
              <MegaDropdownItem>Expert Labs</MegaDropdownItem>
            </MegaDropdownSection>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-8 gap-8">
            <MegaDropdownSection title="Support">
              <MegaDropdownItem>Download fixes, updates & drivers</MegaDropdownItem>
              <MegaDropdownItem>Download licensed software - Passport Advantage</MegaDropdownItem>
              <MegaDropdownItem>IBM Software Licensing</MegaDropdownItem>
              <MegaDropdownItem>Open a case</MegaDropdownItem>
              <MegaDropdownItem>View more</MegaDropdownItem>
              <MegaDropdownItem>View support plans</MegaDropdownItem>
              <MegaDropdownItem>View your cases</MegaDropdownItem>
            </MegaDropdownSection>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-8 gap-8">
            <MegaDropdownSection title="Technology Lifecycle Services">
              <MegaDropdownItem>Enterprise networking and security</MegaDropdownItem>
              <MegaDropdownItem>Servers and storage</MegaDropdownItem>
              <MegaDropdownItem>Software</MegaDropdownItem>
            </MegaDropdownSection>

            <MegaDropdownSection title="Training">
              <MegaDropdownItem>Courses</MegaDropdownItem>
              <MegaDropdownItem>Digital learning subscriptions</MegaDropdownItem>
              <MegaDropdownItem>Learning paths & collections</MegaDropdownItem>
              <MegaDropdownItem>Professional certifications</MegaDropdownItem>
            </MegaDropdownSection>
          </div>
          </div>
        </div>
      </NavOption>

        <li><a href="#" className="Navbutton shrink-0 block p-3 hover:bg-gray-100">Think</a></li>

      </ul>   
   
      </div>
          {isOverflowing && (
        <button
          onClick={scrollRight}
          className="p-2 hover:bg-gray-100 rounded-r"
          aria-label="Scroll Right"
        >
          →
        </button>
      )}
    </div>
)}
      
      <div className='flex items-center md:mr-[1rem] space-x-1 ml-auto min-w-fit'>
     <div className='flex items-center space-x-1 relative shrink-0'>
        <button 
          className='cursor-pointer hover:bg-gray-100  px-2 py-2 '
          onClick={handleSearch}
        >
          <Searchicon className="w-6 h-6 " />
        </button>

         <div className={searchbox?'hidden md:flex' :'flex'}>       
        <button className='cursor-pointer hidden md:flex hover:bg-gray-100 px-2 py-2'>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="25" height="25" viewBox="0 0 32 32"><path d="M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z"></path><path d="M8 10H24V12H8zM8 16H18V18H8z"></path></svg>
        </button>
        
        <button className='cursor-pointer hover:bg-gray-100 px-2 py-2'>
       <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="25" height="25" viewBox="0 0 32 32" part="earth-l0-svg"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM28,15H22A24.26,24.26,0,0,0,19.21,4.45,12,12,0,0,1,28,15ZM16,28a5,5,0,0,1-.67,0A21.85,21.85,0,0,1,12,17H20a21.85,21.85,0,0,1-3.3,11A5,5,0,0,1,16,28ZM12,15a21.85,21.85,0,0,1,3.3-11,6,6,0,0,1,1.34,0A21.85,21.85,0,0,1,20,15Zm.76-10.55A24.26,24.26,0,0,0,10,15h-6A12,12,0,0,1,12.79,4.45ZM4.05,17h6a24.26,24.26,0,0,0,2.75,10.55A12,12,0,0,1,4.05,17ZM19.21,27.55A24.26,24.26,0,0,0,22,17h6A12,12,0,0,1,19.21,27.55Z"></path></svg>
        </button>
        
        <button className='cursor-pointer hover:bg-gray-100 px-2 py-2'>
       <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="25" height="25" viewBox="0 0 32 32"><path d="M16 4a5 5 0 11-5 5 5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0016 2zM26 30H24V25a5 5 0 00-5-5H13a5 5 0 00-5 5v5H6V25a7 7 0 017-7h6a7 7 0 017 7z"></path></svg>
        </button>
        </div>
        
        {searchbox && (
            <div className="absolute right-full ml-2 bg-white z-10">
              <div className="relative flex items-center">
          
                <button 
                  onClick={handleSearch}
                  className="absolute right-4 p-1 hover:bg-gray-100 rounded"
                >
                  ×
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
      </div>
     </div>

{mobile && (
  <>
    {/* Overlay behind the menu */}
    <div className="fixed inset-0 bg-black/60 z-50" onClick={toggleMobile} />

    {/* Slide-in menu */}
    <div className=" md:hidden w-full border-2 border-gray-300 h-full absolute left-0 z-50 overflow-y-auto">
      <MobileMenu close={toggleMobile} />
    </div>
  </>
)}

    </nav>
  );
};

export default Navbar;
