import React from 'react'
import localLinks from 'local-links'
//note that this is now the same app required in on app, ie, it's actively
// modified
import app from 'ampersand-app'


export default React.createClass({
    displayName: "nav helper",

    onClick(event) {
        const pathname = localLinks.getLocalPathname(event);

        if (pathname) {
            console.log("pathname, no refresh");
            event.preventDefault();
            //same as ee 'emit' event
            //note that there is an "all" string, but all others are
            // socket.io style matched strings, don't overuse or you'll make
            // a mess.
            app.trigger('local', {some: 'data'});
            app.router.history.navigate(pathname);
        }
    }, //remember this is a key-value pair inside of an object

    render(){
        return (
            <div {...this.props} onClick={this.onClick}>
                {this.props.children}
                </div>)
    }

})

//...this.props says any properties set on the navhelper will be passed and
// applied here.
//this.props will override things declared before it.