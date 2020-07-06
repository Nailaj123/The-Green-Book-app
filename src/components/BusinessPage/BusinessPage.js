import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';

// componentDidMount() {
//     this.getBusiness();
// }
// getBusiness = () => {
//     console.log('In getBusiness');
//     this.props.dispatch({ type: 'FETCH_BUSINESSES' });
// }


class BusinessPage extends Component {
    render() {
        return (
            <div className="Business Page">
                <p>Details</p>
                <div>
                    {this.props.details.map(item => {
                        return (
                            <div key={item.id}>
                                <p> {item.name}</p>
                                <img height='200px' width='200px' src={item.image}></img>
                                <p> {item.description}</p>
                            </div>
                        )
                    })}
                </div>


            </div >

        );
    }
}
const getStore = reduxState => ({
    details: reduxState.details,
});

export default connect(getStore)(BusinessPage);

// const putPropsOnRedux = (reduxStore) => ({
//     reduxStore
// })

// export default withRouter(connect(putPropsOnRedux)(BusinessPage));