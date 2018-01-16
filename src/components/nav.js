import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { switchAuth} from '../actions';

const Nav = props => {

    function renderBtn(){
        if(props.auth){
            return <button onClick={()=>props.switchAuth(false)} className="btn orange lighten-2">Sign Out</button>
        }
        return <button onClick={()=> props.switchAuth(true)} className="btn purple darken-3">Sign In</button>
    }
    return(
        <nav style={{backgroundColor:"lightpink", padding:"2px 10px", color: "lightblue"}}>
            <Link to="/" className="brand-logo"> The User App </Link>
            <ul className="right">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/secret">????</Link>
                </li>
                <li>
                    <Link to="/protected">O_O</Link>
                </li>
                <li>
                    {renderBtn()}
                </li>
            </ul>
        </nav>
    )
}

function mapStateToProps(state){
    return{
        auth : state.user.auth
    }

}

export default connect(mapStateToProps,{switchAuth})(Nav);
