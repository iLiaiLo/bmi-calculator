import React from 'react'

const Inputs = ({getBMI,handleChange}) => {
  return (
    <section className="flex flex-col w-[300px]">
            <input type="text" name="height" onChange={handleChange}
            className="border-2 border-gray-400 mb-6 p-3 text-xl rounded-lg
            focus:outline-none"  placeholder="enter your height (cm)"/>
            <input type="text" name="mass" onChange={handleChange} className="border-2
            border-gray-400 mb-6 p-3 text-xl rounded-lg focus:outline-none" placeholder="enter your weight (kg)" />
            <button onClick={getBMI} 
            className="border-2 border-gray-600 p-3 text-xl rounded-lg hover:bg-blue-600
            hover:text-white hover:border-blue-600" >calculate your BMI</button>
    </section>
  )
}

export default Inputs