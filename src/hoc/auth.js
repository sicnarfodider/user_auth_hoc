import React from 'react';
import {connect} from 'react-redux';

export default function(Wrapped){
    class Auth extends React.Component{

        componentWillMount(){
            if(!this.props.auth){
                this.props.history.push('/')
            }
        }

        render(){
            return(
                <Wrapped {...this.props} />
            )
        }
    }

    function mapStateToProps(state){
        return{
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth);
}
