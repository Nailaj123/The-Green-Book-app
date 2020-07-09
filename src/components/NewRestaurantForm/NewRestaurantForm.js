import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewRestaurantForm extends Component {
    state = {
        newRestaurant: {
            name: '',
            description: '',
            website: '',
            image: '',
            tags: []
        }
    }


    handleChange = (event, typeOf) => {
        console.log(event.target.value, typeOf);
        this.setState({
            [typeOf]: event.target.value,

        })
    }

    addRestaurant = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'ADD_TO_LIST', payload: this.state });
        // this.props.history.push
    }



    handleInput = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }
    updateTag = (event) => {
        let tagArray = this.state.tags;
        if (tagArray.includes(event.target.value)) {
            //if in tagArray, take it out
            let indexToSpliceOut = tagArray.indexOf(event.target.value);
            tagArray.splice(indexToSpliceOut, 1);
            this.setState({
                tags: tagArray
            })
        }
        else {
            //if not in tagArray, add it
            this.setState({
                tags: [...this.state.tags, event.target.value]
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addRestaurant}>
                    <input type="submit" onClick={this.populateInputs} />
                    <br />
                    <label for="name">Name:</label><br />
                    <input type="text" value={this.state.name} onChange={(event) => this.handleInput(event, 'name')} /><br />

                    <label for="description">Description:</label><br />
                    <input type="text" value={this.state.description} onChange={(event) => this.handleInput(event, 'description')} /><br />


                    <label for="website">website:</label><br />
                    <input type="text" value={this.state.website} onChange={(event) => this.handleInput(event, 'website')} /><br />


                    <label for="zip">Image:</label><br />
                    <input type="text" value={this.state.image} /><br />
                    <input type="submit" onClick={this.addRestaurant} />
                </form>
            </div>
        );
    }

}




export default connect()(NewRestaurantForm)