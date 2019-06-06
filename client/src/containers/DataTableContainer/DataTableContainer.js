import React from 'react';
import axios from 'axios'
import DataTable from '../../components/DataTable/DataTable';
export default class DataTableContainer extends React.Component {
    state = {
        turnOverData: [],
    }
    componentDidMount = () => {
        axios.get('api/getAllTurnOverData').then(res => this.setState({turnOverData: res.data}))
    }

    getSortingData = (code= '') => {
        axios.get(`api/sort/${code}`).then(res => this.setState({turnOverData: res.data}))
    }    
    render() {
        const { turnOverData } = this.state
        return (
            <React.Fragment>
               <DataTable turnOverData={ turnOverData } getSortingData={this.getSortingData}/>
            </React.Fragment>
        );
    }
}
