import React, {useEffect} from "react"; 
import { useState } from "react";


function App() {
  const [kilogram,setKilogram]=useState("");
      const [height,setHeight]=useState("");
      const [result,setResult]=useState("");
      const [BMI,setBMI]=useState("");
      const [display,setDisplay]=useState(false);
      const [errorMassage,setErrorMassage]=useState("")

     useEffect(()=>{
            if(kilogram==="" || height===""){
                  setDisplay(false)
            }
      },[kilogram,height])
      

      function getBMI(){

            let BMI=(10_000*Number(kilogram)/(Number(height)**2)).toFixed(1);

            if(BMI<18.5){
                  setResult("Underweight")
                  setBMI(`${BMI}`)
            }
            else if(BMI>=18.5 && BMI<24.9){
                  setResult("Normal Weight")
                  setBMI(`${BMI}`)
            }
            else if(BMI>=25 && BMI<29.9){
                  setResult("Overweight")
                  setBMI(`${BMI}`)
            }
            else if(BMI>30){
                  setResult("Obese")
                  setBMI(`${BMI}`)
            }

            if(Math.sign(Number(kilogram))===1 && Math.sign(Number(height))===1){
                  setDisplay(true)
            }
            else{
                  setErrorMassage("please enter valid value in each section!")
                  setDisplay(false)
            }
      }

     
      
return(<div className=" bg-white flex flex-col justify-around items-center w-[400px] h-[400px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-md">
      <h1 className="text-3xl">BMI calculator</h1>
      <section className="flex flex-col w-[300px]">
            <input type="text" onChange={(e)=>setHeight(e.target.value)} className="border-2 border-gray-400 mb-6 p-3 text-xl rounded-lg focus:outline-none"  placeholder="enter your height (cm)"/>
            <input type="text" onChange={(e)=>setKilogram(e.target.value)} className="border-2 border-gray-400 mb-6 p-3 text-xl rounded-lg focus:outline-none" placeholder="enter your weight (kg)" />
            <button onClick={()=>getBMI()} className="border-2 border-gray-600 p-3 text-xl rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600" >calculate your BMI</button>
      </section>
      <section style={{visibility:display?"visible":"hidden"}} className="border-2 border-gray-500 w-[300px] h-[100px] flex flex-col justify-evenly rounded-lg">
           <div className="ml-2 text-xl">your BMI : {BMI}</div>
           <div className="ml-2 text-xl">Result : {result}</div>
      </section>
      {!display && <h1 className="absolute bottom-1 text-red-700">{errorMassage}</h1>}
</div>);

}

export default App;
