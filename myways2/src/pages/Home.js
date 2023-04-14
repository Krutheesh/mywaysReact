import React, { useState } from 'react'
import { createContext } from "react";
import { useContext } from "react";
export const Mycontext = createContext();
function Home() {
 
  const [item,setItem] = useState('')
  const [ty,setTy] = useState('')
  const [time, setTime] = useState()
  const [food , setFood] = useState([])
  console.log(item)
const formHandler = (e) => {
  e.preventDefault()
  if (item === ""){
    alert("enter food item")
  }
  else{
    const newFood = {
      FoodName:item,
      FoodType:ty,
      Time:time
    }
    setFood([...food,newFood])

    
    setItem('')
    setTy('')

  }


console.log(food)


}

  return (
    <Mycontext.Provider value={food}>
    <div>
      <form action="" onSubmit={(e) => formHandler(e)}>
        <div className='space-y-5 border-2  w-[30%] m-auto mt-5 p-5'>
        <div>
        <label >
          Food Name:
          <input type="text" value={item}  onChange={(e)=>{
            setItem(e.target.value)
          }} className='border-2 ml-2'/>
        </label>
        </div>
       
        <div>
        <label >
          Food Type:
          <input type="text" value={ty} className='border-2 ml-2' onChange={(e)=>{
            setTy(e.target.value)
          }}/>
        </label>
        </div>
        <div>
        <label >
         Max Delivary Time:
          <input type="time" className='border-2 ml-2'
          onChange={(e)=>{
            setTime(e.target.value)
          }}
          />
        </label>
        </div>

      <div className='text-center'>
        <button className='bg-sky-600 text-white p-2 rounded-xl text-center'> submit</button>
      </div>
        </div>

      </form>
      </div>

      <div>
       <div className='text-center mt-5 bg-sky-600 text-white'>FOOD</div>
      { 
      food.map( (ele , index) => (

        <div key={index} >

          <div className=' text-center mt-5'>
          <div className=' p-3  m-auto border-2 w-[40%]'>
            <p>FoodName:{ele.FoodName}</p>
            <p>FoodType:{ele.FoodType}</p>
            <p>Time:{ele.Time}</p>
          </div>
          </div>

        </div>

      )
      
      
      )
    }


    </div>

      </Mycontext.Provider>
   
   
  )
}

export default Home
