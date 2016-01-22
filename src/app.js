//es5 version
//var React = require('react');
//
//var Hello = React.createClass({
//    render: function () {
//        return <div>Hello, {this.props.name}</div>
//    }
//});
//
//React.render(<Hello name="duncan"/>, document.body);

//same thing without jsx
/*var Hello = React.createClass({displayName: "Hello", render: function() {
 return React.createElement("div", null, "Hello ", this.props.name);
 }
});

React.render(React.createElement(Hello, {name: "Duncan"}), document.body) */


//import React from 'react'
//import styles from './styles/main.css'
//
//const Hello = React.createClass({
//    render() {
//        return <div>Hello, {this.props.name}</div>
//    }
//});
//
//React.render(<Hello name="Duncan"/>, document.body);

import Router from './router' //relative path, important!
import styles from './styles/main.styl'
import app from 'ampersand-app'
import Me from './models/me'

//if we didn't put it on window, we couldn't get to on teh console.
window.app = app;

//adding object with method init to ampersand app object through extend method
//big alert here--extend is method we pass an object to, we're not declaring
// it directly
app.extend({
    init() {
        this.me = new Me(); //setting up a new 'me' model
        this.router = new Router();  //could do new Router({pushState:
        // false}) to not update url bar
        this.router.history.start(); //this makes it grab the browser history
    }
});

app.on('local', function(){
    console.log("someone logged in or out", arguments[0]);
});

app.init();