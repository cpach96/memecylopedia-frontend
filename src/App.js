import React from 'react';
import { connect } from 'react-redux'
import {fetchMemes} from './actions/fetchMemes'
class App extends React.Component {
    
    componentDidMount(){
        this.props.fetchMemes({type: 'FETCH_MEMES', payload: {title: 'best meme'}})
    }
   
    

    render(){
        return(
        <div>APP</div>
        )
    }

}



export default connect(null, { fetchMemes })(App);