import React,{Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class OHP extends Component{

    render() {
        let overheadpressData = this.props.workoutData

        return (
            <div className="OHPInputContainer">
                <BootstrapTable className="fontColor" data={overheadpressData} striped search pagination hover>
                    <TableHeaderColumn width='70px' isKey dataField='day'>Day</TableHeaderColumn>
                    <TableHeaderColumn width='200px' dataField='set_count'>Set Count</TableHeaderColumn>
                    <TableHeaderColumn width='200px' dataField='weight_count'>Weight Count</TableHeaderColumn>
                    <TableHeaderColumn width='200px' dataField='rep_count'>Rep Count</TableHeaderColumn>
                </BootstrapTable>
            </div>

        )
    }
}

export default OHP;
