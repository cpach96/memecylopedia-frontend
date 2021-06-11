import React from 'react'
import Memes from '../components/Memes'
import MemeInput from '../components/MemeInput'
import { connect } from 'react-redux'
import { fetchMemes } from '../actions/fetchMemes'



class MemesContainer extends React.Component {

    componentDidMount(){
        this.props.fetchMemes()
    }


    render() {

        return(
            <div>
                <MemeInput/>
                <Memes memes={this.props.memes}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        memes: state.memes
    }
}

export default connect(mapStateToProps, { fetchMemes })(MemesContainer)