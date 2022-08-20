import React from "react"
import {Sub} from '../types.d'
import '../components/List.css'

interface Props{
    subs: Array< Sub >   
}

const List = ({subs}:Props) =>{

    return(
       
        <ul>
        {
          subs.map(sub =>{
            return(  
              <div className="prod">
              <li key={sub.id} >
                <img  className="prod"   src={sub.picture} alt=''/>
                <p>${sub.price.amount}  </p>
                <p> {sub.title} </p>
             
              </li>
              </div> 
            )
          } )
        }
      </ul>
    
    )

}

export default List ;