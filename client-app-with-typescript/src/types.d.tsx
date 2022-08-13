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