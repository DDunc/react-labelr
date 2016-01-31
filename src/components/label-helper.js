import React from 'react'

//defining label const
export default React.createClass({
    displayName: "labelHelper",

    render(){
        const {label} = this.props;
        let content;
        console.log(label.editing);
        //editing
        if(label.editing) {
            content = ( <form className='label'>
                <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
                <input name='name'/>
                <input name='color'/>
                <button type='submit' className='button button-small'>Save</button>
                <button type='button' className='button button-small button-unstyled'>cancel</button>
            </form>)
        } else {
          content = (  <div className='label'>
                <span className='label-color'>&nbsp;</span>
                <span> </span>
                <span className='octicon octicon-pencil'> </span>
                <span className='octicon octicon-x'> </span>
                 </div>
          )
        }

        return (
            <div>
                {content}
            </div>
            //<li>{label.name}</li>
        )
    }
})