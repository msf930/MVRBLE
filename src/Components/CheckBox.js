import React from 'react';
import "../Styles/checkBox.css";

const CheckBox = ({checkBoxChange}) => {
    return(
        <div className = 'pa2'>
            <input 
                className = 'pa3 ba b--black bg-white'
                type='checkbox' 
                onChange= {checkBoxChange}
            />
        </div>
    )
}

export default CheckBox;