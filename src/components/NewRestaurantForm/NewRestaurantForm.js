import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewRestaurantForm extends Component {
    state = {
        newRestaurant: {
            name: '',
            description: '',
            website: '',
            image: '',
            owner: '',
            type: '',
            email: '',

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
    // handleClickOutside() {
    //     this.setState({
    //         listOpen: false
    //     })
    // }
    // toggleList() {
    //     this.setState(prevState => ({
    //         listOpen: !prevState.listOpen
    //     }))
    // }
    // render() {
    //     const { list } = this.props
    //     const { listOpen, headerTitle } = this.state
    //     return (
    //         <div className="dd-wrapper">
    //             <div className="dd-header" onClick={() => this.toggleList()}>
    //                 <div className="dd-header-title">{headerTitle}</div>
    //                 {listOpen
    //                     ? <FontAwesome name="angle-up" size="2x" />
    //                     : <FontAwesome name="angle-down" size="2x" />
    //                 }
    //             </div>
    //             {listOpen && <ul className="dd-list">
    //                 {list.map((item) => (
    //                     <li className="dd-list-item" key={item.id} >{item.title}</li>
    //                 ))}
    //             </ul>}
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.addRestaurant}>
                    <input type="submit" onClick={this.populateInputs} />
                    <br />
                    <label for="name">Business Name:</label><br />
                    <input type="text" value={this.state.name} onChange={(event) => this.handleInput(event, 'name')} /><br />

                    <label for="description">Description:</label><br />
                    <input type="text" value={this.state.description} onChange={(event) => this.handleInput(event, 'description')} /><br />


                    <label for="website">Website:</label><br />
                    <input type="text" value={this.state.website} onChange={(event) => this.handleInput(event, 'website')} /><br />

                    <label for="owner">Are you the owner of this business?</label><br />
                    <input type="text" value={this.state.owner} onChange={(event) => this.handleInput(event, 'owner')} /><br />

                    {/* <div class="dropdown">
                        <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                        <div id="myDropdown" class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> */}
                    <label for="type">Type of Business*</label><br />
                    <input type="text" value={this.state.type} onChange={(event) => this.handleInput(event, 'type')} /><br />

                    <label for="email">Email*</label><br />
                    <input type="text" value={this.state.email} onChange={(event) => this.handleInput(event, 'email')} /><br />


                    <label for="zip">Image:</label><br />
                    <input type="text" value={this.state.image} /><br />
                    <input type="submit" onClick={this.addRestaurant} />
                </form>
            </div>
        );
    }

}




export default connect()(NewRestaurantForm)