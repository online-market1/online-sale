
import React from 'react';

const Dashboard = () => {

    return (
        <div className="dash flex mt-4 ">
       
            <aside className="bg-[#E6E6E6] text-black w-64 rounded-lg shadow-xl p-4">
                <div className="text-lg font-bold ml-7 mt-2 mb-4">Categories</div>

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
               
        
            </aside>


        </div>
    );
};
   


export default Dashboard;