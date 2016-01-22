import Model from 'ampersand-model'

export default Model.extend({
    initialize () {
        this.token = window.localStorage.token;
        //note: NO SPACES on change:token ... like... none!
        this.on('change:token', this.onTokenChange); //this is ampersand
        // and backbone way to define a change EE listener.
    },

    props: {
        id: 'number',
        login: 'string',
        avatar_url: 'string'
    },

    session: {
        token: 'string'  //our auth token is here
    },

    onTokenChange () {
        console.log("on token change fired");
        window.localStorage.token = this.token;
    }
})

//props are things we expect to get back from the server, session is, as the
// name suggests, a per-session thing.