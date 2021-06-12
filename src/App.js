import React from 'react';
import { connect } from 'react-redux'
import MemesContainer from './containers/MemesContainer'
import { Route, Link } from 'react-router-dom'




class App extends React.Component {

    render(){
        return(
        <div className="App">
            <MemesContainer/>
            
        </div>
        )
    }

}



export default connect()(App);