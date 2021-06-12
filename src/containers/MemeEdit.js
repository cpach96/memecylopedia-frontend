import React from 'react'
import { connect } from 'react-redux'
import { editMeme } from '../actions/editMeme'


class MemeEdit extends React.Component{

    state = {
        title: '',
        image: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let meme = {...this.state, id: this.props.meme.id}
        this.props.editMeme(meme)
        this.setState({
            title: '',
            image: '',
            description: ''
        })
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Meme edit</label><br /> <br/>
                    <label>Meme Title: </label>
                    <input type='text' placeholder="Meme Title" value={this.state.title} name="title" onChange={this.handleChange}/><br />
                    <label>Meme Image: </label>
                    <input type='text' placeholder="image_url" value={this.state.image} name="image" onChange={this.handleChange}/><br />
                    <label>Meme Description: </label>
                    <input type='text' placeholder="Meme Description" value={this.state.description} name="description" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>

        )
    }
}

export default connect(null, { editMeme })(MemeEdit)