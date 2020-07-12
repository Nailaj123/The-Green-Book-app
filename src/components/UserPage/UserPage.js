import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_EVERYTHING' })
  }
  render() {
    console.log(this.props.list)
    return (
      <div>
        <h1 id="welcome">
          Welcome, {this.props.user.username}!
    </h1>
        <ul style={{ margin: 'auto' }}>
          {this.props.list.map(businesses => (
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


        <LogOutButton className="log-in" />
      </div>

    )
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  list: state.allReducer,
  user: state.user,
});


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
