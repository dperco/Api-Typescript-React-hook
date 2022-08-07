export interface name{
  name:'Daniel',
  lastname:'Perco'
}



export interface apiResponse {        //respuesta de la Api  de Mercado libre 
   
    category_id:string[],
    id : string,
    title :string,
    price:number,
    currency_id:string,
    prices:{ 
             id:string,
             amount:number,
           }
    thumbnail:string,
    condition:string,
    shipping:{free_shipping:boolean }
          
  }

export interface producId {
  item:{ 
      id:string,
      title:string,
      price:{
         currency:string,
         amount:number,
         decimals:number
      },
      picture:string,
      condition:string,
      free_shipping:boolean,
      sold_quentity:number,
      description:string
   }
}