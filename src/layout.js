import React from 'react'
import localLinks from 'local-links'
import NavHelper from './components/nav-helper'
//look at mixin docs
import ampersandMixin from 'ampersand-react-mixin'
//ampersand does the routes, local-links figures out where in the target it was
//router.history.navigate... understand how this works
export default React.createClass({
    //mixins key is a part of react
    //mounting just means added to document
    // the ampersand mixin itself has component mounting, and it can
    // autowatch for collections and state objects. check the github for the
    // mixin. If you give it a model, it will call force update on it.
    // It becomes aware through ampersand-model, maybe?
    //the mixin here is good for specifying redraw of one thing
    mixins: [ampersandMixin],

    render() {
        //uses ES6 destructuring to make me's props, creates a local me
        // reference, easy way to pull props off a component
        //ES6 template strings are distinct from these
        const {me} = this.props
        let something;
        if (true){
            something = <li>Foo</li>
        }
        return (
            <NavHelper>
                <nav className='top-nav top-nav-light cf' role='navigation'>
                    <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
                    <label htmlFor='menu-toggle'>Menu</label>
                    <ul className='list-unstyled list-inline cf'>
                        <li>Labelr</li>
                        <li><a href='/repos'>Repos</a></li>
                        {something}
                        <li className='pull-right'><a href='/logout'>Logout</a>{me.login}</li>
                    </ul>
                </nav>
                <div className='container'>
                    {this.props.children}
                </div>
            </NavHelper>
        )
    }
})

//this.props.children looks for react tags
//this.props is anything that gets passed as an argument in React.render. But
// look it up.
//remember that if statements can't be done within the jsx proper, has to be
// done inside defined lets and vars. If something is undefined, jsx just
// ignores it.