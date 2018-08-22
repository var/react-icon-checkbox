import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class IconCheckbox extends Component {
    render() {
        return (
            <label className='icon-checkbox-container'>
            <input className='icon-checkbox' type='checkbox' onClick={this.props.onClick} checked={this.props.checked} />
            <span className={this.props.iconContainerClassName ? this.props.iconContainerClassName : 'icon-container'} style={this.props.iconContainerStyle}>
            {this.props.checked ? <span className="checked-icon">{this.props.checkedIcon}</span> : <span className="unchecked-icon">{this.props.uncheckedIcon}</span>}
            </span>
            </label>
        )
    }
}

IconCheckbox.defaultProps = {
    checked: false
}

IconCheckbox.propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    iconContainerClassName: PropTypes.string,
    iconContainerStyle: PropTypes.style,
    checkedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
    uncheckedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
}

export default IconCheckbox;