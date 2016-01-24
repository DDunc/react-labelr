import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

//ampersand collections mimic arrays
//react-ampersand version of ng-repeat for obj in objs syntax, etc.
export default React.createClass({
    mixins: [ampersandMixin],

    render() {
        const {repos} = this.props;
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                {repos.map((repo) => {
                    return (<li><a href="">{repo.full_name}</a></li>)
                })}
                </ul>
            </div>
        )
    }
})