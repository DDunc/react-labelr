import React from 'react'
import localLinks from 'local-links'
import NavHelper from './components/nav-helper'

//ampersand does the routes, local-links figures out where in the target it was
//router.history.navigate... understand how this works
export default React.createClass({

    render() {
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
                        <li className='pull-right'><a href='/'>Logout</a></li>
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