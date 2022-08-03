export interface apiResponse {        //respuesta de la Api  de Mercado libre 
   
    categories:string;
    id:string;
    title:string;
    price:number;
    currency:string;
    amount:number;
    decimals:number;
    picture:string;
    condition:string;
    free_shipping:boolean;
  }

export interface  responApi {

site_id	:string,
country_default_time_zone:string,
query:string,
paging:	{},
results	:[{}],
sort:{},
available_sorts:[{}],
filters:[{}],
available_filters:[{}]
}