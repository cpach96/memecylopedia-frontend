import React from 'react'
import MemeEdit from '../containers/MemeEdit'

const Meme = (props) => {

    
    let meme = props.memes[props.match.params.id - 1]
    
    return (
        <div>
        <li>
        {meme ? meme.title : null} - {meme ? <img src={meme.image}></img> : null} - {meme ? meme.description : null}
        </li>
        <MemeEdit meme={meme}/>
        </div>
    )
}

export default Meme