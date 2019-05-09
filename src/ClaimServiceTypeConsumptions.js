import React from 'react';
import ClaimServiceTypeConsumption from './ClaimServiceTypeConsumption';
import './claimServiceTypeConsumptions.css'

const ClaimServiceTypeConsumptions = () => {
    return (<div className="claimServiceTypeConsumptions" >
        <div className="header">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="title">Claims - Service Type Consumption</div>
                <div>More Details</div>
            </div>
        </div>
        <ClaimServiceTypeConsumption />
        <ClaimServiceTypeConsumption />
        <ClaimServiceTypeConsumption />
        <ClaimServiceTypeConsumption />
        <ClaimServiceTypeConsumption />
    </div>);
}

export default ClaimServiceTypeConsumptions;