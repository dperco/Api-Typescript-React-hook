//import { type } from "os"
import React, { useReducer } from "react"
import {  Prod } from "./types"

interface FormState{
    inputValues: Prod
}

const INITIAL_STATE={
    id:'',
    title:'',
    price:0,
   currency:'',
   picture:'',


}
type FormReducerAction = 
         {type:"change_value",
                payload:{
                inputName:string,
               inputValue:string
             }
            }|{
         type:"clear"
         
         }


interface FormProps {  

    onNewProd : React.Dispatch<React.SetStateAction<Prod[]>>

    }
 const fotmReducer = (state:FormState["inputValues"],action:FormReducerAction) => { 
    switch (action.type){
        case "change_value": 
            const{inputName,inputValue}=action.payload
                  
                return{
                    ...state,
                    [inputName]:inputValue
                }
             
         case "clear":
             return INITIAL_STATE
        
             
          }
   }

const Form =( {onNewProd}:FormProps)=> {

   // const [inputValue,setInputValue]=useState<FormState>(INITIAL_STATE )

    /// REDUCER

    const [inputValue,Dispatch]=useReducer(fotmReducer,INITIAL_STATE)


    const handleSubmit =(e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        onNewProd ( prod => ([...prod,inputValue]))
        Dispatch({type:"clear"})
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=> {
        const {name,value}=e.target
        Dispatch({
            type:"change_value",
            payload:{
                inputName:name,
                inputValue:value
            }
        })
      
    }
    const handleClear = ()=> {
        Dispatch( {type:"clear"})
    }




    return(

        <div className="form">
              <form   onSubmit={handleSubmit} className='form'>
              
              <input   onChange={handleChange} className='holder'  value={inputValue.id} type='text'name='id'  placeholder="siempre buscando" />
              <button type="submit"  className="button"></button>
              {/* <button   onClick={handleClear} type="button"  className="button">clear</button> */}
              </form>

        </div>
    )




}

export default Form;