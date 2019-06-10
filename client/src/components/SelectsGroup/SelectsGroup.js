import React from 'react';
import Selects from '../Selects/Selects'; 
import './SelectsGroup.scss';
const SelectsGroup = (props) => {
    return (
        <div className="selects-group-container">
            <Selects value={props.stockCode}
                     title="代號" 
                     changed={props.handleChange}  
                     options={props.options.stockCodeOptions}
                     class="stock-code-select" 
                     type="stock_code"/>
            <Selects value={props.date} 
                     title="日期"  
                     changed={props.handleChange} 
                     options={props.options.dateOptions} 
                     class="date-select"
                     type="date"/>
        </div>
    );
}

export default SelectsGroup
