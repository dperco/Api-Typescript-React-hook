import React, { useReducer, useState } from "react";
import {Sub}  from '../types.d'
import { Dispatch} from 'redux'
import '../components/Form.css'
interface FormState {
   inputvalue:Sub
}

interface FormsProps {
    onNewSubs : (newSub :Sub)=> void
}

const Initial_State={
    id:'',
    title:'',
    price:{
    currency:'',
    amount:0,
    decimals:0
       },
    picture:''

}

type FormReducerAction ={
    type:"change_value",
    payload:{
        inputName:string,
        inputValue:string
    }  }  |{
        type:"clear"
    
 }
  

const formReducer=(state:FormState["inputvalue"],action:FormReducerAction) =>{
      switch(action.type){
            case "change_value":
                const {inputName,inputValue}= action.payload
                return {
                    ...state,
                    [inputName]:inputValue
                }

           case "clear" : return Initial_State
      }

}
const Form = ( {onNewSubs}:FormsProps) =>{
    //const [inputvalue,setInputvalue]=useState<FormState['inputvalue']>(Initial_State)

const  [inputValue,dispatch]=useReducer(formReducer,Initial_State)

const handleSubmit = ( e : React.ChangeEvent<HTMLFormElement>)=> {
        e.preventDefault()
        onNewSubs(inputValue)
        handleClear()
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
          const {name,value } =e.target
       dispatch({
            type:"change_value",
            payload:{
                inputName:name,
                inputValue:value
            }
            })
        
    
    }
    const handleClear = () =>{
        dispatch({type:"clear"})
    }

    
    return (
        <div  className="form">
            <form  onSubmit={handleSubmit}> 
            <div className="input">
            <input  className="input"  onChange={handleChange} value={inputValue.title} type={'text'}  name='buscar' placeholder="Siempre buscando productos"/>
            </div>
            <div>
            <button >Buscar</button> 
            </div>
            </form>
        </div>
        
    )
}

export default Form ;