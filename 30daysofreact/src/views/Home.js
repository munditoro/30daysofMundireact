import React from "react";
import { connect } from 'react-redux';
import { fetchNewTime } from '../redux/actionCreators';

const Home = (props) => (
    <div>
        <h1> Welcome Home from Redux!</h1>
        <p>Current Time: {props.currentTime} </p>
        <button onClick={props.updateTime}>
            Actualizar la hora
        </button>
    </div>
);

const mapStateToProps = state => {
    console.log(state.currentTime);
    return{
        currentTime: state.currentTime.currentTime
    }
}

const mapDispatchToProps = dispatch => ({
    updateTime: () => dispatch(fetchNewTime())
})

export default connect(
                    mapStateToProps, 
                    mapDispatchToProps)(Home);