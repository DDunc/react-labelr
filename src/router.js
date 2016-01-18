import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'

export default Router.extend({
    routes: {
        '': 'public',  //these can be functions
        'repos': 'repos'
    },

    public() {    //public is reserved word but it will work cause its a prop
        React.render(<PublicPage/>, document.body);
        console.log('public page');
    },

    repos() {
        React.render(<ReposPage/>, document.body);
    }
})