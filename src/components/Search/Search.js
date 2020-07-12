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

    handleClick2 = () => {
        this.props.history.push('/form');
        console.log('clicked')
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
                        placeholder="restaurants arts"
                        value={this.state.searchInput}
                    />
                    <button onClick={this.search}>Search</button>
                    <ul style={{ margin: 'auto' }}>
                        {this.props.search.map(businesses => (
                            <div style={{ backgroundColor: 'white', boxShadow: '10px 10px 5px #AAAAAA', borderRadius: '10px', width: 'min-content', marginTop: '15px', padding: '5px', display: 'in-line-block', marginLeft: 'auto', marginRight: 'auto' }} >


                                <li key={businesses.id} >
                                    {console.log(businesses.image)}
                                    <button class='imagebtn' onClick={() => this.handleClick(businesses.id)}><img height='200px' height='200px' src={businesses.image} /></button>
                                    <br />
                                    <div className='searchName' style={{ textAlign: 'left', width: 'inherit', margin: 'auto' }} >
                                        {businesses.name}
                                        <br />
                                        {businesses.description}
                                        <br />
                                        {businesses.website}
                                        <br />
                                    </div>
                                    <button class='favorite' onClick={() => this.handleClick1(businesses.id)}>Favorite</button>
                                </li>
                            </div>
                        ))}
                    </ul>
                    <div><button onClick={this.handleClick2}>Add Business</button></div>


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