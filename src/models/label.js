import Model from 'ampersand-model'

//these are being defined based on the github API.
//that's a smart idea... naming shit the way the API names it so you can
// just move them over one-to-one.

//make it look and feel like a JSON object, basically.
//defining the url in our ampersand model: //https://ampersandjs.com/docs/#ampersand-model-url


//exceptions to extend include: props, derived, session, collection, child.
//props creates a getter-setter for name, color, etc.
//getters and setters here enforce model types

export default Model.extend( {
    props: {
        name: 'string',
        color: 'string'
    },
    //for properties that don't need to persist, use session. Session stays
    // in browser and won't be passed along when the object is serialized.
    //remember, default is actual false or true, not string! Duh!
    session: {
        editing: {
            type: 'boolean',
            default: false
        }
    }
})
