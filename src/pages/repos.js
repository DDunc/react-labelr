import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

//ampersand collections mimic arrays, so go nuts with array methods
export default React.createClass({
    //the ampersandMixin is basically a watcher, but only for things passed as
    // props within this scope.
    // The props are defined in router as repos={app.me.repos}
    mixins: [ampersandMixin],
//react-ampersand version of ng-repeat for item in items syntax, etc.
    //ES6 stuff -- if you skip the {} block designation, remember that it
    // returns on its own, so if you have no block and a return, you get a
    // double return statement you're a moron error. Conversely, if you have
    // a block and no return, you return nothing.
    render() {
        const {repos} = this.props;
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                {repos.map((repo) =>
                     (<li key={repo.id}>
                         <span className="octicon octicon-repo"> </span>
                         <a href={repo.appUrl}>{repo.full_name}</a></li>)
                )}
                </ul>
            </div>
        )
    }
})

//notice the key is {repo.id}, this is just to give it a unique ID, and I
// based it on the repo ID from github, since that's already a unique
// identifier. Useful to have a consistent ID, because there is no
// "mutateTo" dom native method or support.