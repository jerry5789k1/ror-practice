import React from 'react';
import axios from 'axios'
import DataTable from '../../components/DataTable/DataTable';
import SelectsGroup from '../../components/SelectsGroup/SelectsGroup';

export default class DataTableContainer extends React.Component {
    state = {
        turnOverData: [],
        dateOptions: [],
        stockCodeOptions: [],
        date:"",
        stock_code:"",
    }
    componentDidMount = () => {
       axios.get('api/getAllTurnOverData').then(res => this.setState({turnOverData: res.data}))
       axios.get('api/getAllDate').then(res => this.setState({dateOptions: res.data}))
       axios.get('api/getAllCode').then(res => this.setState({stockCodeOptions: res.data}))
    }
    
    filterTurnOverData = () => {
        const { date, stock_code } = this.state
        if(stock_code.length !== 0 && date.length !== 0){
            this.filteredByBoth(date,stock_code)
        }else if(stock_code.length !== 0){
            this.filteredByCode(stock_code)
        }else if(date.length !== 0){
            this.filteredByDate(date)
        }else { 
            this.getAllTurnOverData();
        }
    }

    filteredByCode = (stock_code) => {
        axios.get(`api/getFilterTurnOverDataByCode/code/${stock_code}`).then(res => this.setState({turnOverData: res.data}))
    }
    filteredByDate = (date) => {
        axios.get(`api/getFilterTurnOverDataByDate/date/${date}`).then(res => this.setState({turnOverData: res.data}))
    }
    filteredByBoth = (date, stock_code) => {
        axios.get(`api/getFilterTurnOverData/date/${date}/code/${stock_code}`).then(res => this.setState({turnOverData: res.data}))
    }
    getAllTurnOverData = () => {
        axios.get('api/getAllTurnOverData').then(res => this.setState({turnOverData: res.data}))
    }

    getSortingData = (dataType) => {
        axios.get(`api/sort/${dataType}`).then(res => this.setState({turnOverData: res.data}))
    }

    handleChange = (value, type) => {
        this.setState({ [type]:value },()=>this.filterTurnOverData())
    }

    render() {
        const { turnOverData, dateOptions, stockCodeOptions, date, stock_code } = this.state
        const options = {
            dateOptions:dateOptions,
            stockCodeOptions:stockCodeOptions,
        }
        return (
            <React.Fragment>
               <SelectsGroup options={options} date={date} stockCode={stock_code} handleChange={this.handleChange}/>
               <DataTable turnOverData={ turnOverData } getSortingData={this.getSortingData}/>
            </React.Fragment>
        );
    }
}
