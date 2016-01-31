import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

//defining label const
export default React.createClass({
    displayName: "labelHelper",

    mixins: [ampersandMixin],


    //props is what is passed to it and appended
    onEditClick () {
        this.props.label.editing = true;
    },
    onCancelClick () {
        this.props.label.editing = false;
    },

    render(){
        const {label} = this.props;
        const cssColor = "#" + label.color;
        let content;

        console.log(label.editing);
        //editing
        if(label.editing) {
            content = ( <form className='label'>
                <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
                <input name='name'/>
                <input name='color'/>
                <button type='submit' className='button button-small'>Save</button>
                <button type='button' className='button button-small button-unstyled'  onClick={this.onCancelClick}>cancel</button>
            </form>)
        } else {
          content = (  <div className='label'>
                <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
                <span> {label.name}</span>
                <span className='octicon octicon-pencil' onClick={this.onEditClick}> </span>
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