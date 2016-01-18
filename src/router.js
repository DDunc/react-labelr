import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout.js'

export default Router.extend({
    renderPage(page, opts = {layout: true}) {
        if(opts.layout) {
            page = (<Layout>{page}</Layout>)
        }
        React.render(page, document.body)
    },

    routes: {
        '': 'public',  //these can be functions
        'repos': 'repos'
    },

    public() {    //public is reserved word but it will work cause its a prop
        this.renderPage(<PublicPage/>, {layout: false}); //React.render(<PublicPage/>,

    },

    repos() {
        this.renderPage(<ReposPage/>);
        //React.render(<ReposPage/>,
        // document.body);
    }
})