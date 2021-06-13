import React from 'react';
import { connect } from 'react-redux'
import MemesContainer from './containers/MemesContainer'
import { Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'



class App extends React.Component {

    render(){
        return(
        <div className="App">
            <Navbar />
            <MemesContainer/>   
        </div>
        )
    }

}



export default connect()(App);