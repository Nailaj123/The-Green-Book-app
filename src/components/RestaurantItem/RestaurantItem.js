import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantItem extends Component {

    render() {
        return (
            //maps through data to display details of selected restaurant 
            <div className="Restaurant Item">
                <p>Details</p>
                <div>
                    {this.props.details.map(item => {
                        return (
                            <div key={item.id}>
                                <p> {item.name}</p>
                                <img height='200px' width='200px' src={item.image}></img>
                                <p> {item.description},<a href={item.website}>Click here</a></p>
                                {/* {item.website} */}
                            </div>
                        )
                    })}
                </div>


            </div>

        );
    }
}

const getStore = reduxState => ({
    details: reduxState.details,
});

export default connect(getStore)(RestaurantItem);