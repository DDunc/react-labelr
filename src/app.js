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

window.app = {
    init() {
        this.router = new Router();  //could do new Router({pushState:
        // false}) to not update url bar
        this.router.history.start(); //this makes it grab the browser history
    }
};

window.app.init();