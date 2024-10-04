import React from 'react';
import Dashboard from './sale/Dashboard';
import './index.css'; 
import Navbar from './sale/Navbar';
import Data from './sale/Data';
import Card from './sale/Card';
import './App.css';

const App = () => {

const data = Data.map(item => {
    return(
  
        <Card
        key = {item.id}
        image = {item.image}
        brand = {item.brand}
        model = {item.model}
        gas = {item.gas}
        price = {item.price} />
    )
})

 return (
    <div>
    <Navbar/>
 <h2 className='mt-4 font-semibold text-xl ml-10 '>Welcome <span className='font-light'>User</span>

 </h2>
<div className='flex '>
<Dashboard/>
<p className='flex flex-wrap ml-5 justify-evenly gap-5'>  {data} </p>
</div>

  </div>
    );
};

export default App;