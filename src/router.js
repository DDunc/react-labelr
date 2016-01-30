import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
//xhr works like request, dope
import xhr from 'xhr'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout.js'
import app from 'ampersand-app'
import RepoDetail from './pages/repo-detail'


export default Router.extend({
    renderPage(page, opts = {layout: true}) {
        //so we're passing me as a prop in layout, and then we access it in
        // the layout.js file, because the ampersand-react-mixin looks at
        // all the props being passed in, automatically identifies
        // models/collections, and starts watching them, then forcing update
        // on change.
        if(opts.layout) {
            page = (<Layout me={app.me}>
                {page}
            </Layout>)
        }
        React.render(page, document.body)
    },

    //colon: works like express
    //remember, routes have to be on the routes key or they won't be used
    routes: {
        '': 'public',  //these can be functions
        'repos': 'repos',
        'login': 'login',
        'logout': 'logout',
        'repo/:owner/:name': 'repoDetail', //router has split apart on
        // slashes, after colon will be args passed to repoDetail
        'auth/callback?:query': 'authCallback'
    },

    public() {    //public is reserved word but it will work cause its a prop
        this.renderPage(<PublicPage/>, {layout: false}); //React.render(<PublicPage/>,
        console.log(window.location.origin);

    },
    //better to define app.me.repos explicitly
    //whatever={app.whatever} is a prop, denotes it as dynamic
    //if it's an actual html understandable object, you use {{}}, doubles.
    repos() {
        this.renderPage(<ReposPage repos={app.me.repos}/>);
        //React.render(<ReposPage/>,
        // document.body);
    },

    repoDetail (owner, name){
        //method added to the collection model
        const model = app.me.repos.getByFullName(owner + '/' + name);
        this.renderPage(<RepoDetail repo={model}/>);
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
        //console.log(query.code)
        xhr({
            url: 'https://gatekept-localhost.herokuapp.com/authenticate/' + query.code,
            json: true
        }, (err, req, body) => {
            console.log(err, body);
            app.me.token = body.token;
            console.log(body.token);
            //this refers to the xhr request, more library magic
            this.redirectTo('/repos');
        })
    },

    logout () {
        console.log('loggin out');
        window.localStorage.clear();
        window.location = '/'
    }
})