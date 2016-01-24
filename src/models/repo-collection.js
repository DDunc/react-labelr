import Collection from 'ampersand-rest-collection'
import Repo from './repo'
import githubMixin from '../helpers/github-mixin'
//distinct between regular collections with no saving, and collections with
// rest methods.

//by specifying the model here, even if I pass it a plain object, it will
// turn the object into this model. Look into that.
//we need the auth header too

//can take as many arguments as you want, so the github mixin is just
// another argument.
export default Collection.extend(githubMixin, {
    //simple way to keep data from getting stale would be to keep fetching,
    // because fetching
    initialize () {
        setInterval(() => {
           this.fetch();
        }, 5000)
    },

    url: 'https://api.github.com/user/repos',

    model: Repo
})