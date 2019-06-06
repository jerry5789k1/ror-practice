import React from 'react';
import DataRecord from '../DataRecord/DataRecord';
import HeaderButton from './components/HeaderButton/HeaderButton';
import './DataTable.scss'

const DATATABLE_HEADER_COLUMN_DATA = [
    {content: '排', code: 'RANK'},
    {content: '代號', code: 'STOCK_CODE'},
    {content: '名稱', code: 'STOCK_NAME'},
    {content: '開盤價', code: 'STOCK_OPENING_PRICE'},
    {content: '最高價', code: 'STOCK_DAY_HIGH'},
    {content: '最低價', code: 'STOCK_DAY_LOW'},
    {content: '昨收盤', code: 'STOCK_CLOSING_PRICE_YES'},
    {content: '今收盤', code: 'STOCK_CLOSING_PRICE_TODAY'},
    {content: '成交量', code: 'STOCK_VOLUME'},
    {content: '漲跌', code: 'STOCK_CHANGE'},
    {content: '漲跌幅', code: 'STOCK_QUOTE_CHANGE'},
]
const DataTable = (props) => {
    const dataTableHeader = DATATABLE_HEADER_COLUMN_DATA.map((column, i) => {
        let {content, code} = column
        return < HeaderButton key={`${i}-${code}`} code={code} content={content} clicked={props.getSortingData}/>
    })
    const displayRecord = props.turnOverData.map((record, i)=> {
        return <DataRecord record={record} key={i} index={i}/>
    })
    return (
        <div className="data_table_wrapper">
            <div className="data_table_header">
                {dataTableHeader}
            </div>
            <div className="data_table_record_container">
               {displayRecord}
            </div>
        </div>
    );
}
export default DataTable