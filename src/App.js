import React from "react"; 
import { useState } from "react";
import { getResultText } from "./HelperFunctions/getResultText";
import { showContent } from "./HelperFunctions/showContent";
import Inputs from "./Pages/Input/Inputs";
import Result from "./Pages/Result/Result";
import ErrorMessage from "./Pages/ErrorContent/ErrorMessage";
import Header from "./Pages/Header/Header";


function App() {
      const [kilogram,setKilogram]=useState("");
      const [height,setHeight]=useState("");
      const [result,setResult]=useState("");
      const [BMI,setBMI]=useState("");
      const [displayContent,setDisplayContent]=useState(false);
      const [errorMessage,setErrorMessage]=useState("")

      const handleChange=(e)=>{
            setErrorMessage("");
            if(e.target.name==="height"){
                  setHeight(e.target.value);
            }
            if(e.target.name==="mass"){
                  setKilogram(e.target.value)
            }
      }
      

      const getBMI=()=>{

            const BMI=(10_000*(+kilogram)/(+height)**2).toFixed(1);
            const displayContent=showContent(kilogram,height);
            const result=getResultText(BMI);

            if(displayContent){
                  setDisplayContent(true)
            }
            else{
                  setDisplayContent(false);
                  setErrorMessage("please enter valid value in each section!")
            }
            setResult(result);
            setBMI(`${BMI}`);
      }

     
      
return(<div className=" bg-white flex flex-col justify-around items-center w-[400px] h-[400px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-md">
      <Header />
      <Inputs getBMI={getBMI} handleChange={handleChange} />
      <Result displayContent={displayContent} BMI={BMI} result={result} />
      <ErrorMessage displayContent={displayContent} errorMessage={errorMessage}/>
      </div>);

}

export default App;
