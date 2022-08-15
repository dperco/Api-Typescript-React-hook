export interface Sub 
{ 
  id:string,
  title:string,
  price:{
     currency:string,
     amount:number,
     decimals:number
        },
  picture:string
 }

export interface ResponseApi {
   author:{
         name:string,
         lastname:string
   },
   categories:string[],
   items:[[{
       id:string,
       title:string,
       price:{
           amount:number,
           currency:string,
           decimals:number
       },
       picture:string
   }]]
}


 export type Subresponse= Array<{

   id:string,
   title:string,
   price:{
      currency:string,
      amount:number,
      decimals:number
         },
   picture:string


 }>