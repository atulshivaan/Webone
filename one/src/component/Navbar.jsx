import React from 'react';
import { Menu , X } from 'lucide-react';
import { useState } from 'react';
import logo1 from "../assets/logo1.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [openmobiledrawer , setopenmobiledrawer] = useState(false);

  const toggleNavbar=()=>{
    setopenmobiledrawer(!openmobiledrawer);
  }


  return (
    <nav className="sticky top-0  z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo1} alt="logo" />
            <span className="text-xl tracking-tight">WebOne</span>
          </div>
        
        
       
        <ul className="hidden lg:flex ml-14 space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} >{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex justify-center space-x-12 items-center">
          <a href="#" className="py-2 px-3 border rounded-md"> Sign In</a>
          <a href="#"
           className="bg-gradient-to-r from-amber-700 to-amber-800 py-2 px-3 rounded-md"
          
          > Create an account</a>
        </div>
        <div className='lg:hidden md:flex flex:col justify-end'>
          <button onClick={toggleNavbar}>
            {openmobiledrawer ? <X/>:<Menu/>}
          </button>
        </div>
        </div>
    {openmobiledrawer &&(
     <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
      <ul>
        {navItems.map((item,index)=>{
          <li key={index}>
            <a href={item.href}> {item.label}</a>
          </li>
        })}
      </ul>
      <div className="flex space-x-6">
        
        <a href="#" className="py-2 px-3 border rounded-md">Sing In</a>
        <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-amber-500 to-amber-800"> Create an account</a>
      </div>

      </div>


    )}



      </div>
      
    </nav>
  );
}

export default Navbar;
