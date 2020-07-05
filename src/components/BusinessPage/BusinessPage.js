import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class BusinessPage extends Component {
    componentDidMount() {
        this.getBusiness();
    }
    getBusiness = () => {
        console.log('In getBusiness');
        this.props.dispatch({ type: 'FETCH_BUSINESSES' });
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}


const putPropsOnRedux = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(putPropsOnRedux)(BusinessPage));