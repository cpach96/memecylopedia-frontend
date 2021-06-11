import React from 'react'


const Memes = (props) => {

    console.log(props)
    return(

        <div>
            {props.memes.map(meme => <li key={meme.id}>{meme.image} - {meme.title} - {meme.description}</li>)}
        </div>
    )

}
export default Memes