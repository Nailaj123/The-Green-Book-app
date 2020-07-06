import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddBusiness extends Component {

    state = {
        newBusiness: {
            name: '',
            description: '',
            image: '',
            website: ''
        },
        // newBusiness: {
        //     street: '',
        //     city: '',
        //     state: '',
        //     zip: '',
        // },


        finalObject: {
            name: '',
            description: '',
            image: '',
            website: ''
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
                image: 'public/download-1.png',
                website: 'https://fermentary.one/'
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

                    <label for="website">Website:</label><br />
                    <input type="text" value={this.state.finalObject.website} /><br />

                    <label for="zip">Image:</label><br />
                    <input type="text" value={this.state.finalObject.image} /><br />
                    <input type="submit" onClick={this.AddBusiness} />
                </form>
            </div>
        );
    }
}






export default connect()(AddBusiness);