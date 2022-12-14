
import React, { useEffect, useState } from 'react'

import List from './components/Lista'
import Form from './components/Form'
import {Sub ,Subresponse,ResponseApi} from './types.d'

import axios from 'axios';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';

 interface AppState{
  subs:Array<Sub>,
  newSubs:number
 }
 
function App() {
  const [subs,setSubs]=useState<AppState['subs']>([])
  const[newSubs,setNewsubs]=useState<AppState['newSubs']>(0)
  useEffect (  ()=>{
      const FetchSubs= () : Promise<ResponseApi>=>{ 
      return fetch("http://localhost:3001/api/items")
                 .then(res => res.json())
          }
      const mapSubs= (apiResponse :ResponseApi):Array<Sub> => {
         return apiResponse.items.map(e =>{            
              return {
                id:e[0].id,
                title:e[0].title,
                price:e[0].price,
                picture:e[0].picture
                 }
              })
         }     
      FetchSubs().then(apiSubs=>{
            const subs=mapSubs(apiSubs)
            setSubs(subs)
          })                              
   },[])

  const handleNewSubs = (newSubs:Sub) :void =>{
    setSubs(subs => [...subs,newSubs])
    setNewsubs(n => n+1)
  }
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Form  onNewSubs={handleNewSubs}/>}/>
         
        <Route path='/items'  element={<List subs= {subs} />}/>
        </Routes>
       
      </BrowserRouter>
  );
}

export default App;
