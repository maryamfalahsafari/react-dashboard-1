import React from 'react';
import ProgressChart from './ProgressChart';

const MedicalConstByICD = () => {
    return (<div class="container-fluid">
        
        <div class="row gridRow" style={{marginBottom:'10px'}}>
            <div class="col-md-1 col-sm-4 col-xs-4">ICD</div>
            <div class="col-md-2 col-sm-2 col-xs-2">ICD Description</div>
            <div class="col-md-2 col-sm-1 col-xs-1">SAR 0.00</div>
            <div class="col-md-1 col-sm-1 col-xs-1">0</div>
            <div class="col-md-1 col-sm-1 col-xs-1" style={{textAlign:"right",color:'#0079c8'}}>6</div>
            <div class="col-md-5 col-sm-5 col-xs-5">
                <ProgressChart value="30"></ProgressChart>
            </div>
        </div>
       
    </div>);
}

export default MedicalConstByICD;