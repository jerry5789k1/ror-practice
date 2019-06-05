import React from 'react';
import DataRecord from '../DataRecord/DataRecord';
import './DataTable.scss'

const DATA_TABLEHEADER_CONTENT = ['排','代號', '名稱', '開盤價', '最高價', '最低價', '昨收盤', '今收盤', '成交量','漲跌','漲跌幅']

const DataTable = (props) => {
    const dataTableHeader = DATA_TABLEHEADER_CONTENT.map((content, i) => {
        return <div className="data_column" key={`${i}-${content}`}>{content}</div>
    })
    const displayRecord = props.turnOverData.map((record, i)=> {
        return <DataRecord record={record} key={i} index={i}/>
    })
    return (
        <React.Fragment>
            <div className="data_table_header">
                {dataTableHeader}
            </div>
            <div>
               {displayRecord}
            </div>
        </React.Fragment>
    );
}
export default DataTable