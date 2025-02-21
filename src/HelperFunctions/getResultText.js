export const getResultText=(BMI)=>{
    let result="";
    if(BMI<18.5){
        result="Underweight";
    }
    else if(BMI>=18.5 && BMI<24.9){
        result="Normal Weight";
    }
    else if(BMI>=25 && BMI<29.9){
        result="Overweight";   
    }
    else if(BMI>30){
        result="Obese";
    }
    return result;
}