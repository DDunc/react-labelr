import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import RepoCollection from './repo-collection'

//for in key ID as part of response is typical way to handle it, so a
// derived property pulls it out of the collection. So put everything as-is
// in the collection, then pull out what you need.

export default Model.extend( githubMixin, {
    //using an auth header
    // FETCH is a backbone method that goes for a URL
    url: 'https://api.github.com/user',

    initialize () {
        this.token = window.localStorage.token;
        //note: NO SPACES on change:token ... like... none!
        this.on('change:token', this.onTokenChange); //this is ampersand
        // and backbone way to define a change EE listener.
    },
    //these are the props we AUTOMAGICALLY pull out when we use fetch method
    //so we can get them app.me.fetch() for URL, and then the user object
    // comes back, and then these fields get populated or aliased at top
    // level based on the url. So in this case, the user object.
    //Kinda weird you can do app.me.login, when I would think it would be
    // app.me.props.login. But the extend is delaing with it differently.
    props: {
        id: 'number',
        login: 'string',
        avatar_url: 'string'
    },

    session: {
        token: 'string'  //our auth token is here
    },
    //will always have a this.repos, even if there's not data
    collections: {
        repos: RepoCollection
    },

    onTokenChange () {
        console.log("on token change fired");
        window.localStorage.token = this.token;
        this.fetchInitialData();
    },
    //replaced by github-mixin helper
    //ajaxConfig () {
    //    return {
    //        headers: {
    //            Authorization: 'token ' + this.token
    //        }
    //    }
    //},
    //fetch is part of the model per ampersand. What it does is make an AJAX
    // request using xhr library to the url prop of the model, and set the
    // resulting json to that model.
    //by default, it uses the key to name the property
    //if you just call fetch again, it will merge.
    fetchInitialData () {
        if(this.token) {
            this.fetch();
            this.repos.fetch();
        }
    }
})

//props are things we expect to get back from the server, session is, as the
// name suggests, a per-session thing.

//General notes: any property you set can be observed!
//Change event only fires if a change actually took place.