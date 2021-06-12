import React from 'react'
import Memes from '../components/Memes'
import MemeInput from './MemeInput'
import { connect } from 'react-redux'
import { fetchMemes } from '../actions/fetchMemes'
import { Route, Switch} from 'react-router-dom'
import Meme from '../components/Meme'



class MemesContainer extends React.Component {

    componentDidMount(){
        this.props.fetchMemes()
    }


    render() {

        return(
            <Switch>
            <div>
                <Route exact path='/memes/new' component={MemeInput}/>
                <Route path ='/memes/:id' render={(routerProps) => <Meme {...routerProps} memes={this.props.memes}/> } />
                <Route exact path='/memes' render={(routerProps) => <Memes {...routerProps} memes={this.props.memes}/> } />
            </div>
            </Switch>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        memes: state.memes
    }
}

export default connect(mapStateToProps, { fetchMemes })(MemesContainer)

//add return link on meme show page