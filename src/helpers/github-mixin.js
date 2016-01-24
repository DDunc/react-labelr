//ampersand app is the way we have an app global, basically
import app from 'ampersand-app'

//can just export an obj with a key that's a func like so...
export default {
    ajaxConfig () {
        return {
            headers: {
                Authorization: 'token ' + app.me.token
            }
        }
    }
}