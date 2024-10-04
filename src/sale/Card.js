
import React from 'react';

const Card = ({ brand, model, gas, price, image }) => {
    return (
        <div className="bg-white  mt-4  w-[300px] h-[300px] rounded-xl shadow-lg">
            <img
                src={image} 
                alt="Item"
                className="w-full h-[197px] object-cover rounded"
            />
            <div className='flex items-center justify-around mt-4'>
                <h3 className="text-lg font-medium ">{brand}</h3>
                <p>{model}</p>
                <p>{gas}</p>
            </div>
            <hr className='w-[240px] ml-8 mt-3 border-1 border-black'></hr>
            <p className="font-light ml-8 mt-2 text-gray-700">${price}</p>
        </div>
    );
};

export default Card;