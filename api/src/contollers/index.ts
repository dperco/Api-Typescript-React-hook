import { Request,Response } from "express";
import { apiResponse, responApi } from "../types";

import axios from "axios";

  export const getApiData=async (req:Request,res:Response)=>{  //devuelde  el  objeto solicitado para query 
      //traigo los productos desde Mercado Libre 
      let name=req.query 
     const urlApi:string="https://api.mercadolibre.com/sites/MLA/search?q=:celulares";    
     const  respon= () =>{ 
        return  axios.get<responApi>(urlApi)
                 .then(respo=>{return  respo.data.results  })
                          
      }
      //console.log(respon())
      let resp= await respon()
       console.log (resp) 
           
       let regisProd= resp.map((e:any)=> {
        return{
                
                  categories:e.category_id,
                  id : e.id,
                  title :e.title,
                  price:e.price,
                  currency: e.currency_id,
                  prices:e.prices.id,
                  amount:e.prices.amount,
                  decimals :e.prices.decimal, 
                  picture :e.thumbnail,
                  condition : e.condition,
                  free_shipping:e.shipping.free_shipping
       } })

       let  categories=[];
       let items=[{
                  id:'',
                  title:'',
                  price:{
                     currency:'',
                     amount:0,
                     decimals:0
                  }
               }];
      let  picture=[];
       let condition=[];
      let  free_shipping=[]; 
      
      
      for(let i=0;i < regisProd.length ;i++){
        categories[i]=regisProd[i].categories
         items[i]={
                 id:regisProd[i].id,
                 title:regisProd[i].title,
                 price:{
                    currency:regisProd[i].currency,
                    amount: Math.trunc(regisProd[i].price),
                    decimals:regisProd[i].price % 1
                 } } ;
           picture[i]=regisProd[i].picture;
           condition[i]=regisProd[i].condition;
           free_shipping[i]= regisProd[i].free_shipping
         } 
         let prod={
          name:'Daniel',
          lastname:'Perco',
          Categories:categories,
          items:items,
          picture:picture,
          condition:condition,
          free_shipping:free_shipping
         }
      
    return  res.send(prod) // devuelvo  el formato esperado  para query
  
  }


  export const getProducId = async (req:Request,res:Response)=>{  //devuelve el id + detalle
             let {id}=req.params
           //  console.log(id)
        try{
             let urlId1=`https://api.mercadolibre.com/items/${id}`;
             let url2=`https://api.mercadolibre.com/items/${id}/description`
             const resp= await 
                     axios.all([axios.get(urlId1),
                               axios. get(url2) ])
                          .then(axios.spread((data1,data2)=>
                             { 
                             return { 
                              
                                     item:{
                                            id: data1.data.id,
                                            title:data1.data.title,
                                            price: {
                                            currency: data1.data.currency_id,
                                            amount:data1.data.price,
                                            decimals :data1.data.price % 1
                                           },
                                           picture :data1.data.thumbnail,
                                           condition : data1.data.condition,
                                           free_shipping:data1.data.shipping.free_shipping,
                                           sold_quentity:data1.data.sold_quantity  ,  
                                           description:data2.data.plain_text
                                         }           
                                      } 
                            
                              }
                              
                              ))

         
            console.log(resp) 
           res.send(resp);
    } catch(error){console.log(error)}      
         
}
 

  


  









    


