import { type } from "os"
import items_js from "../dbase/items_js"

export interface Prod{  //APP

    id:string,
    title:string,
    price:number,
    currency:string,
    picture:string,
  }

export interface Props {  // LIST

    prods:Array<{
      id:string,
      title:string,
      price:number,
      currency:string,
      picture:string,
      }> }

   export type ResponseApi= Array<{  
               id:string,
               title:string,
               price:number,
               currency:string,
               picture:string  
      
         }>

  export interface ProdDetail {
    detailProd:{
      id:string,
      title:string,
      price:number,
      currency:string,
      picture:string,
      description:string
     }
  }