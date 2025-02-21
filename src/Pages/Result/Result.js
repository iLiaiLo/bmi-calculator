import React from 'react'

const Result = ({displayContent,BMI,result}) => {
  return (
    <section style={{visibility:displayContent?"visible":"hidden"}}
      className="border-2 border-gray-500 w-[300px] h-[100px] flex flex-col justify-evenly rounded-lg">
           <div className="ml-2 text-xl">your BMI : {BMI}</div>
           <div className="ml-2 text-xl">Result : {result}</div>
      </section>
  )
}

export default Result