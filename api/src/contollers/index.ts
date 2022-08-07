import { Request,Response } from "express";


import { respon ,responId} from "../functions";


  export const getApiData=async (req:Request,res:Response)=>{  //devuelde  el  objeto solicitado para query 
      //traigo los productos desde Mercado Libre 
      let {name}=req.query
      console.log(name)
      try{
      let resp= await  respon()// funcion que trae productos con el array base 
      //console.log(resp)  
      if(name ) {
        const  prodName=resp.items.filter(e => e[0].title.includes(name as string)) // devuelve los productos por '?name= query' 
            return res.send(prodName)
        }  else{ 
             res.send(resp) //devuelve  todos lo productos  
         } 
      }catch(error){
        console.log(error)
      }
  }


  export const getProducId = async(req:Request,res:Response)=>{  //devuelve el id + detalle
          
        let  {id}=req.params
        let productoId = await responId(id)  // devuelve  el detalle del producto por Id
        //console.log(productoId)
       
        res.send(productoId)
}
 

  


  









    


