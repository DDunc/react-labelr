import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
//xhr works like request, dope
import xhr from 'xhr'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout.js'
import app from 'ampersand-app'


export default Router.extend({
    renderPage(page, opts = {layout: true}) {
        if(opts.layout) {
            page = (<Layout>{page}</Layout>)
        }
        React.render(page, document.body)
    },

    //colon: works like express
    routes: {
        '': 'public',  //these can be functions
        'repos': 'repos',
        'login': 'login',
        'auth/callback?:query': 'authCallback'
    },

    public() {    //public is reserved word but it will work cause its a prop
        this.renderPage(<PublicPage/>, {layout: false}); //React.render(<PublicPage/>,
        console.log(window.location.origin);

    },

    repos() {
        this.renderPage(<ReposPage/>);
        //React.render(<ReposPage/>,
        // document.body);
    },

    login() {
        //it's a get request, so we pass the params as a query string
        //keep in mind here that I and the app are the client here
        //this is dope, cause window.location.origin is just last page, so
        // no need to change for production
        //window location origin is not a string, idiot!
        window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
                client_id: "942638e31e7b79d78a35",
                redirect_uri: window.location.origin + "/auth/callback",
                scope: "user,repo"
            })
    },
    //query gets passed here automagically from colon :query, but now we
    // have the code
    authCallback(query) {
        query = qs.parse(query);
        //console.log(query.code);
        //fucking more heroku bullshit
        xhr({
            url: 'https://gatekept-localhost.herokuapp.com/authenticate/' + query.code,
            json: true
        }, (err, req, body) => {
            console.log(err, body);
            app.me.token = body.token;
            console.log(body.token);
        })
    }
})