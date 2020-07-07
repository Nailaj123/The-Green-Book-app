import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewRestaurantForm extends Component {



    state = {
        newRestaurant: {
            name: '',
            description: '',
            image: ''
        },
        newRestaurant: {
            street: '',
            city: '',
            state: '',
            zip: '',
        },

        newRestaurantAddress: {
            name: '',
            description: '',
            street: '',
            city: '',
            state: '',
            zip: '',
        },


        finalObject: {
            name: '',
            description: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            image: ''
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

        this.props.dispatch({ type: 'ADD_TO_LIST', payload: this.state.finalObject })


    }


    populateInputs = () => {
        this.setState({
            finalObject: {
                name: '',
                description: '',
                street: '',
                city: '',
                state: '',
                zip: '',
                image: ''
            }
        });
    }



    render() {
        return (
            <div>
                <form>
                    <input type="submit" onClick={this.populateInputs} />
                    <br />
                    <label for="name">Name:</label><br />
                    <input type="text" value={this.state.finalObject.name} /><br />

                    <label for="description">Description:</label><br />
                    <input type="text" value={this.state.finalObject.description} /><br />


                    <label for="street">Street:</label><br />
                    <input type="text" value={this.state.finalObject.street} /><br />


                    <label for="city">City:</label><br />
                    <input type="text" value={this.state.finalObject.city} /><br />


                    <label for="state">State:</label><br />
                    <input type="text" value={this.state.finalObject.state} /><br />


                    <label for="zip">Zip:</label><br />
                    <input type="text" value={this.state.finalObject.zip} /><br />

                    <label for="zip">Image:</label><br />
                    <input type="text" value={this.state.finalObject.image} /><br />
                    <input type="submit" onClick={this.addRestaurant} />
                </form>
            </div>
        );
    }
}



export default connect()(NewRestaurantForm);