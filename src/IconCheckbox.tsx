import * as React from 'react';
import {IconCheckboxProps} from "./IconCheckboxProps";

export function IconCheckbox(props: IconCheckboxProps) {
    return (
        <label style={{display: "inline-block", transition: "all .3s"}}>
            <input style={{opacity: 0}} type='checkbox' onClick={props.onClick} checked={props.checked}/>
            <span className={props.iconContainerClassName ? props.iconContainerClassName : 'icon-container'}
                  style={props.iconContainerStyle}>
                {props.checked ? <span className="checked-icon">{props.checkedIcon}</span> :
                <span className="unchecked-icon">{props.uncheckedIcon}</span>}
            </span>
        </label>
    )
}
