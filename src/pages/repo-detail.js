import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import LabelHelper from '../components/label-helper'
//events don't bubble up from child collection to parent object

//ampersand models vs redux store

//notice how LabelHelper has to be passed label, as it's expected in
// label-helper.

export default React.createClass({
    mixins: [ampersandMixin],

    displayName: 'RepoDetail',

    render () {
        //de-structure
        //nice example of using label name as key
        // .cid from out of the box with ampersand models
        const {repo, labels} = this.props;
        return (
            <div className="container">
                <h1>{repo.full_name}</h1>
                <p> </p>
                <ul>
                    {labels.map((label) =>
                         <LabelHelper  key={label.cid} label={label}/>
                    )}
                </ul>
            </div>
        )
    }
})
