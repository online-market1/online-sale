
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-200   border-gray-300">
            <div className="max-w-8xl mx-auto px-12 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center h-16">
                    <div className="text-gray-800 font-semibold text-2xl ">AB<span className='text-neutral-950 text-4xl'>.</span></div>
                    <div className="hidden md:flex space-x-4">
                        <button className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded">Message</button>
                        <button className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded">Post</button>
                        <button className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded">Login</button>
                        <button className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded">Sign Up</button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
            
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

          
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidde bg-gray-200`}>
                <div className=" px-4 py-2 ">
                <div className='main'>
<div className="text-lg font-bold ml-7 mt-8 mb-4">Categories</div>


<button className='bg-white p-2 mt-6 rounded-md w-60 text-left -ml-5 shadow-lg border-stone-950 font-semibold flex items-center' >
<span className='ml-10 text-lg'>Car</span>
<img className='w-7 ml-28' src='car.png'></img>
</button>
<button className='bg-white p-2 rounded-md w-60 text-left -ml-5 mt-3 shadow-lg border-stone-950 font-semibold flex items-center' >
<span className='ml-10 text-lg'>Home</span>
<img className='w-7 ml-24' src='home.png'></img>
</button>

<p className='mt-10 ml-7 text-xl'>By Price</p>
<input className='mt-7 ml-7' type='checkbox'/>
 <span className='text-sm ml-2'>Lower to higher</span> <br/>
<input className='mt-5 ml-7'  type='checkbox'/>
<span className='text-sm ml-2'>Higher to lower</span>
</div>

  
         
<div className='button mt-7 flex '>
<div>

<button className="text-gray-800 hover:bg-gray-300 w-full text-left px-7 py-2 rounded">Message</button>
<button className="text-gray-800 hover:bg-gray-300 w-full text-left px-7 py-2 rounded">Post</button>
</div>
<div>
<button className="text-gray-800 hover:bg-gray-300 w-full text-left px-7 py-2 rounded">Login</button>
  <button className="text-gray-800  hover:bg-gray-300  w-full text-left px-7 py-2 rounded">Signup</button>
</div>
</div>

 </div>
</div>
</nav>
    );
};

export default Navbar;