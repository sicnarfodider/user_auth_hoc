import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import Secret from './secret-list';
import Protected from './protected';
import auth from '../hoc/auth';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => (
    <div className="container">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/secret"  component={Secret}/>
        <Route path="/protected"  component={auth(Protected)}/>
        <h1 className="center-align"> User Auth </h1>
    </div>
);

export default App;
