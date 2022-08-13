
import React, { useEffect, useState } from 'react';

import './App.css';
import List from './components/Lista'
import Form from './components/Form'
import {Sub ,Subresponse} from './types.d'
import { idText, textChangeRangeIsUnchanged } from 'typescript';
import axios from 'axios';

 interface AppState{
  subs:Array<Sub>,
  newSubs:number
 }

 
  
function App() {
  const [subs,setSubs]=useState<AppState['subs']>([])
  const[newSubs,setNewsubs]=useState<AppState['newSubs']>(0)
  useEffect (()=>{
    try{ 
    const fetchSubs= () =>{ 
         return axios.get<Subresponse>("http://localhost:3001/api/items/celulares")
               .then(response => response.data)}
    const mapFromApi = (apiResponse : Subresponse):Array<Sub> =>{       
           return apiResponse.map(subApi => {
                    const {
                       id,
                       title,  
                      price:amount,
                      price:currrency,
                      picture
                    }= subApi
                    return{
                      id,
                      title,
                      price:amount,
                      currency:currrency,
                      picture
                    }
           })
            

       }
  
      
  fetchSubs()
        .then(apiSubs=> {
             const subs = mapFromApi(apiSubs)
             setSubs(subs)
        })
   }catch(error){console.log(error)}
  },[])

  const handleNewSubs = (newSubs:Sub) :void =>{
    setSubs(subs => [...subs,newSubs])
    setNewsubs(n => n+1)
  }
  return (
    <div className="App">
       <h1> Phones </h1>
       <Form onNewSubs={handleNewSubs}/>
       <List subs= {subs} />
    </div>
  );
}

export default App;
