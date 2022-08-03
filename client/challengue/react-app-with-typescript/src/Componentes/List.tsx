import {Props} from './types'



const List =({prods}:Props)=> {
    const renderList = (): JSX.Element[] =>{
        return prods.map(pro =>{
                 return(
                    <li  key={pro.id}>
                    <img src= {pro.picture}  alt={'phone'}   />
                    <h4>{pro.title} </h4>
                    <h4>{pro.price} (<small> {pro.currency} </small>) </h4>          
                    </li>
                   
                    
                 )
        })
    }



   return (

    <ul>
    { renderList() }
    </ul>

  )

}

export default  List;
