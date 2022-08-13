import React from "react"
import {Sub} from '../types.d'


interface Props{
    subs: Array< Sub >   
}

const List = ({subs}:Props) =>{

    return(

        <ul>
        {
          subs.map(sub =>{
            return(
              <li key={sub.id} >
                <img src={sub.picture} alt={`avatar ${sub.id}` } />
                <h3> {sub.title} </h3>
                <h4>{sub.price.amount} (<small> {sub.price.currency} </small>) </h4>   
              </li>
            )
          } )
        }
      </ul>
    )

}

export default List ;