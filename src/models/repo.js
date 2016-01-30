import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'

//these are being defined based on the github API.
//that's a smart idea... naming shit the way the API names it so you can
// just move them over one-to-one.

//make it look and feel like a JSON object, basically.
//defining the url in our ampersand model: //https://ampersandjs.com/docs/#ampersand-model-url

export default Model.extend(githubMixin, {
    url () {
      return 'https://api.github.com/repos/' + this.full_name;
    },

    props: {
        id: 'number',
        name: 'string',
        full_name: 'string'
    },
    //prop name is underneath, these keys are specified by ampersand
    //deps, derived function requires the following keys
    derived: {
        appUrl: {
            deps: ['full_name'],
            fn() {
                return '/repo/' + this.full_name
            }
        }
    }
})
