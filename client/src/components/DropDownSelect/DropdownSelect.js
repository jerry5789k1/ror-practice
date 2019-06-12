import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    changed: PropTypes.func,
    options: PropTypes.array,
    class: PropTypes.string,
    type: PropTypes.string,
};
const defaultProps = {
    value: '',
    title: '',
    changed: () => {},
    options: [],
    class: '',
    type: '',
};

 const DropDownSelect = (props) => {
    const options = props.options.map((option, i)=> {
        return  <MenuItem key={i} value={option[props.type]}>{option[props.type]}</MenuItem>
    })
    return (
        <React.Fragment>
            <h3>{props.title}:</h3>
            <Select className={props.class} value={props.value} onChange={(e)=> props.changed(e.target.value,props.type)}>
                <MenuItem value=''>無</MenuItem>
                {options? options : null}
            </Select>
        </React.Fragment>
    );
}

DropDownSelect.propTypes = propTypes;
DropDownSelect.defaultProps = defaultProps;

export default DropDownSelect;