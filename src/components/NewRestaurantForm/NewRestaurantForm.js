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


    }

    addRestaurant = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'ADD_TO_LIST', payload: this.state });
        alert('added!')
        // this.props.history.push
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    populateInputs = () => {
        this.setState({
            name: 'New Dawn Theatre',
            description: 'located in St. Paul, opened in 2018. In a Pioneer Press article, founder Austene Van said the theatre wants to put a spotlight on voices that often are not heard, focusing on minorities, women, and LGBTQIA+ people.Past plays included Crowns and Skeleton Crew.',
            website: 'http://newdawntheatre.org/',
            image: 'https://cdn.vox-cdn.com/thumbor/CU5YqSbsLGNNH2yPealupM9tSvM=/37x0:641x453/1200x900/filters:focal(37x0:641x453):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62078325/safari_20restaurant_20and_20event_20center.0.0.jpg'

        });
    }

    render() {
        return (
            <div>
                <input type="submit" onClick={this.populateInputs} />
                <form onSubmit={this.addRestaurant}>
                    <br />
                    <label for="name">Business Name:</label><br />
                    <input name="name" type="text" value={this.state.name} onChange={this.handleInput} required /><br />

                    <label for="description">Description:</label><br />
                    <textarea name="description" type="text" value={this.state.description} onChange={this.handleInput} required /><br />


                    <label for="website">Website:</label><br />
                    <input name="website" type="text" value={this.state.website} onChange={this.handleInput} /><br />

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

                    {/* <label for="email">Email</label><br />
                    <input name="email" type="text" value={this.state.email} onChange={this.handleInput} /><br /> */}


                    <label for="image">Image URL:</label><br />
                    <input name="image" type="text" onChange={this.handleInput} /><br />
                    {/* value={this.state.image} */}
                    <input name="image" type="submit" />

                    {/* alert added */}
                </form>
            </div>
        );
    }

}




export default connect()(NewRestaurantForm)