import Model from 'ampersand-model'
//these are being defined based on the github API.
//that's a smart idea... naming shit the way the API names it so you can
// just move them over one-to-one.
export default Model.extend({
    props: {
        id: 'number',
        name: 'string',
        full_name: 'string'
    }
})
