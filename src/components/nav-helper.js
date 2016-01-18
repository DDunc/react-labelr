import React from 'react'
import localLinks from 'local-links'

export default React.createClass({
    displayName: "linker",

    onClick(event) {
        const pathname = localLinks.getLocalPathname(event);

        if (pathname) {
            console.log("pathname, no refresh");
            event.preventDefault();
            //don't put the global in this file
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