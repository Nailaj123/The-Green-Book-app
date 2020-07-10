import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css'


class Search extends Component {
    state = {
        searchInput: "",
        edit: {
            name: '',
            description: '',
            editable: false
        }
    }

    search = () => {
        let searchString = this.state.searchInput;
        console.log(`gonna search for ${searchString}`);
        this.props.dispatch({
            type: "FETCH_LIST",
            payload: searchString
        });
        // this.props.history.push("/list");
    };

    trackSearchInput = event => {
        this.setState({
            searchInput: event.target.value
        });
    };

    handleClick = (id,) => {
        this.props.dispatch({
            type: 'FETCH_DETAILS', payload: id
        })
        this.props.history.push('/item');
    }

    handleClick1 = (id) => {
        const user = this.props.user.id
        const data = { id, user }
        this.props.dispatch({ type: 'ADD_TO_FAVORITES', payload: data });
        alert('added!')
        // console.log('user', user)
        // console.log('id', id)
    }


    handleChange = (event, typeOf) => {
        console.log(event.target.value, typeOf);
        this.setState({
            [typeOf]: event.target.value,

        })
    }

    addToNewRestaurant = () => {
        this.props.history.push('/form');

    }

    render(props) {
        return (
            <div class='body'>
                <div class='results'>
                    Search black and brown owned businesses!
                    <br />
                    <input
                        type="text"
                        onChange={this.trackSearchInput}
                        placeholder="restaurants salons"
                        value={this.state.searchInput}
                    />
                    <button onClick={this.search}>Search</button>
                    <ul>
                        {this.props.search.map(businesses => (
                            <li key={businesses.id}>
                                <button class='imagebtn' onClick={() => this.handleClick(businesses.id)}><img height='200px' height='200px' src={businesses.image} /></button>
                                <br />
                                {businesses.name}
                                <br />
                                {businesses.description}
                                <br />
                                {businesses.website}
                                <br />
                                <button class='favorite' onClick={() => this.handleClick1(businesses.id)}>Favorite</button>
                            </li>
                        ))}
                    </ul>


                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    search: state.search,
    user: state.user
});






export default connect(mapStateToProps)(Search);