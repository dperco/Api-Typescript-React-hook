 import axios from 'axios';

import { apiResponse,producId} from '../types';

export const  respon= () =>{ //ordenar datos que llegan desde la Api 
        try{ 
        const urlApi:string="https://api.mercadolibre.com/sites/MLA/search?q=:celulares"; 
        return  axios.get(urlApi)
                .then(((prod)  =>{return  prod.data.results  }))  
                .then((e:apiResponse[]) => e.map(r => {
                         return{
                            
                            category:r.category_id,    
                            items:[ {    
                                id:r.id ,
                                title:r.title,   
                                price:{ 
                                   currency: r.currency_id,
                                   amount:Math.trunc(r.price), 
                                   decimals:r.price % 1
                                 },
                            
                                picture:r.thumbnail,
                                condition:r.condition,
                                free_shipping:r.shipping.free_shipping 
                              }]
                          } 
                            
                }))
                .then(e => {
                        return{
                                author:
                                {
                                        name:'Daniel',
                                        lastname:'Perco'
                                },
                                categories:e.map(r=> r.category),
                                items:e.map(t=>t.items)
                        }
                })
          }
          catch(error){

                
                
                  console.log(error)
        
             
          };
                               
 }

 export async function responId  (id:string)  {  //devuelve el id + detalle
        
        let urlId1=`https://api.mercadolibre.com/items/${id}`;
        let url2=`https://api.mercadolibre.com/items/${id}/description`
        const resp= await 
                axios.all([axios.get(urlId1),
                          axios. get(url2) ])
                     .then(axios.spread((data1,data2):producId=>
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
                                      sold_quentity:data1.data.sold_quantity,  
                                      description:data2.data.plain_text
                                    }           
                                 } 
                          
                         }
                         
                         ))
                         .then(e =>{
                                return{
                                        author:
                                        {
                                                name:'Daniel',
                                                lastname:'Perco'
                                        },
                                        item:e.item    
                                }
                         })

    
      return resp ;
    
     
}


       
                
                       

        

