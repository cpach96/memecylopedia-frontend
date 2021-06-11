import React from 'react'
import { connect } from 'react-redux'
import { addMeme } from '../actions/addMeme'


class MemeInput extends React.Component{

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
        this.props.addMeme(this.state)
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new Meme to the database!!</label><br /> <br/>
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

export default connect(null, { addMeme })(MemeInput)