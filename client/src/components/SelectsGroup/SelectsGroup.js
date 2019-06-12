import React from 'react';
import DropDownSelect from '../DropDownSelect/DropdownSelect';
import PropTypes from 'prop-types';
import './SelectsGroup.scss';

const propTypes = {
  options: PropTypes.object,
  date: PropTypes.string,
  stockCode: PropTypes.string,
  handleChange: PropTypes.func,
};
const defaultProps = {
  options: {
    stockCodeOptions: [],
    dateOptions: [],
  },
  date: '',
  stockCode: '',
  handleChange: () => {},
};

const SelectsGroup = (props) => {
  return (
    <div className='selects-group-container'>
      <DropDownSelect
        value={props.stockCode}
        title='代號'
        changed={props.handleChange}
        options={props.options.stockCodeOptions}
        class='stock-code-select'
        type='stock_code'
      />
      <DropDownSelect
        value={props.date}
        title='日期'
        changed={props.handleChange}
        options={props.options.dateOptions}
        class='date-select'
        type='date'
      />
    </div>
  );
};

SelectsGroup.propTypes = propTypes;
SelectsGroup.defaultProps = defaultProps;

export default SelectsGroup;
