import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewRestaurantForm extends Component {
    state = {
        name: '',
        description: '',
        website: '',
        image: '',
        owner: '',
        type: '',
        email: '',


    }

    addRestaurant = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'ADD_TO_LIST', payload: this.state });
        // this.props.history.push
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addRestaurant}>
                    <br />
                    <label for="name">Business Name:</label><br />
                    <input name="name" type="text" value={this.state.name} onChange={this.handleInput} required /><br />

                    <label for="description">Description:</label><br />
                    <textarea name="description" type="text" value={this.state.description} onChange={this.handleInput} required /><br />


                    <label for="website">Website:</label><br />
                    <input name="website" type="text" value={this.state.website} onChange={this.handleInput} required /><br />

                    <label for="owner">Are you the owner of this business?</label><br />
                    {/* <select name="owner" value={this.state.type} onChange={this.handleInput}>
                        <option value="yes">yes</option>
                        <option value="no">no</option> */}
                    <select name="owner" value={this.state.owner} onChange={this.handleInput}>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                    <br />

                    <label for="type">Type of Business*</label><br />
                    <select name="type" value={this.state.type} onChange={this.handleInput}>
                        <option value="restaurants">restaurants</option>
                        <option value="miscellaneous">miscellaneous</option>
                        <option value="wellnes">wellness</option>
                        <option value="retail">retail</option>
                        <option value="professional services">professional services</option>
                        <option value="marketing and consulting">marketing and consulting</option>
                        <option value="arts">arts</option>
                        <option value="health">health</option>
                        <option value="cosmetology">cosmetology</option>
                    </select> <br />

                    <label for="email">Email*</label><br />
                    <input name="email" type="text" value={this.state.email} onChange={this.handleInput} /><br />


                    <label for="zip">Image URL:</label><br />
                    <input name="imageText" type="text" value={this.state.image} /><br />
                    <input name="image" type="submit" />
                </form>
            </div>
        );
    }

}




export default connect()(NewRestaurantForm)