import React from 'react';
import PropTypes from 'prop-types';
import './DataRecord.scss';

const propTypes = {
    record: PropTypes.object,
    index: PropTypes.any,
};
const defaultProps = {
   record: {
     stock_code:'',
     stock_name:'',
     stock_opening_price:'',
     stock_day_high:'',
     stock_day_low:'',
     stock_closing_price_yesterday:'',
     stock_closing_price_today:'',
     stock_volume:'',
     stock_change:'',
     stock_quote_change:'',
   },
   index: 0,
};

const DataRecord = ({record, index}) => {
    const getStockChangeStyle = (stock_change_value) => {
        if(stock_change_value > 0){
            return 'record-column quote-change-up'
        }else if (stock_change_value < 0){
            return 'record-column quote-change-down'
        }else {
            return 'record-column'
        }
    }
    const getStockChangeValue = (stock_change_value) => {
        const value = Math.abs(stock_change_value)
        if(stock_change_value > 0) {
            return `▲ ${value}`
        }else if(stock_change_value < 0) {
            return `▼ ${value}`
        }else {
            return `- ${value}`
        }
    }   
    return (
       <div className="datarecord-wrapper">
           <div className="record-column">{index + 1 }</div>
           <div className="record-column">{record.stock_code}</div>
           <div className="record-column">{record.stock_name}</div>
           <div className="record-column">{record.stock_opening_price}</div>
           <div className="record-column">{record.stock_day_high}</div>
           <div className="record-column">{record.stock_day_low}</div>
           <div className="record-column">{record.stock_closing_price_yesterday}</div>
           <div className="record-column">{record.stock_closing_price_today}</div>
           <div className="record-column">{record.stock_volume}</div>
           <div className={getStockChangeStyle(record.stock_change)}>{getStockChangeValue(record.stock_change)}</div>
           <div className="record-column">{record.stock_quote_change}%</div>
       </div>
    );
}

DataRecord.propTypes = propTypes;
DataRecord.defaultProps = defaultProps;

export default DataRecord