import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddBusiness extends Component {

    state = {
        newBusiness: {
            name: '',
            description: '',
            image: ''
        },
        // newBusiness: {
        //     street: '',
        //     city: '',
        //     state: '',
        //     zip: '',
        // },

        newBusinessAddress: {
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

    AddBusiness = (event) => {
        event.preventDefault()

        this.props.dispatch({ type: 'ADD_TO_LIST', payload: this.state.finalObject })
        // this.emptyInputs()

    }

    populateInputs = () => {
        this.setState({
            finalObject: {
                name: 'One Fermentary & Taproom',
                description: 'ONE Fermentary & Taproom is a brewpub offering our own craft beers in concert with collaboration beers, guest beers, fine wines (sourced by Libation Project) and custom-designed spirits (crafted in collaboration with Tattersall Distilling)',
                street: '(612) 353-4729',
                city: 'Minneapolis',
                state: 'MN',
                zip: '55401',
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
                    <input type="submit" onClick={this.AddBusiness} />
                </form>
            </div>
        );
    }
}






export default connect()(AddBusiness);