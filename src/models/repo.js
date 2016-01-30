import Model from 'ampersand-model'
//these are being defined based on the github API.
//that's a smart idea... naming shit the way the API names it so you can
// just move them over one-to-one.

//make it look and feel like a JSON object, basically.
export default Model.extend({
    props: {
        id: 'number',
        name: 'string',
        full_name: 'string'
    },
    //prop name is underneath, these keys are specified by ampersand
    derived: {
        appUrl: {
            deps: ['full_name'],
            fn() {
                return '/repo/' + this.full_name
            }
        }
    }
})
