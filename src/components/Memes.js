import React from 'react'
import Meme from './Meme'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteMeme } from '../actions/deleteMeme'


const Memes = (props) => {

    const handleDelete = (meme) =>{
        
        props.deleteMeme(meme.id)
    }


    return(

        <div>
            {props.memes.map(meme =>
                 <li key={meme.id}>
                     <Link to={`/memes/${meme.id}`}><img src={meme.image}></img></Link><button onClick={() => handleDelete(meme)}>Delete Meme</button>
                     </li>)}
        </div>
    )

}
export default connect(null, {deleteMeme})(Memes)

//add navbar 4th stateless, 5th something with styling random memes?