

import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard'
import { useState } from 'react'

function App() {
 const coffeesCollection=useLoaderData() 
 const [coffees,setCoffees]=useState(coffeesCollection)

  return (
    <>
        <div>
             <h1 className='text-2xl text-purple-500 text-center mb-10'>total coffees collection : {coffeesCollection.length}</h1>
                  
        </div> 

        <div className='grid grid-cols-2 gap-5 p-6'>
             {
               coffeesCollection.map(coffee=><CoffeeCard 
               key={coffee._id} 
               coffee={coffee}
               coffees={coffees}
               setCoffees={setCoffees}
               ></CoffeeCard>)
             }
        </div>    
      
    </>
  )
}

export default App
