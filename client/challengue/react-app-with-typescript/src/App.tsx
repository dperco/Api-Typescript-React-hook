import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import List from './Componentes/List';
import Form from './Componentes/Form'
import { Prod, ResponseApi} from './Componentes/types';
import axios from 'axios';



interface AppState{
  prods:Array<Prod>
  newSubNumber:number
}


// const INITIAL_STATE =[{
//   id:'MAL3456789',
//   title:'Mototola',
//   price:10000,
//  currency:'ARS',
//  picture:"http://http2.mlstatic.com/D_867153-MLA48271757626_112021-I.jpg",
//  },
//  {
//   id:'MAL980765',
//   title:'SAMSUNG',
//   price:7800,
//  currency:'ARS',
//  picture:"http://http2.mlstatic.com/D_927874-MLA45401334658_032021-I.jpg"
//  },
//  {
//   id:'MLA2345980',
//   title:'NOKIA',
//   price:45000,
//  currency:'ARS',
//  picture:"http://http2.mlstatic.com/D_676914-MLA47887111268_102021-I.jpg"
//  },
//  {
//   id:'MAL8763098',
//   title:'NIKIODEOM',
//   price:89000,
//  currency:'ARS',
//  picture:"http://http2.mlstatic.com/D_982115-MLA49387651611_032022-I.jpg"
//  }


//]


 function App() {

const [prods,setProd]= useState<AppState["prods"]>([])
const [newSubNumber,setNewSubNumber]=useState<AppState["newSubNumber"]>(0)

useEffect(()=>{
  
 // async function getApidata (){
  const apiProds= ()  =>{ 
     return fetch("http://localhost:3001/api/items")
                       .then(response => response.json())
                       .then(json => json.results)
                       .then(e => console.log(e))
    }
     console.log(apiProds())
   let a=apiProds().then(e=>console.log(e))

   console.log(a)
// const res=apiProds().then(e=>{
//   return(
//      e
//   )
// })



//  console.log(res)
                  // let dato=fetch.map((data:any)=>{
                  //   return {
                          
                  //     name:'Daniel',
                  //     lastname:'Perco',
                  //     categories:data.category_id,
                  //     id:data.id,
                  //     title:data.title,
                  //     price:data.price,
                  //     currency:data.currency_id,
                  //     picture:data.thumbnail,
                  //     condition:data.condition,
                  //     free_shipping:data.shipping.free_shipping
       
       
                  //  }});
                  //  let categories=[];
                  //  let items=[{
                  //      id:'',
                  //      title:'',
                  //      price:{
                  //          amount:0,
                  //          currency:"",
                  //          decimals:0
                  //      }
                  //  }];
                  //  let picture=[""];
                   
                  //  let condition=[];
                  //  let free_shipping=[];  
                   
                  //  for(let i=0;i < dato.length ;i++){
                  //   categories[i]=dato[i].categories;
                  //    items=[{
                  //            id:dato[i].id,
                  //            title:dato[i].title,
                  //            price:{
                  //               currency:dato[i].currency,
                  //               amount: Math.trunc(dato[i].price),
                  //               decimals:dato[i].price % 1
                  //            }  } ];
                  //      picture[i]=dato[i].picture;
                  //      condition[i]=dato[i].condition;
                  //      free_shipping[i]= dato[i].free_shipping
                  //    } 


                    //  let prod={
                    //   name:'Daniel',
                    //   lastname:'Perco',
                    //   Categories:categories,
                    //   items:items,
                    //   picture:picture,
                    //   condition:condition,
                    //   free_shipping:free_shipping
                    //  }
                  
   //     return  fetch                  
   // }
  
  // let aux= getApidata().then(res => {return res })
  //    aux.then(j => {
  //     return {
           
  //     }
          
  //    })
   

//    console.log(rest)        
//  setProd(rest)
  //console.log(aux)
 },[])
const handleNewProd= (newProd:Prod):void=>{
  setProd(prods=>[...prods, newProd])
  setNewSubNumber(n=>n+1)

}



  return (
    <div className="App">
      <header className="App-header">
      <h1>productos </h1>
      <Form  onNewProd= {setProd}   />
      <List prods= {prods} />
      
      </header>
    </div>
  );
}

export default App;
