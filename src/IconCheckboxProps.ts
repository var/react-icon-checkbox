import {CSSProperties, MouseEventHandler} from "react";

export interface IconCheckboxProps {
    checked: boolean,
    onClick: MouseEventHandler,
    iconContainerClassName: string,
    iconContainerStyle: CSSProperties,
    checkedIcon: string | Element,
    uncheckedIcon: string | Element,
}
