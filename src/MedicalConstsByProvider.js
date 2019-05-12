import React from 'react';
import MedicalConstByProvider from './MedicalConstByProvider';
import './medicalConstsByProvider.css'

const MedicalConstsByProvider = () => {
    return (<div className="medicalConstsByProvider" >
        <div className="header-part">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="title">Medical Cost by Providers</div>
                <div>More Details</div>
            </div>
        </div>
        <MedicalConstByProvider />
        <MedicalConstByProvider />
        <MedicalConstByProvider />
        <MedicalConstByProvider />
        <MedicalConstByProvider />
    </div>);
}

export default MedicalConstsByProvider;