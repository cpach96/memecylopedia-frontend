import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render() {

        return (
            <div className="home">
                <h1>Welcome to Memecyclopedia the premier meme database!</h1>
                <h2>This is my final Flatiron School project! A mix of React, Redux and Ruby on Rails serving up the data!</h2>
                <h3>Tap the meme below to check out my work!</h3>
                <Link to={'/memes'}>
                <img alt="doge to the moon" className="center" src="https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png"></img>
                </Link>
            </div>
        )
    }
}

export default Home