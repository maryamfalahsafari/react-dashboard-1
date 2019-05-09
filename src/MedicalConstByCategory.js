import React from 'react';
import ProgressChart from './ProgressChart';

const MedicalConstByCategory = () => {
    return (<div class="container-fluid">

        <div class="row gridRow" style={{ marginBottom: '10px' }}>
            <div class="col-md-2 col-sm-2 col-xs-2">Category</div>
            <div class="col-md-3 col-sm-3 col-xs-3" style={{ textAlign: "right", color: '#0079c8' }}>SAR 0.00</div>
            <div class="col-md-7 col-sm-7 col-xs-7">
                <ProgressChart value="30"></ProgressChart>
            </div>
        </div>

    </div>);
}

export default MedicalConstByCategory;